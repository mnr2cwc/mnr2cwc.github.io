import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// Building into docs/ so GitHub Pages (configured to serve from /docs) picks up
// the compiled Vue app. base is '/' because this is a user/org page served at
// the domain root (mnr2cwc.github.io).
export default defineConfig({
    plugins: [vue()],
    base: '/',
    build: {
        outDir: 'docs',
        emptyOutDir: true,
    },
});
