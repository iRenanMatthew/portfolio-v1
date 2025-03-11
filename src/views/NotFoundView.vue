<template>
  <div class="section">
    <div class="row pt-[100px] pb-[150px]">
      <CategoryTitle title="404 NOT FOUND" size="6xl" tag="h1" />

      <img class="mt-[100px] md:mt-[70px] sm:mt-[70px]" src="../assets/images/404-img.png">
      <p class="text-center text-3xl sm:text-2xl my-5">Oops! Lost in the void!</p>
      <p class="text-center text-2xl sm:text-xl mb-20 md:mb-8 sm:mb-8">Looks like this page vanished into cyberspace. Try click the button below before we call a search party!</p>
      <div class="flex justify-center">
        <router-link :to="{ name: 'home' }">
          <button class="mx-auto custom-button-gradient py-5 px-10">Return to Homeland</button>
        </router-link>
      </div>
      
    </div>
  </div>
</template>

<script setup>
import CategoryTitle from "@/components/CategoryTitle.vue";
import { onMounted } from "vue";
import { useRoute } from 'vue-router';

const route = useRoute();

const updateTitle = () => {
  const pageTitle = route.meta.title || 'Contact — Renan Matthew Portfolio'
  document.title = pageTitle;
}
onMounted(() => {updateTitle();});
</script>
<style scoped></style>
