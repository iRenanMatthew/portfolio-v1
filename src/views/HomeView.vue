<template>
  <div class="h-full w-[800px] mx-auto py-[100px]">
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

    <!-- Skills Section -->
    <Skills />

    <!-- Works -->
    <div class="mt-[100px]">
      <CategoryTitle title="WORKS" />

      <div class="work-section mt-[50px]">
        <div class="custom-card relative" v-for="work in works" :key="work.id">
          <div class="work-card-bg"></div>
          <div class="custom-card-text">
            <div class="flex justify-between items-center">
              <h2 class="font-extrabold text-2xl">{{ work.name }}</h2>
              <img class="view-icon" src="../assets///images/view-icon.png" />
            </div>
            <div class="flex gap-1">
              <p
                class="text-xs font-bold text-custom-gray"
                v-for="tag in work.tags"
                :key="tag"
              >
                {{ tag }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Experiences -->
    <Experience />

    <!-- Get in Touch -->
    <GetInTouch />
  </div>
</template>

<script>
import CategoryTitle from "@/components/CategoryTitle.vue";
import Experience from "@/components/Experience.vue";
import GetInTouch from "@/components/GetInTouch.vue";
import Skills from "@/components/Skills.vue";
import getWorks from "@/composables/getWorks";
export default {
  name: "HomeView",
  components: {
    Skills,
    CategoryTitle,
    Experience,
    GetInTouch,
  },
  setup() {
    const { works, error, loadWorks } = getWorks();

    loadWorks();

    return { works, error, loadWorks };
  },
};
</script>

<style>
.work-card-bg {
  background: url("../assets/images/wip.png") center -194px / 110% no-repeat;
  height: 100%;
  border-radius: 20px;
}

.custom-card-text {
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 2;
  background: #2a2a2a;

  padding: 1em;
  border-radius: 0 0 20px 20px;
}

.view-icon {
  width: 15px;
  height: 15px;
}
</style>
