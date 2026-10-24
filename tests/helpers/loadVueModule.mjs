import { readFileSync, existsSync } from 'node:fs'
import { resolve, dirname, extname, relative } from 'node:path'
import { fileURLToPath } from 'node:url'
import ts from 'typescript'
import { parse, compileScript } from '@vue/compiler-sfc'

// Compile the actual client SFC templates for DOM integration tests. Imports can
// replace network/auth repositories while retaining real components and state.
export function createModuleLoader(overrides = {}) {
  const root = fileURLToPath(new URL('../../', import.meta.url))
  const cache = new Map()
  function moduleUrl(filename) {
    const path = resolve(root, filename)
    if (cache.has(path)) return cache.get(path)
    let code = overrides[path] ?? overrides[relative(root, path)] ?? readFileSync(path, 'utf8')
    if (extname(path) === '.vue') {
      const { descriptor } = parse(code, { filename: path })
      code = compileScript(descriptor, { id: path, inlineTemplate: true }).content
    }
    code = ts.transpileModule(code, { compilerOptions: { target: ts.ScriptTarget.ES2020, module: ts.ModuleKind.ES2020 } }).outputText
      .replaceAll('import.meta.env.BASE_URL', "'/'")
    const source = ts.createSourceFile(path, code, ts.ScriptTarget.Latest, true, ts.ScriptKind.JS)
    const replacements = []
    function visit(node) {
      const specifierNode = ts.isImportDeclaration(node) || ts.isExportDeclaration(node)
        ? node.moduleSpecifier
        : ts.isCallExpression(node) && node.expression.kind === ts.SyntaxKind.ImportKeyword ? node.arguments[0] : undefined
      if (specifierNode && ts.isStringLiteral(specifierNode)) {
        const specifier = specifierNode.text
        let target
        if (specifier.startsWith('.')) {
          let dependency = resolve(dirname(path), specifier)
          if (!existsSync(dependency)) dependency += '.ts'
          target = moduleUrl(dependency)
        } else target = import.meta.resolve(specifier)
        replacements.push({ start: specifierNode.getStart(source), end: specifierNode.end, target })
      }
      ts.forEachChild(node, visit)
    }
    visit(source)
    for (const replacement of replacements.sort((a,b) => b.start-a.start)) code = code.slice(0, replacement.start) + JSON.stringify(replacement.target) + code.slice(replacement.end)
    const url = `data:text/javascript;base64,${Buffer.from(code).toString('base64')}`
    cache.set(path, url)
    return url
  }
  return { load: filename => import(moduleUrl(filename)) }
}
