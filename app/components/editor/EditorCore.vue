<script setup lang="ts">
import { EditorContent } from '@tiptap/vue-3'

const props = defineProps<{ docId: string }>()

const { editor } = useEditor(props.docId)
</script>

<template>
  <div class="flex h-full flex-col">
    <EditorToolbar v-if="editor" :editor="editor" />
    <div class="relative flex-1 overflow-y-auto">
      <EditorContent
        class="mx-auto min-h-full max-w-3xl px-16 py-12"
        :editor="editor"
      />
    </div>
    <EditorStatusBar v-if="editor" :editor="editor" />
  </div>
</template>
