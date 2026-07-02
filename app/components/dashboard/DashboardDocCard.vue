<script setup lang="ts">
import type { Document as Doc } from '~/module_bindings/types'

const props = defineProps<{ doc: Doc }>()

const relativeTime = computed(() => {
  const ms = Number(props.doc.updatedAt.microsSinceUnixEpoch / 1000n)
  const diff = Date.now() - ms
  const mins = Math.floor(diff / 60000)
  if (mins < 1) return 'just now'
  if (mins < 60) return `${mins}m ago`
  const hrs = Math.floor(mins / 60)
  if (hrs < 24) return `${hrs}h ago`
  return `${Math.floor(hrs / 24)}d ago`
})
</script>

<template>
  <NuxtLink
    :to="`/doc/${doc.id}`"
    class="group flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-5 transition-all hover:border-mint-500/50 hover:shadow-sm dark:border-gray-800 dark:bg-gray-900 dark:hover:border-mint-500/50"
  >
    <h3 class="line-clamp-2 text-sm font-medium text-gray-900 dark:text-white">
      {{ doc.title || 'Untitled' }}
    </h3>
    <p class="mt-auto text-xs text-gray-500">{{ relativeTime }}</p>
  </NuxtLink>
</template>
