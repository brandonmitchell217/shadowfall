<script setup lang="ts">
import Logo from "~/assets/logo.svg";
</script>

<template>
  <nav class="fixed z-50 top-0 left-0 right-0 py-4">
    <div class="container flex justify-between items-center">
      <div class="flex-auto">
        <nuxt-link to="/">
          <Logo width="237" height="40" />
        </nuxt-link>
      </div>

      <ul class="flex-[0.8] flex justify-between items-center">
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about">About</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contact">Contact Us</nuxt-link>
        </li>
      </ul>

      <div class="flex-auto flex justify-end">
        <Button text="Buy Game" color="black" />
      </div>
    </div>
  </nav>
</template>
