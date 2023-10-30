<template>
  <div>
    <NuxtWelcome />
    <section class="bg-slate-600 text-white/90 py-32 h-screen">
      <h2 class="text-4xl uppercase">This is stuff</h2>
    </section>
  </div>
</template>

<style lang="scss">
h2 {
  @apply text-center;

  &::before {
    @apply block w-20 h-1 bg-white mx-auto mb-4;
    content: "";
  }
}
</style>
