<script setup lang="ts">
const stats = [
  { value: '< 50ms', label: 'Sync latency' },
  { value: '∞', label: 'Collaborators per doc' },
  { value: '100%', label: 'Offline capable' },
  { value: 'MIT', label: 'License' },
]
</script>

<template>
  <section class="border-y border-gray-800 px-6 py-16">
    <div class="mx-auto grid max-w-6xl grid-cols-2 gap-8 lg:grid-cols-4">
      <div v-for="stat in stats" :key="stat.label" class="flex flex-col items-center gap-2 text-center">
        <span class="text-4xl font-bold text-mint-400">{{ stat.value }}</span>
        <span class="text-sm text-gray-500">{{ stat.label }}</span>
      </div>
    </div>
  </section>
</template>
