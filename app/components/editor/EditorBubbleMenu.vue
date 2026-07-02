<script setup lang="ts">
import { BubbleMenu } from '@tiptap/vue-3'
import type { Editor } from '@tiptap/vue-3'

defineProps<{ editor: Editor }>()
</script>

<template>
  <BubbleMenu
    :editor="editor"
    class="flex items-center gap-1 rounded-lg border border-gray-200 bg-white p-1 shadow-lg dark:border-gray-700 dark:bg-gray-900"
  >
    <button
      class="rounded px-2 py-1 text-xs font-bold text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
      :class="{ 'bg-gray-100 dark:bg-gray-800': editor.isActive('bold') }"
      @click="editor.chain().focus().toggleBold().run()"
    >B</button>
    <button
      class="rounded px-2 py-1 text-xs italic text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
      :class="{ 'bg-gray-100 dark:bg-gray-800': editor.isActive('italic') }"
      @click="editor.chain().focus().toggleItalic().run()"
    >I</button>
    <button
      class="rounded px-2 py-1 text-xs underline text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
      :class="{ 'bg-gray-100 dark:bg-gray-800': editor.isActive('underline') }"
      @click="editor.chain().focus().toggleUnderline().run()"
    >U</button>
    <div class="mx-1 h-4 w-px bg-gray-200 dark:bg-gray-700" />
    <button
      class="rounded px-2 py-1 font-mono text-xs text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
      :class="{ 'bg-gray-100 dark:bg-gray-800': editor.isActive('code') }"
      @click="editor.chain().focus().toggleCode().run()"
    >{ }</button>
  </BubbleMenu>
</template>
