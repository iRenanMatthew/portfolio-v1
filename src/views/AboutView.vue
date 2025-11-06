<template>
  <div class="section">
    <div class="about row">
      <div class="about-section mb-[100px]">
        <CategoryTitle title="ABOUT ME" size="6xl" tag="h1" />

        <div class="hero-content sm:flex sm:flex-col">
          <img
            class="w-[185px] rounded-full"
            src="../assets/images/logo.png"
            alt="My Logo - png"
          />
          <div class="hero_text-wrapper sm:text-center">
            <h2 class="text-white font-extrabold text-4xl mb-2">
              Renan Matthew
            </h2>
            <h2 class="custom-bg-text-gradient font-extrabold text-4xl">
              Front End Developer
            </h2>
          </div>
        </div>

        <div class="about-content">
          <div class="about_item-wrapper flex flex-col gap-2.5">
            <div class="about_item">
              <h3 class="text-white font-bold">Background</h3>
              <p class="text-[#C5C5C5]">
I have two years of experience as a front-end developer, building engaging and user-friendly interfaces. Currently, I’m passionate about cloud technologies and data, and I’m focused on pursuing a career in cloud engineering. My goal is to leverage my development experience to design, deploy, and optimize scalable cloud-based solutions while deepening my expertise in data-driven applications.

              </p>
            </div>
            <div class="about_item">
              <h3 class="text-white font-bold">Education</h3>
              <p class="text-[#C5C5C5]">
                Bachelor of Science in Computer Engineering
              </p>
            </div>
            <div class="about_item">
              <h3 class="text-white font-bold">Skills</h3>
            <div class="item-contents">
              <p class="text-[#C5C5C5]">
                <span class="font-bold">Languages & Core Tech: </span>HTML, CSS (SASS), JavaScript (ES6+), PHP, Java, Python
              </p>
              <p class="text-[#C5C5C5]">
                <span class="font-bold">Frameworks & Libraries: </span>Vue 3, AngularJS, React, jQuery, Tailwind CSS, Bootstrap, GSAP
              </p>
              <p class="text-[#C5C5C5]">
                <span class="font-bold">CMS & Website Builders: </span>WordPress (Primary), Elementor, Webflow, WooCommerce
              </p>
              <p class="text-[#C5C5C5]">
                <span class="font-bold">Database: </span>MySQL, PostgreSQL
              </p>
              <p class="text-[#C5C5C5]">
                <span class="font-bold">Development Tools: </span>VS Code, Git, GitHub, Bitbucket, SourceTree, Browser DevTools, FileZilla
              </p>
              <p class="text-[#C5C5C5]">
                <span class="font-bold">Design Tools: </span>Figma, Photoshop, Canva
              </p>
              <p class="text-[#C5C5C5]">
                <span class="font-bold">Project Management: </span>Jira, Asana, Confluence
              </p>
            </div>

            </div>
          </div>
        </div>
      </div>

      <Experience />

      <GetInTouch class="mt-[100px]" />
    </div>
  </div>
</template>

<script setup>
import CategoryTitle from "@/components/CategoryTitle.vue";
import Experience from "@/components/Experience.vue";
import GetInTouch from "@/components/GetInTouch.vue";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const updateTitle = () => {
  const pageTitle = route.meta.title || "About Me — Renan Matthew Portfolio";
  document.title = pageTitle;
};

onMounted(() => {
  updateTitle();
});
</script>
<style scoped>
.about-content .about_item-wrapper .about_item {
  display: grid;
  grid-template-columns: 0.3fr 1fr;
}

@media only screen and (max-width: 768px) {
  .about-content .about_item-wrapper .about_item {
    grid-template-columns: 1fr;
    justify-content: center;
    margin-bottom: 20px;
    text-align: center;
  }
  .about-content .about_item-wrapper .about_item h3 {
    font-size: 20px;
    margin-bottom: 10px;
  }
}
</style>
