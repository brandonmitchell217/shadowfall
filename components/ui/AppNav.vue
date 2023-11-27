<template>
  <nav class="absolute z-50 top-0 left-0 right-0 py-4" ref="container">
    <div class="relative container flex justify-between items-center">
      <div class="flex-1">
        <NuxtLink to="/" aria-label="Nav Logo Home Page Link">
          <Logo color="black" />
        </NuxtLink>
      </div>

      <ul class="flex-1 hidden lg:flex justify-evenly items-center">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact">Contact Us</NuxtLink>
        </li>
      </ul>

      <div class="flex-1 hidden lg:flex justify-end">
        <Button
          href="/buynow"
          text="Buy Game"
          color="black"
          className="text-white min-w-[200px] text-center hover:text-black"
        />
      </div>

      <div
        class="text-xl text-black cursor-pointer lg:hidden"
        @click="isOpen = !isOpen"
      >
        <Icon icon="uim:bars" />
      </div>

      <NavLine
        class="absolute -bottom-10 left-0 z-40 w-full"
        width="1438"
        height="28"
      />
    </div>

    <Transition name="slide-fade">
      <NavMobile v-if="isOpen" v-bind:isOpen="isOpen" />
    </Transition>
  </nav>
</template>

<script setup>
import Logo from "./AppLogo.vue";
import NavLine from "~/assets/navLine.svg";
import { Icon } from "@iconify/vue";
import NavMobile from "./AppNavMobile.vue";
import Button from "./Button/PrimaryButton.vue";
import { useMediaQuery } from "@vueuse/core";

const isMobile = useMediaQuery("(max-width: 1024px)");

const isOpen = ref(false);
const container = ref();

const clickOutsideHandler = (event) => {
  if (
    container.value &&
    !container.value.contains(event.target) &&
    isOpen.value
  ) {
    isOpen.value = false;
  }
};

const escapeKeyHandler = (event) => {
  if (event.key === "Escape" && isOpen.value) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", clickOutsideHandler);
  document.addEventListener("keydown", escapeKeyHandler);
  window.addEventListener("resize", () => {
    if (isMobile.value) {
      isOpen.value = false;
    }
  });
});

onBeforeUnmount(() => {
  document.removeEventListener("click", clickOutsideHandler);
  document.removeEventListener("keydown", escapeKeyHandler);
});
</script>
