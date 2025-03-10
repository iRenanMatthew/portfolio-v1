<template>
  <div class="section h-[1080px]">
    <div class="contact row">
      <CategoryTitle title="CONTACT" size="6xl" tag="h1" />
      <div class="contact-section mb-[100px]"></div>
      <div class="hero-content">
        
        <img
          class="w-[185px] rounded-full"
          src="../assets/images/logo.png"
          alt="My Logo - png"
        />
        <div class="hero_text-wrapper">
            <h2 class="text-white font-extrabold text-4xl mb-2">
              Renan Matthew
            </h2>
            <h2 class="custom-bg-text-gradient font-extrabold text-4xl">
              Front End Developer
            </h2>
            <GetInTouch :show-header="false" :show-text="false" :show-socials="false"/>
            <button class="custom-button-gradient px-8 py-1">HIRE ME</button>
          </div>

      </div>

      <div class="contact-content">
        <p class="text-center text-custom-gray text-2xl">Whether you have a project in mind, want to collaborate, 
          or just feel like having a conversation, I'm always here to connect. Don’t hesitate to reach out via email. I'd love to hear from you!
        </p>

        <GetInTouch :show-header="false" :show-text="false" />

      </div>

      
    </div>
  </div>
</template>

<script setup>
import CategoryTitle from "@/components/CategoryTitle.vue";
import GetInTouch from "@/components/GetInTouch.vue";
import { onMounted } from "vue";
onMounted(() => {});
</script>
<style scoped>

.contact .hero-content .hero_text-wrapper{
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
}
</style>
