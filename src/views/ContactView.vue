<template>
  <div class="section h-[150vh]">
    <div class="contact row">
      <CategoryTitle title="CONTACT" size="6xl" tag="h1" />
      <div class="contact-section mb-[100px]"></div>
      <div class="hero-content sm:flex sm:flex-col">
        <img
          class="w-[185px] rounded-full"
          src="../assets/images/logo.png"
          alt="My Logo - png"
        />
        <div class="hero_text-wrapper">
          <h2 class="text-white font-extrabold text-4xl mb-2 sm:text-center">
            Renan Matthew
          </h2>
          <h2
            class="custom-bg-text-gradient font-extrabold text-4xl sm:text-center"
          >
            Front End Developer
          </h2>
          <GetInTouch
            :show-header="false"
            :show-text="false"
            :show-socials="false"
          />
          <a href="https://www.linkedin.com/in/irenanmatthew/" target="_blank">
            <button class="custom-button-gradient px-8 py-1">HIRE ME</button>
          </a>
        </div>
      </div>

      <div class="contact-content">
        <p class="text-center text-custom-gray text-xl">
          Whether you have a project in mind, want to collaborate, or just feel
          like having a conversation, I'm always here to connect. Don’t hesitate
          to reach out via email. I'd love to hear from you!
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
import { useRoute } from "vue-router";

const route = useRoute();

const updateTitle = () => {
  const pageTitle = route.meta.title || "Contact — Renan Matthew Portfolio";
  document.title = pageTitle;
};

onMounted(() => {
  updateTitle();
});
</script>
<style scoped>
.contact .hero-content .hero_text-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
}

@media only screen and (max-width: 768px) {
  .contact .hero-content .hero_text-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
