<script setup lang="ts">
import { SpacetimeDBProvider } from 'spacetimedb/vue'
import { DbConnection } from '~/module_bindings'

const { public: { spacetimedbUri, spacetimedbModule } } = useRuntimeConfig()

const builder = DbConnection.builder()
  .withUri(spacetimedbUri as string)
  .withDatabaseName(spacetimedbModule as string)
  .onConnect((_, _identity, token) => {
    localStorage.setItem('stdb:token', token)
  })
</script>

<template>
  <ClientOnly>
    <SpacetimeDBProvider :connection-builder="builder">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </SpacetimeDBProvider>
    <template #fallback>
      <div class="flex h-screen items-center justify-center bg-white dark:bg-neutral-950">
        <div class="size-6 animate-spin rounded-full border-2 border-mint-500 border-t-transparent" />
      </div>
    </template>
  </ClientOnly>
</template>
