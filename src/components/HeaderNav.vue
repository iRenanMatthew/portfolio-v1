<template>
  <nav
    class="bg-primary text-white p-5 border-white border-b fixed z-10 w-full"
  >
    <div class="flex justify-between items-center w-[800px] mx-auto">
      <router-link :to="{ name: 'home' }">
        <div class="flex justify-center items-center gap-2">
          <img
            class="w-8 rounded-full cursor-pointer"
            src="../assets/images/logo.png"
          />
          <p class="cursor-pointer">Renan Matthew</p>
        </div>
      </router-link>
      <div class="flex items-center gap-14">
        <div v-for="link in headerLink" :key="link.id">
          <router-link :to="{ name: link.url }">
            <p class="cursor-pointer">{{ link.title }}</p>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { onMounted } from "vue";
import getHeaderLinks from "@/composables/getHeaderLinks"

const {loadHeaderLinks, headerLink, error} = getHeaderLinks();

onMounted(() => {
  loadHeaderLinks();
})
</script>
