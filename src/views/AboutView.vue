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
                Im in industry for two years as front-end developer with a
                strong background to engaging user interfaces. Now, I’m focused
                on expanding my skills to include back-end development. My goal
                is to become a full-stack developer, mastering both front-end
                and back-end technologies to build complete, end-to-end web
                solutions.
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
                  <span class="font-bold">Frontend: </span>HTML, CSS, SASS,
                  JavaScript, AngularJS, Vue3, jQuery, Bootstrap, PHP, Laravel
                </p>
                <p class="text-[#C5C5C5]">
                  <span class="font-bold">Mobile: </span>Java (Android
                  Development)
                </p>
                <p class="text-[#C5C5C5]">
                  <span class="font-bold">Database: </span>MySQL
                </p>
                <p class="text-[#C5C5C5]">
                  <span class="font-bold">CI/CD: </span>Git, Github, Sourcetree,
                  Bitbucket
                </p>
                <p class="text-[#C5C5C5]">
                  <span class="font-bold">Deploy: </span>Github Pages, AWS
                </p>
                <p class="text-[#C5C5C5]">
                  <span class="font-bold">Design: </span>Figma, Photoshop, Canva
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Experience/>
      
      <GetInTouch class="mt-[100px]"/>
    </div>
  </div>
</template>

<script setup>
import CategoryTitle from "@/components/CategoryTitle.vue";
import GetInTouch from "@/components/GetInTouch.vue";
import Experience from "@/components/Experience.vue";

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
  .about-content .about_item-wrapper .about_item h3{
    font-size: 20px;
    margin-bottom: 10px;
  }
}
</style>
