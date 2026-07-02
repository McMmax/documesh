<script setup lang="ts">
const nav = [
  { label: 'Documents', to: '/dashboard' },
  { label: 'Shared with me', to: '/dashboard?filter=shared' },
  { label: 'Starred', to: '/dashboard?filter=starred' },
  { label: 'Trash', to: '/dashboard?filter=trash' },
]
</script>

<template>
  <aside class="flex h-screen w-60 shrink-0 flex-col gap-1 border-r border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900">
    <div class="mb-4 px-2 py-1">
      <span class="text-base font-semibold text-gray-900 dark:text-white">Documint</span>
    </div>
    <NuxtLink
      v-for="item in nav"
      :key="item.to"
      :to="item.to"
      class="rounded-lg px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
      active-class="bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-white"
    >
      {{ item.label }}
    </NuxtLink>
    <div class="mt-auto">
      <button class="w-full rounded-lg px-3 py-2 text-left text-sm text-gray-600 transition-colors hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-800">
        Settings
      </button>
    </div>
  </aside>
</template>
