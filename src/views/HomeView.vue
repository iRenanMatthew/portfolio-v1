<template>
  <div class="h-full w-[800px] mx-auto pt-[100px]">
    <div class="hero-section">
      <div class="logo-name-section flex justify-center items-center gap-12">
        <img
          class="w-[185px] rounded-full"
          src="../assets/images/logo.png"
          alt="My Logo - png"
        />
        <div class="w-80">
          <h1 class="text-4xl">
            <span class="pacifico-regular">Hello</span>👋
          </h1>
          <h1 class="text-5xl">
            I am
            <span class="custom-bg-text-gradient font-extrabold"
              >Renan Matthew</span
            >
          </h1>
        </div>
      </div>

      <div class="introduction-section text-center mt-[50px]">
        <h1 class="text-6xl font-extrabold custom-bg-text-gradient">
          Front End Developer
        </h1>
        <p class="my-[25px] text-custom-gray">
          I’m a front-end developer with a strong background to engaging user
          interfaces. Now, I’m focused on expanding my skills to include
          back-end development. My goal is to become a full-stack developer,
          mastering both front-end and back-end technologies to build complete,
          end-to-end web solutions.
        </p>
        <button class="custom-button-gradient">Get In Touch</button>
      </div>
    </div>
    <Skills />
  </div>
</template>

<script>
import Skills from "@/components/Skills.vue";
export default {
  name: "HomeView",
  components: {
    Skills,
  },
  setup() {},
};
</script>

<style></style>
