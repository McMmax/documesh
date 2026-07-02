<template>
  <section class="relative flex min-h-screen flex-col items-center justify-center gap-10 px-6 py-24 text-center">
    <div class="flex max-w-4xl flex-col items-center gap-6">
      <h1 class="text-6xl font-semibold tracking-tight lg:text-8xl">
        Write together,<br />in real time.
      </h1>
      <p class="max-w-2xl text-xl text-gray-400">
        Documint is a collaborative document editor. Open a doc, share the link, and watch your team write alongside you.
      </p>
    </div>
    <div class="flex flex-wrap items-center justify-center gap-4">
      <NuxtLink
        to="/dashboard"
        class="rounded-xl bg-mint-500 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-mint-400"
      >
        Start writing
      </NuxtLink>
      <a
        href="#how-it-works"
        class="rounded-xl border border-gray-700 px-8 py-3.5 text-sm font-semibold text-gray-300 transition-colors hover:border-gray-500 hover:text-white"
      >
        See how it works
      </a>
    </div>
  </section>
</template>
