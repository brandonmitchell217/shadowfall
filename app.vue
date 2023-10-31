<script setup>
import NavHeader from "./components/ui/NavHeader.vue";
import Card from "./components/ui/Card/Card.vue";

// const titles = ['Gameplay and Features', 'Items and Collectibles', 'Heroes and Game Locations']
const cardTitles = [
  {
    title: "Gameplay and Features",
  },
  {
    title: "Items and Collectibles",
  },
  {
    title: "Heroes and Game Locations",
  },
];
</script>

<template>
  <NavHeader />
  <main>
    <section class="pt-20 lg:pt-24">
      <div class="container flex flex-col-reverse lg:flex-row justify-center">
        <div
          class="sm:w-[80%] lg:w-full mx-auto flex-1 space-y-6 lg:space-y-8 xl:space-y-12 py-6 lg:py-20"
        >
          <SectionHeader
            title="Unleash your survival instincts in a futuristic apocalypse."
            description="Engage in heart-pounding combat across ruined cityscapes and war-torn landscapes."
            v-bind:cta="true"
          />

          <div
            class="flex justify-center lg:justify-stretch items-center gap-3 sm:gap-6"
          >
            <Button
              href="/"
              text="Play Now"
              color="black"
              className="text-white w-1/2 sm:w-auto sm:min-w-[200px] text-center hover:text-black"
            />
            <Button
              href="/"
              text="Watch Trailer"
              color="transparent"
              className="text-black w-1/2 sm:w-auto sm:min-w-[200px] text-center hover:text-white"
            />
          </div>
          <div class="hidden md:grid grid-cols-3 gap-3">
            <div v-for="title in cardTitles" v-bind:key="title.title">
              <Card v-bind:title="title.title" />
            </div>
          </div>
        </div>
        <div class="flex-1 mx-auto">
          <nuxt-img
            src="landingImg.png"
            sizes="100vw, sm:400px"
            class="lg:w-full"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss">
section {
  position: relative;
  min-height: 100vh;
}
</style>
