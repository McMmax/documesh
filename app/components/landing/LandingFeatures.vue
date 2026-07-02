<script setup lang="ts">
const features = [
  {
    title: 'Real-time collaboration',
    description: 'Multiple cursors, live edits. Everyone sees changes as they happen.',
  },
  {
    title: 'Rich document editor',
    description: 'Tables, code blocks, task lists, inline images — everything your team needs.',
  },
  {
    title: 'Offline first',
    description: 'Keep writing without a connection. Changes sync automatically when you reconnect.',
  },
  {
    title: 'Fast by default',
    description: 'Optimistic updates, local-first storage. No waiting for the server.',
  },
]
</script>

<template>
  <section id="features" class="px-6 py-24">
    <div class="mx-auto max-w-6xl">
      <h2 class="mb-16 text-center text-4xl font-semibold">Everything your team needs</h2>
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="f in features"
          :key="f.title"
          class="flex flex-col gap-4 rounded-2xl border border-gray-800 bg-gray-900 p-6"
        >
          <h3 class="text-lg font-medium">{{ f.title }}</h3>
          <p class="text-sm leading-relaxed text-gray-400">{{ f.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
