<script setup lang="ts">
import { Icon } from "@iconify/vue";
defineProps({
  faq: String,
  answer: String,
  show: Boolean,
});

const emit = defineEmits();

const toggleAccordion = () => {
  emit("toggleAccordion");
};
</script>

<template>
  <div
    class="w-full py-5 px-6 flex flex-col gap-6 bg-white shadow cursor-pointer"
    @click="toggleAccordion"
  >
    <div
      class="w-full flex flex-col xs:flex-row justify-center xs:justify-between items-center gap-4"
    >
      <p
        class="text-center xs:text-left text-base xs:text-[18px] md:text-[21px] max-w-[787px]"
      >
        {{ faq }}
      </p>
      <Icon v-if="!show" icon="octicon:plus-16" class="text-xl text-black" />
      <Icon v-if="show" icon="tabler:minus" class="text-xl text-black" />
    </div>

    <div v-if="show">
      <p class="text-sm md:text-base px-2.5">
        {{ answer }}
      </p>
    </div>
  </div>
</template>
