<script setup>
import NavHeader from "./components/ui/NavHeader.vue";
import Card from "./components/ui/Card/Card.vue";
import LandingBg from "./assets/landingBG.svg";

// const titles = ['Gameplay and Features', 'Items and Collectibles', 'Heroes and Game Locations']
const cardTitles = [
  {
    title: "Gameplay & Features",
    image: "shapes",
  },
  {
    title: "Items & Collectibles",
    image: "shield",
  },
  {
    title: "Heroes & Game Locations",
    image: "swords",
  },
];

const discoverCards = [
  {
    title: "Intense Survival Gameplay",
    description:
      "Test your skills and instincts as you navigate through hostile environments, scavenge for resources, and make crucial choices to survive in a world on the brink of collapse.",
    image: "shapes",
  },
  {
    title: "Tactical Combat and Customization",
    description:
      "Engage in adrenaline-pumping combat encounters, utilizing a range of futuristic weapons, gadgets, and abilities. Customize your play style, strategize your approach, and outmaneuver enemies for tactical advantage.",
    image: "shapes",
  },
  {
    title: "Cooperative Multiplayer",
    description:
      "Join forces with friends or other players in cooperative multiplayer mode. Tackle challenging missions together, coordinate strategies, and combine your unique abilities.",
    image: "shapes",
  },
];
</script>

<template>
  <NavHeader />
  <main class="overflow-x-hidden scroll-smooth">
    <!-- Landing -->
    <section class="relative pt-20 lg:pt-24">
      <LandingBg
        class="absolute top-28 -left-[5%] -z-10 translate-x-[5%] w-[108%] h-auto"
      />
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
          <div
            class="grid grid-cols-1 xs:grid-cols-3 xs:gap-1.5 md:gap-3 place-items-center"
          >
            <div
              v-for="title in cardTitles"
              v-bind:key="title.title"
              class="max-w-[200px] -mb-8 xs:m-0"
            >
              <Card
                v-bind:title="title.title"
                v-bind:image="title.image"
                href="/"
              />
            </div>
          </div>
        </div>
        <div class="flex-1 mx-auto xl:pb-24">
          <nuxt-img
            src="landingImg.png"
            sizes="100vw, sm:400px"
            class="lg:w-full lg:scale-90 xl:scale-100"
          />
        </div>
      </div>
    </section>
    <!-- Second -->
    <section class="relative pt-20 lg:pt-24">
      <div class="md:max-w-[75%] mx-auto">
        <SectionHeader
          title="Harness the Power Of Innovation In A Game Of Survival"
          description="Discover unique mechanics and enhancements that take your gaming experience to new heights."
          v-bind:cta="false"
        />
      </div>

      <div class="container relative py-16 flex flex-col">
        <NuxtImg
          src="/featureImg.png"
          alt="Feature Image showing futuristic character"
          height="905"
          width="685"
          class="absolute top-1/3 -translate-y-1/3 left-1/2 -translate-x-1/2 -z-10 scale-105 pointer-events-none"
        />
        <div
          v-for="(card, index) in discoverCards"
          :key="index"
          :class="`flex  ${
            index == 1
              ? 'justify-center lg:justify-end'
              : 'justify-center lg:justify-stretch'
          }`"
        >
          <div :class="flex">
            <Card
              v-bind:title="card.title"
              v-bind:description="card.description"
              v-bind:image="card.image"
              v-bind:large="true"
            />
          </div>
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
