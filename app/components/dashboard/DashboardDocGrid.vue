<script setup lang="ts">
import type { Document as Doc } from '~/module_bindings/types'

defineProps<{ docs: Doc[] }>()
</script>

<template>
  <div
    v-if="docs.length"
    class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  >
    <DashboardDocCard
      v-for="doc in docs"
      :key="doc.id"
      v-memo="[doc.updatedAt, doc.title]"
      :doc="doc"
    />
  </div>
  <div v-else class="flex h-48 flex-col items-center justify-center gap-2 text-center">
    <p class="text-sm text-gray-500">No documents yet.</p>
    <p class="text-xs text-gray-400">Create one to get started.</p>
  </div>
</template>
