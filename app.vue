<script setup>
import NavHeader from "./components/ui/NavHeader.vue";
</script>
<template>
  <NavHeader />
  <main>
    <section class="pt-24">
      <div class="container flex justify-center">
        <div class="flex-1 space-y-12 py-20">
          <SectionHeader
            title="Unleash your survival instincts in a futuristic apocalypse."
            description="Engage in heart-pounding combat across ruined cityscapes and war-torn landscapes."
            v-bind:cta="true"
          />
          <div class="flex items-center gap-6">
            <Button
              href="/"
              text="Play Now"
              color="black"
              className="text-white min-w-[200px] text-center hover:text-black"
            />
            <Button
              href="/"
              text="Watch Trailer"
              color="transparent"
              className="text-black min-w-[200px] text-center hover:text-white"
            />
          </div>
        </div>
        <div>
          <NuxtImg src="landingImg.png" width="630" height="909" />
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss">
.container {
  margin: 0 auto;
}

section {
  position: relative;
  min-height: 100vh;
}
</style>
