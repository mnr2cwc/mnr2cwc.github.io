import { computed, ref } from 'vue'

// A display identity only; this does not authenticate or authorize a visitor.
export const visitor = ref<{ id: string | null; name: string } | null>(null)
export const isNamedVisitor = computed(() => Boolean(visitor.value?.id))
