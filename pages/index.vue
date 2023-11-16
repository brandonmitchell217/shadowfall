<script setup>
import LandingBg from "../assets/landingBG.svg";
import Button from "../components/ui/Button/PrimaryButton.vue";
import Faq from "../components/TheFaq.vue";

const cardTitles = [
  {
    id: 1,
    title: "Gameplay & Features",
    image: "shapes",
    href: "/featured",
  },
  {
    id: 2,
    title: "Items & Collectibles",
    image: "shield",
    href: "/featured/items",
  },
  {
    id: 3,
    title: "Heroes & Game Locations",
    image: "swords",
    href: "/featured/heroes-and-locations",
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
      "Exclusive in-game items: 'Rookie`s Rations' supply pack.",
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
      'Exclusive in-game items: "Veteran`s Arsenal" weapon pack.',
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
      "Exclusive in-game items: 'Rookie`s Rations' supply pack.",
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
      'Exclusive in-game items: "Veteran`s Arsenal" weapon pack.',
      "Priority access to upcoming expansions and updates.",
    ],
  },
];

const faqs = [
  {
    id: 1,
    faq: 'Is "Shadowfall Chronicles" a single-player or multiplayer game?',
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum consectetur animi distinctio iusto natus eum saepe magnam ex cumque cum rerum, maxime veritatis repellendus quae ipsa dolor ducimus. Ipsum consectetur animi distinctio iusto natus.",
  },
  {
    id: 2,
    faq: "What sets the factions apart, and can I switch between them?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum consectetur animi distinctio iusto natus eum saepe magnam ex cumque cum rerum, maxime veritatis repellendus quae ipsa dolor ducimus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, minima!",
  },
  {
    id: 3,
    faq: "How does the crafting system work in the game?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum consectetur animi distinctio iusto natus eum saepe magnam ex cumque cum rerum, maxime veritatis repellendus quae ipsa dolor ducimus.",
  },
  {
    id: 4,
    faq: "Will my decisions affect the game's outcome, and are there multiple endings?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum consectetur animi distinctio iusto natus eum saepe magnam ex cumque cum rerum, maxime veritatis repellendus quae ipsa dolor ducimus.",
  },
  {
    id: 5,
    faq: "What content can I expect with the upcoming expansions?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum consectetur animi distinctio iusto natus eum saepe magnam ex cumque cum rerum, maxime veritatis repellendus quae ipsa dolor ducimus.",
  },
];
</script>

