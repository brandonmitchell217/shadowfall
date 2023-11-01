<script setup>
import NavHeader from "./components/ui/NavHeader.vue";
import Card from "./components/ui/Card/Card.vue";
import LandingBg from "./assets/landingBG.svg";
import CharacterCard from "./components/ui/Card/CharacterCard.vue";
import PricingCard from "./components/ui/Card/PricingCard.vue";

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

const characterCards = [
  {
    name: "Magnus",
    image: "/character-1.png",
  },
  {
    name: "Malcom",
    image: "/character-2.png",
  },
  {
    name: "Kamui",
    image: "/character-3.png",
  },
  {
    name: "Vulkan",
    image: "/character-4.png",
  },
  {
    name: "Azeroth",
    image: "/character-5.png",
  },
];

const isAnnual = ref(false);

const monthlyPlans = [
  {
    title: "Basic Plan",
    subtitle: "Survivor's Starter Pack",
    price: "29.99",
    features: [
      "Access to the full game with all core features.",
      "Single-player mode available.",
      "Limited selection of character customization options.",
      "Exclusive in-game items: 'Rookie's Rations' supply pack.",
    ],
  },
  {
    title: "Pro Plan",
    subtitle: "Apocalypse Conqueror Bundle",
    price: "40.99",
    features: [
      "All features of the Basic Plan included.",
      "Unlock access to multiplayer mode, team up with friends.",
      "Extensive range of character customization choices.",
      'Exclusive in-game items: "Veterans Arsenal" weapon pack.',
      "Priority access to upcoming expansions and updates.",
    ],
  },
];

const annualPlans = [
  {
    title: "Basic Plan",
    subtitle: "Survivor's Starter Pack",
    price: "205.99",
    features: [
      "Access to the full game with all core features.",
      "Single-player mode available.",
      "Limited selection of character customization options.",
      "Exclusive in-game items: 'Rookie's Rations' supply pack.",
    ],
  },
  {
    title: "Pro Plan",
    subtitle: "Apocalypse Conqueror Bundle",
    price: "299.99",
    features: [
      "All features of the Basic Plan included.",
      "Unlock access to multiplayer mode, team up with friends.",
      "Extensive range of character customization choices.",
      'Exclusive in-game items: "Veterans Arsenal" weapon pack.',
      "Priority access to upcoming expansions and updates.",
    ],
  },
];
</script>

<template>
  <NavHeader />
  <main class="overflow-x-hidden scroll-smooth">
    <!-- First(landing) -->
    <section id="Landing" class="relative pt-20 lg:pt-24">
      <LandingBg
        class="absolute top-28 -left-[5%] -z-10 translate-x-[5%] w-[108%] h-auto"
      />
      <div class="container flex flex-col-reverse lg:flex-row justify-center">
        <div
          class="sm:w-[80%] lg:w-full mx-auto flex-[1.5] space-y-6 lg:space-y-8 xl:space-y-12 py-6 lg:py-20"
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
              class="w-full"
            >
              <Card
                v-bind:title="title.title"
                v-bind:image="title.image"
                href="/"
              />
            </div>
          </div>
        </div>
        <div class="flex-1 mx-auto flex justify-center items-center">
          <nuxt-img src="landingImg.png" class="h-full w-auto" />
        </div>
      </div>
    </section>

    <!-- Second(featured) -->
    <section id="Featured" class="relative pt-20 md:pb-10 lg:pt-24 lg:pb-12">
      <SectionHeader
        title="Harness the Power Of Innovation In A Game Of Survival"
        description="Discover unique mechanics and enhancements that take your gaming experience to new heights."
        v-bind:cta="false"
      />

      <div class="container relative pt-16 lg:py-16 flex flex-col">
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
          <div class="flex">
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

    <!-- Third(characters) -->
    <section id="Characters" class="relative pb-10 lg:pb-12">
      <SectionHeader
        title="From Outcasts To Legends"
        description="Witness the rise of unlikely heroes who defy the odds and challenge fate."
        v-bind:cta="false"
      />

      <div class="container relative pt-16 lg:py-16">
        <div class="characterGrid">
          <div
            v-for="(character, index) in characterCards"
            :key="index"
            :class="`char ${
              index == 0
                ? 'char1'
                : index == 1
                ? 'char2'
                : index == 2
                ? 'char3'
                : index == 3
                ? 'char4'
                : 'char5'
            }`"
          >
            <CharacterCard
              v-bind:name="character.name"
              v-bind:image="character.image"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Fourth(pricing) -->
    <section id="Pricing" class="relative pb-10 lg:pb-12">
      <SectionHeader
        title="Invest in Your Survival: Pricing Tiers"
        description="Explore Our Pricing Options Tailored to Your Gameplay Goals and Preferences"
        v-bind:cta="false"
      />

      <div
        class="py-20 flex justify-center items-center font-michroma text-[21px] text-center"
      >
        <button
          type="button"
          :class="`border border-darkBlue  py-2 px-6 ${
            isAnnual ? 'bg-transparent' : 'bg-darkBlue text-white'
          }`"
          @click="isAnnual = false"
        >
          Monthly Billing
        </button>
        <button
          type="button"
          :class="`border border-darkBlue py-2 px-6 ${
            isAnnual ? 'bg-darkBlue text-white' : 'bg-transparent'
          }`"
          @click="isAnnual = true"
        >
          Annual Billing
        </button>
      </div>

      <div
        v-if="!isAnnual"
        class="container flex flex-col md:flex-row justify-center items-center"
      >
        <div
          v-for="(plan, index) in monthlyPlans"
          :key="index"
          class="h-[680px] md:h-auto"
        >
          <PricingCard
            image="/shapes.svg"
            v-bind:title="plan.title"
            v-bind:subtitle="plan.subtitle"
            v-bind:price="plan.price"
            v-bind:features="plan.features"
            type="month"
          />
        </div>
      </div>
      <div
        v-else
        class="container flex flex-col md:flex-row justify-center items-center"
      >
        <div
          v-for="(plan, index) in annualPlans"
          :key="index"
          class="h-[680px] md:h-auto"
        >
          <PricingCard
            image="/swords.svg"
            v-bind:title="plan.title"
            v-bind:subtitle="plan.subtitle"
            v-bind:price="plan.price"
            v-bind:features="plan.features"
            type="year"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss">
.characterGrid {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  place-items: center;
  gap: 1.5rem 0;

  @media (min-width: 768px) {
    gap: 3rem 0;
  }

  @media (min-width: 1024px) {
    grid-auto-flow: column;
    grid-auto-columns: repeat(4, 1fr);
    grid-auto-rows: repeat(4, 1fr);
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas:
      "char1 . char2"
      ". char5 ."
      "char3 . char4";
  }

  .char1 {
    @media (min-width: 1024px) {
      grid-area: char1;
    }
  }
  .char2 {
    @media (min-width: 1024px) {
      grid-area: char2;
    }
  }
  .char3 {
    @media (min-width: 1024px) {
      grid-area: char3;
      margin-top: -10rem;
    }
  }
  .char4 {
    @media (min-width: 1024px) {
      grid-area: char4;
      margin-top: -10rem;
    }
  }
  .char5 {
    @media (min-width: 1024px) {
      grid-area: char5;
      margin-top: -6rem;
    }
  }
}
</style>
