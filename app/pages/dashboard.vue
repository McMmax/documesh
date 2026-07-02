<script setup lang="ts">
import { tables, reducers } from '~/module_bindings'

definePageMeta({ layout: 'app' })

// FIXME(gaddox): scope by ownerId once auth is wired — never full-table subscribe
const [docs, docsReady] = useTable(tables.document)
const documentCreate = useReducer(reducers.documentCreate)

async function onCreate() {
  const id = crypto.randomUUID()
  documentCreate(id, 'Untitled').catch(() => {})
  await navigateTo(`/doc/${id}`)
}
</script>

<template>
  <DashboardTopbar @new-doc="onCreate" />
  <div class="flex-1 overflow-y-auto p-6">
    <h1 class="mb-6 text-xl font-semibold text-gray-900 dark:text-white">My documents</h1>
    <DashboardDocGrid :docs="docsReady ? [...docs] : []" />
  </div>
</template>
