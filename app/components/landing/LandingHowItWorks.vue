<script setup lang="ts">
const steps = [
  { n: '01', title: 'Create a document', body: 'Start a new doc from your dashboard in one click.' },
  { n: '02', title: 'Share the link', body: 'Send your collaborators a link — no accounts required to view.' },
  { n: '03', title: 'Write together', body: 'Watch edits appear live. See who\'s working where.' },
]
</script>

<template>
  <section id="how-it-works" class="px-6 py-24">
    <div class="mx-auto max-w-4xl">
      <h2 class="mb-16 text-center text-4xl font-semibold">How it works</h2>
      <div class="flex flex-col gap-12">
        <div v-for="step in steps" :key="step.n" class="flex items-start gap-8">
          <span class="shrink-0 font-mono text-5xl font-bold text-mint-500/30">{{ step.n }}</span>
          <div class="flex flex-col gap-2 pt-2">
            <h3 class="text-xl font-semibold">{{ step.title }}</h3>
            <p class="text-gray-400">{{ step.body }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
