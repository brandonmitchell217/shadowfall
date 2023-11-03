<script setup>
import Logo from "./AppLogo.vue";
import NavLine from "~/assets/navLine.svg";
import { Icon } from "@iconify/vue";
import NavMobile from "./AppNavMobile.vue";
import Button from "./Button/PrimaryButton.vue";

const isOpen = ref(false);
</script>

<template>
  <nav class="absolute z-50 top-0 left-0 right-0 py-4">
    <div class="relative container flex justify-between items-center">
      <div class="flex-1">
        <nuxt-link to="/">
          <Logo color="black" />
        </nuxt-link>
      </div>

      <ul class="flex-1 hidden lg:flex justify-evenly items-center">
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">About</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">Contact Us</nuxt-link>
        </li>
      </ul>

      <div class="flex-1 hidden lg:flex justify-end">
        <Button
          href="/"
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

    <NavMobile v-bind:isOpen="isOpen" />
  </nav>
</template>
