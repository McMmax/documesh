<script setup lang="ts">
import type { Editor } from '@tiptap/vue-3'

const props = defineProps<{ editor: Editor }>()

const { editor } = toRefs(props)
</script>

<template>
  <div class="flex shrink-0 items-center gap-1 border-b border-gray-200 px-4 py-2 dark:border-gray-800">
    <button
      v-for="level in [1, 2, 3] as const"
      :key="level"
      class="rounded px-2 py-1 text-xs font-medium text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
      :class="{ 'bg-gray-100 dark:bg-gray-800': editor.isActive('heading', { level }) }"
      @click="editor.chain().focus().toggleHeading({ level }).run()"
    >
      H{{ level }}
    </button>
    <div class="mx-1 h-4 w-px bg-gray-200 dark:bg-gray-700" />
    <button
      class="rounded px-2 py-1 text-xs font-bold text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
      :class="{ 'bg-gray-100 dark:bg-gray-800': editor.isActive('bold') }"
      @click="editor.chain().focus().toggleBold().run()"
    >B</button>
    <button
      class="rounded px-2 py-1 text-xs italic text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
      :class="{ 'bg-gray-100 dark:bg-gray-800': editor.isActive('italic') }"
      @click="editor.chain().focus().toggleItalic().run()"
    >I</button>
    <button
      class="rounded px-2 py-1 text-xs underline text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
      :class="{ 'bg-gray-100 dark:bg-gray-800': editor.isActive('underline') }"
      @click="editor.chain().focus().toggleUnderline().run()"
    >U</button>
    <div class="mx-1 h-4 w-px bg-gray-200 dark:bg-gray-700" />
    <button
      class="rounded px-2 py-1 font-mono text-xs text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
      :class="{ 'bg-gray-100 dark:bg-gray-800': editor.isActive('codeBlock') }"
      @click="editor.chain().focus().toggleCodeBlock().run()"
    >{ }</button>
    <button
      class="rounded px-2 py-1 text-xs text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
      :class="{ 'bg-gray-100 dark:bg-gray-800': editor.isActive('bulletList') }"
      @click="editor.chain().focus().toggleBulletList().run()"
    >—</button>
    <button
      class="rounded px-2 py-1 text-xs text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
      :class="{ 'bg-gray-100 dark:bg-gray-800': editor.isActive('taskList') }"
      @click="editor.chain().focus().toggleTaskList().run()"
    >☐</button>
  </div>
</template>
