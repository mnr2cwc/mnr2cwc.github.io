import { ref } from 'vue'
import { isNamedVisitor } from './visitor'

export type PageId = 'home' | 'komodo' | 'bali' | 'bali-housing' | 'java' | 'people' | 'profile'

// Shared, app-wide current page. Replaces the legacy showPage() global.
export const currentPage = ref<PageId>('home')

export function navigate(id: PageId): void {
  currentPage.value = (id === 'people' || id === 'profile') && !isNamedVisitor.value ? 'home' : id
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
