<template>
 <div class="section">
  <div class="row">
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

    <!-- Projects -->
    <div class="mt-[100px]">
      <CategoryTitle title="PROJECTS" />

      <div class="project-section mt-[50px]">
        <div class="custom-card relative" v-for="project in projects" :key="project.id">

          <div class="project-card-bg" :style="{ background: `url(${imagePath(project.image, 'projects')})center -15px / cover no-repeat`}"></div>
          <div class="custom-card-text">
            <div class="flex justify-between items-center">
              <h2 class="font-extrabold text-2xl">{{ project.name }}</h2>
              <img class="view-icon" src="../assets///images/view-icon.png" />
            </div>
            <div class="flex gap-1">
              <p
                class="text-xs font-bold text-custom-gray"
                v-for="tag in project.tags"
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
    <GetInTouch class="mt-[100px]"/>
  </div>
</div>
</template>

<script setup>
import {ref, onMounted} from "vue";
import CategoryTitle from "@/components/CategoryTitle.vue";
import Experience from "@/components/Experience.vue";
import GetInTouch from "@/components/GetInTouch.vue";
import Skills from "@/components/Skills.vue";
import getProjects from "@/composables/getProjects";

const { projects, error, loadProjects } = getProjects();

const imagePath = (path, category) => {
  return `/${category}/${path}`
};

onMounted( () => {
  loadProjects();
})

</script>

<style scoped>
.project-card-bg {
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