<template>
  <!-- First(landing) -->
  <section id="Landing" class="relative pt-20 lg:pt-24">
    <LandingBg
      class="absolute top-28 -left-[5%] -z-10 translate-x-[5%] w-[108%] h-auto"
    />
    <div class="container flex flex-col-reverse lg:flex-row justify-center">
      <div
        class="sm:w-[80%] lg:w-full mx-auto flex-[1.5] space-y-6 xs:py-6 lg:py-20"
      >
        <SectionHeader
          title="Unleash your survival instincts in a futuristic apocalypse."
          description="Engage in heart-pounding combat across ruined cityscapes and war-torn landscapes."
          v-bind:cta="true"
          v-bind:center="false"
          v-bind:colored="false"
        />

        <div
          class="flex justify-center lg:justify-stretch items-center gap-3 sm:gap-6"
        >
          <Button
            href="/"
            text="Play Now"
            color="black"
            className="text-white w-1/2 sm:w-auto sm:min-w-[200px] hover:text-black py-0.5"
          />
          <Button
            href="/#Featured"
            text="Learn More"
            color="transparent"
            className="text-black w-1/2 sm:w-auto sm:min-w-[200px] hover:text-white py-0.5"
          />
        </div>
        <div class="miniCard-container w-full pt-8">
          <div
            v-for="title in cardTitles"
            v-bind:key="title.id"
            class="miniCard h-[181px] w-[150px] xs:h-[231px] xs:w-[200px] xl:scale-110"
          >
            <MiniCard
              v-bind:id="title.id"
              v-bind:title="title.title"
              v-bind:image="title.image"
              v-bind:href="title.href"
            />
          </div>
        </div>
      </div>
      <div class="flex-1 mx-auto flex justify-center items-center">
        <nuxt-img src="landingImg.png" class="w-full h-auto" />
      </div>
    </div>
  </section>

  <!-- Second(featured) -->
  <section id="Featured" class="relative lg:pt-20 pb-10 lg:pb-12">
    <div
      class="container relative pt-16 lg:py-16 flex flex-col gap-12 sm:gap-24 xl:gap-32"
    >
      <SectionHeader
        title="Harness the Power Of Innovation In A Game Of Survival"
        description="Discover unique mechanics and enhancements that take your gaming experience to new heights."
        v-bind:cta="false"
        v-bind:center="true"
        v-bind:colored="true"
      />
      <NuxtImg
        src="/featureImg.png"
        alt="Feature Image showing futuristic character"
        height="905"
        width="685"
        class="absolute top-1/3 -translate-y-1/3 left-1/2 -translate-x-1/2 -z-10 scale-105 pointer-events-none"
      />
      <div class="flex flex-col">
        <div
          v-for="(card, index) in discoverCards"
          :key="index"
          :class="`flex ${
            index == 1
              ? 'justify-center md:justify-end'
              : 'justify-center md:justify-stretch'
          }`"
        >
          <FeatureCard
            v-bind:title="card.title"
            v-bind:description="card.description"
            v-bind:image="card.image"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- Third(characters) -->
  <section id="Characters" class="relative pb-10 lg:pb-12">
    <div class="container">
      <SectionHeader
        title="From Outcasts To Legends"
        description="Witness the rise of unlikely heroes who defy the odds and challenge fate."
        v-bind:cta="false"
        v-bind:center="true"
        v-bind:colored="true"
      />

      <div class="relative pt-16 lg:py-16">
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
    </div>
  </section>

  <!-- Fourth(pricing) -->
  <section id="Pricing" class="relative sm:pb-10 lg:pb-12">
    <div class="container">
      <SectionHeader
        title="Invest in Your Survival: Pricing Tiers"
        description="Explore Our Pricing Options Tailored to Your Gameplay Goals and Preferences"
        v-bind:cta="false"
        v-bind:center="true"
        v-bind:colored="true"
      />

      <div
        class="pt-4 pb-12 lg:py-20 flex justify-center items-center font-michroma text-sm xs:text-base md:text-[21px] text-center"
      >
        <button
          type="button"
          :class="`border border-black py-2 px-6 ${
            isAnnual ? 'bg-transparent' : 'bg-black text-white'
          }`"
          @click="isAnnual = false"
        >
          Monthly Billing
        </button>
        <button
          type="button"
          :class="`border border-black py-2 px-6 ${
            isAnnual
              ? 'bg-darkBlue text-white border-darkBlue'
              : 'bg-transparent'
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
        <div v-for="(plan, index) in monthlyPlans" :key="index">
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
        <div v-for="(plan, index) in annualPlans" :key="index">
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
    </div>
  </section>

  <!-- Fifth(faqs) -->
  <section id="Faqs" class="relative pt-20 sm:pt-36 pb-20 lg:pt-56">
    <div class="container">
      <SectionHeader
        title="Unveiling Clarity: Your Questions Answered"
        description="Navigate Through Frequently Asked Questions to Enhance Your Understanding of Shadowfall Chronicles"
        v-bind:cta="false"
        v-bind:center="true"
        v-bind:colored="true"
      />

      <div class="max-w-[887px] mx-auto pt-12 sm:pt-24 space-y-4">
        <div v-for="faq in faqs" :key="faq.id">
          <Faq v-bind:faq="faq.faq" v-bind:answer="faq.answer" />
        </div>
      </div>
    </div>
  </section>

  <!-- Sixth(contact) -->
  <section id="Contact" class="pb-20">
    <div class="container">
      <SectionHeader
        title="Still have a question?"
        description="Feel free to reach out for clarifications and inquiries."
        v-bind:cta="false"
        v-bind:center="true"
        v-bind:colored="true"
      />

      <div class="my-12 flex justify-center">
        <Button
          href="/contact"
          text="Contact Us"
          color="darkBlue"
          className="text-white min-w-[200px] hover:text-black pt-1"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.miniCard-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
    justify-content: space-between;
  }
  @media (min-width: 1280px) {
    width: 90%;
  }
}

.characterGrid {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  place-items: center;
  gap: 1.5rem 0;

  @media (min-width: 768px) {
    gap: 3rem 0;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-auto-flow: column;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
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
    position: relative;
    left: 50%;

    @media (min-width: 425px) {
      left: 0;
    }

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
