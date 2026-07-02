<script setup lang="ts">
const emit = defineEmits<{ newDoc: [] }>()
</script>

<template>
  <header class="flex h-14 shrink-0 items-center justify-between border-b border-gray-200 bg-white px-6 dark:border-gray-800 dark:bg-gray-950">
    <input
      type="search"
      placeholder="Search documents…"
      class="h-8 w-64 rounded-lg border border-gray-200 bg-gray-50 px-3 text-sm text-gray-900 placeholder-gray-400 focus:border-mint-500 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white"
    />
    <button
      class="rounded-lg bg-mint-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-mint-400"
      @click="emit('newDoc')"
    >
      New document
    </button>
  </header>
</template>
