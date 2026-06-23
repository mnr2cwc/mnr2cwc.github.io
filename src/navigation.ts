import { ref } from 'vue'

export type PageId = 'home' | 'komodo' | 'bali' | 'bali-housing' | 'java'

// Shared, app-wide current page. Replaces the legacy showPage() global.
export const currentPage = ref<PageId>('home')

export function navigate(id: PageId): void {
  currentPage.value = id
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
