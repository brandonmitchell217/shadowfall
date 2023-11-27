<script setup>
import Logo from "./AppLogo.vue";
import { Icon } from "@iconify/vue";

function onSubmit() {
  alert("This would typically go somewhere!");
}
</script>

<template>
  <footer
    class="pt-20 lg:pt-[106px] bg-black text-white space-y-14 lg:space-y-[89px]"
  >
    <div class="container">
      <div
        class="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-14 lg:gap-[4vw] text-center lg:text-left"
      >
        <div class="w-full lg:max-w-[352px] space-y-4">
          <NuxtLink to="/" aria-label="Footer Logo Home Page Link">
            <Logo color="white" class="mx-auto lg:mx-0" />
          </NuxtLink>
          <p>Experience the game that will change your the way you play.</p>
        </div>

        <div class="w-full lg:max-w-[396px] space-y-4">
          <p class="">
            Subscribe to stay tuned for latest updates.<br />Let's do it!
          </p>
          <form class="flex justify-center items-center gap-3">
            <input
              type="text"
              placeholder="Enter your email address"
              class="w-[296px] py-2 px-2 placeholder:text-sm text-sm text-black"
            />
            <button
              type="submit"
              class="py-2.5 px-5 bg-white text-black text-[14px] font-bold"
              @click="onSubmit"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div class="flex justify-between items-center gap-[8vw]">
          <div class="space-y-2">
            <h4>Follow Us</h4>
            <ul class="flex justify-between items-center">
              <li
                class="group bg-white p-1 rounded-full cursor-pointer hover:bg-darkBlue"
              >
                <Icon
                  icon="mdi:instagram"
                  class="text-black group-hover:text-white transition-colors"
                />
              </li>
              <li
                class="group bg-white p-1 rounded-full cursor-pointer hover:bg-darkBlue"
              >
                <Icon
                  icon="mdi:facebook"
                  class="text-black group-hover:text-white transition-colors"
                />
              </li>
              <li
                class="group bg-white p-1 rounded-full cursor-pointer hover:bg-darkBlue"
              >
                <Icon
                  icon="mdi:twitter"
                  class="text-black group-hover:text-white transition-colors"
                />
              </li>
            </ul>
          </div>
          <div class="space-y-2">
            <h4>Contact Us</h4>
            <p class="cursor-pointer">+1 800 854-36-80</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div
        class="pt-7 pb-[62px] border-t border-white flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-4 lg:gap-0"
      >
        <p class="text-[12px]">© 2023 All Rights Reserved</p>
        <ul class="companyLinks justify-center gap-3 lg:gap-10 text-sm">
          <li class="">Privacy Policy</li>
          <li class="">Terms of Use</li>
          <li class="">Sales and Refunds</li>
          <li class="">Legal</li>
          <li class="">Site Map</li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.companyLinks {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(auto-fit, minmax(max-content, fit-content));
  place-items: center;

  @media (min-width: 1024px) {
    grid-auto-flow: column;
  }

  li {
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
