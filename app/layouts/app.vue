<template>
  <div class="flex h-screen overflow-hidden bg-white dark:bg-gray-950">
    <DashboardSidebar />
    <main class="flex flex-1 flex-col overflow-hidden">
      <slot />
    </main>
  </div>
</template>
