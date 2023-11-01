<script setup lang="ts">
import Logo from "~/assets/logo.svg";
import NavLine from "~/assets/navLine.svg";
</script>

<template>
  <nav class="absolute z-50 top-0 left-0 right-0 py-4">
    <div class="relative container flex justify-between items-center">
      <div class="flex-1">
        <nuxt-link to="/">
          <Logo width="237" height="40" />
        </nuxt-link>
      </div>

      <ul class="flex-1 hidden lg:flex justify-evenly items-center">
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

      <div class="flex-1 hidden lg:flex justify-end">
        <Button
          href="/"
          text="Buy Game"
          color="darkBlue"
          className="text-white min-w-[200px] text-center hover:text-black"
        />
      </div>

      <NavLine
        class="absolute -bottom-10 left-0 w-full"
        width="1438"
        height="28"
      />
    </div>
  </nav>
</template>
