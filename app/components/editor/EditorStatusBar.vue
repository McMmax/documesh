<script setup lang="ts">
import type { Editor } from '@tiptap/vue-3'

const props = defineProps<{ editor: Editor; saved?: boolean }>()

const chars = computed(() => props.editor.storage.characterCount?.characters?.() ?? 0)
const words = computed(() => props.editor.storage.characterCount?.words?.() ?? 0)
</script>

<template>
  <div class="flex shrink-0 items-center justify-between border-t border-gray-200 px-4 py-1.5 dark:border-gray-800">
    <span class="text-xs text-gray-400">{{ words }} words · {{ chars }} chars</span>
    <span class="text-xs" :class="saved ? 'text-mint-500' : 'text-gray-400'">
      {{ saved ? 'Saved' : 'Saving…' }}
    </span>
  </div>
</template>
