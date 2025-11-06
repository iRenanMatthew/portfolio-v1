<template>
  <div class="section">
    <div class="row">
      <div class="hero-section">
        <div
          class="logo-name-section flex sm:flex-col flex-row justify-center items-center gap-12"
        >
          <img
            class="w-[185px] rounded-full"
            src="../assets/images/logo.png"
            alt="My Logo - png"
          />
          <div class="w-80">
            <h1 class="text-4xl sm:text-center">
              <span class="pacifico-regular">Hello</span>👋
            </h1>
            <h1 class="text-5xl sm:text-center">
              I am
              <span class="custom-bg-text-gradient font-extrabold"
                >Renan Matthew</span
              >
            </h1>
          </div>
        </div>

        <div class="introduction-section text-center mt-[50px]">
          <h1
            class="sm:text-5xl text-6xl font-extrabold custom-bg-text-gradient"
          >
            Front End Developer
          </h1>
          <p class="my-[25px] text-custom-gray">
            I’m a front-end developer with experience building responsive websites using HTML, CSS, JavaScript, and WordPress (Elementor, WooCommerce). I’m now passionate about cloud technologies and data, aiming to design scalable, efficient cloud-based applications. My goal is to combine my development experience with cloud and data expertise to deliver robust, high-performing solutions while continuously expanding my technical skill set.
          </p>
          <router-link :to="{ name: 'contact' }">
            <button class="custom-button-gradient">Get In Touch</button>
          </router-link>
        </div>
      </div>

      <!-- Skills Section -->
      <Skills />

      <!-- Projects -->
      <div class="mt-[100px]">
        <CategoryTitle title="PROJECTS" />

        <Swiper
          :modules="modules"
          :spaceBetween="20"
          :breakpoints="{
            768: { slidesPerView: 1 },
            769: { slidesPerView: 2 },
          }"
          :navigation="true"
          :class="'project-section mt-[50px]'"
        >
          <SwiperSlide
            class="custom-card relative"
            v-for="project in projects"
            :key="project.id"
          >
            <div
              class="project-card-bg"
              :style="{
                background: `url(${imagePath(
                  project.img,
                  'projects'
                )})center -40px / cover no-repeat`,
              }"
            ></div>
            <router-link :to="{ name: 'projects' }">
              <div class="custom-card-text">
                <div class="flex justify-between items-center">
                  <h2 class="font-extrabold text-2xl">{{ project.name }}</h2>
                  <img
                    class="view-icon"
                    src="../assets///images/view-icon.png"
                  />
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
            </router-link>
          </SwiperSlide>
        </Swiper>
      </div>

      <!-- Experiences -->
      <Experience />

      <!-- Get in Touch -->
      <GetInTouch class="mt-[100px]" />
    </div>
  </div>
</template>

<script setup>
import CategoryTitle from "@/components/CategoryTitle.vue";
import Experience from "@/components/Experience.vue";
import GetInTouch from "@/components/GetInTouch.vue";
import Skills from "@/components/Skills.vue";
import getProjects from "@/composables/getProjects";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const { projects, error, loadProjects } = getProjects();
const modules = [Navigation];
const route = useRoute();

const imagePath = (path, category) => {
  return `/${category}/${path}`;
};

const updateTitle = () => {
  const pageTitle = route.meta.title || "Home — Renan Matthew Portfolio";
  document.title = pageTitle;
};

onMounted(() => {
  loadProjects();
  updateTitle();
});
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

.swiper.project-section {
  height: 300px;
}
</style>
