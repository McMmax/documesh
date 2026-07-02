<script setup lang="ts">
import type { Collaborator } from '~/types'

// TEMP(gaddox): populated from CollaborationCaret awareness state in Phase 3
const props = defineProps<{ collaborators?: Collaborator[] }>()
</script>

<template>
  <div
    v-if="props.collaborators?.length"
    class="flex shrink-0 items-center gap-2 border-b border-gray-200 px-4 py-2 dark:border-gray-800"
  >
    <div class="flex -space-x-2">
      <div
        v-for="c in collaborators"
        :key="c.clientId"
        class="flex h-7 w-7 items-center justify-center rounded-full text-xs font-medium text-white ring-2 ring-white dark:ring-gray-950"
        :style="{ backgroundColor: c.color }"
        :title="c.name"
      >
        {{ c.name.charAt(0).toUpperCase() }}
      </div>
    </div>
    <span class="text-xs text-gray-500">
      {{ collaborators!.length === 1 ? '1 other person' : `${collaborators!.length} others` }} editing
    </span>
  </div>
</template>
