<script setup lang="ts">
definePageMeta({ layout: 'app', keepalive: true })

const route = useRoute()
const docId = computed(() => route.params.id as string)
</script>

<template>
  <div class="flex h-full flex-col overflow-hidden">
    <ClientOnly>
      <EditorCollaboratorBar />
      <EditorCore :doc-id="docId" />
      <template #fallback>
        <div class="flex flex-1 items-center justify-center">
          <div class="h-6 w-6 animate-spin rounded-full border-2 border-mint-500 border-t-transparent" />
        </div>
      </template>
    </ClientOnly>
  </div>
</template>
