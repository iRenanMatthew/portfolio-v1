<template>
  <nav
    class="bg-primary text-white p-5 border-white border-b fixed z-10 w-full"
  >
    <div class="flex justify-between items-center w-[800px] sm:w-full mx-auto relative">
      <router-link :to="{ name: 'home' }">
        <div class="flex justify-center items-center gap-2">
          <img
            class="w-8 rounded-full cursor-pointer"
            src="../assets/images/logo.png"
          />
          <p class="cursor-pointer">Renan Matthew</p>
        </div>
      </router-link>
      
      <div class="hidden lg:flex xl:flex items-center gap-14">
        <div v-for="link in headerLink" :key="link.id">
          <router-link 
            :to="{ name: link.url }"
            :class="route.name === link.url ? 'text-blue-500 font-bold' : 'text-white hover:text-blue-500'"
          >
            <p class="cursor-pointer">{{ link.title }}</p>
          </router-link>
        </div>
      </div>

      <div :class="isMenuOpen ? 'flex flex-col' : 'hidden lg:hidden xl:hidden'" class="gap-6 text-center mobile-nav">
        <div v-for="link in headerLink" :key="link.id">
          <router-link 
            :to="{ name: link.url }"
            :class="route.name === link.url ? 'text-blue-500 font-bold' : 'text-white hover:text-blue-500'"
          >
            <p @click="isMenuOpen = !isMenuOpen" class="cursor-pointer">{{ link.title }}</p>
          </router-link>
        </div>
      </div>

      <button 
        @click="isMenuOpen = !isMenuOpen"
        class="inline-flex lg:hidden xl:hidden items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-custom-gray2 focus:outline-none focus:ring-2 focus:ring-gray-200">
        
        <span class="sr-only">Toggle Menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { onMounted,ref } from "vue";
import { useRoute } from 'vue-router';
import getHeaderLinks from "@/composables/getHeaderLinks"

const route = useRoute();
const isMenuOpen = ref(false);

const {loadHeaderLinks, headerLink, error} = getHeaderLinks();

onMounted(() => {
  loadHeaderLinks();
})
</script>
