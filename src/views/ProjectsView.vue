<template>
  <div class="section">
    <div class="projects row">
        <CategoryTitle title="PROJECTS" size="5xl" tag="h1"/>

        <div class="project-card-wrapper mt-36">
          <div class="project-showcase" v-for="project in projects" :key="project.id">
            <div class="pc-header mb-5">
                <h3 class="custom-bg-text-gradient font-semibold text-base">Featured Project</h3>
                <p class="text-4xl font-semibold text-[#CCD6F6] cursor-pointer">{{ project.name }} 
                  <span class="inline-block">
                    <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 100 100" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M51.5,69.4c-0.9-0.1-1.7-0.2-2.6-0.4c-0.9-0.2-1.8-0.4-2.7-0.7c-0.5-0.2-1.1-0.1-1.5,0.3l-0.6,0.6 c-3.6,3.6-9.4,4-13.3,0.7c-4.2-3.7-4.4-10.1-0.5-14l9.5-9.5c1.2-1.2,2.7-2.1,4.3-2.5c2-0.5,4.1-0.4,6,0.4c1.2,0.5,2.3,1.2,3.2,2.1 c0.5,0.5,0.9,1.1,1.2,1.7c0.5,0.8,1.6,1,2.3,0.3c1.1-1.1,2.6-2.6,3.5-3.5c0.5-0.5,0.6-1.3,0.1-1.9c-0.5-0.7-1.1-1.4-1.7-2 c-0.9-0.9-1.9-1.7-3-2.4c-1.8-1.1-3.8-1.9-5.8-2.3c-3.9-0.8-8.1-0.2-11.7,1.8c-1.4,0.8-2.7,1.7-3.9,2.9l-9.2,9.2 c-6.6,6.6-7.1,17.3-0.8,24.1c6.7,7.2,17.9,7.4,24.8,0.5l3.1-3.1C53.2,71,52.7,69.5,51.5,69.4z"></path> </g> <g> <path d="M74.5,24.5c-6.8-6.3-17.6-5.8-24.1,0.8L47.5,28c-0.9,0.9-0.3,2.3,0.9,2.4c1.8,0.1,3.5,0.5,5.3,1.1 c0.5,0.2,1.1,0,1.5-0.3l0.6-0.6c3.6-3.6,9.4-4,13.3-0.7c4.2,3.7,4.4,10.1,0.5,14l-9.5,9.5c-1.2,1.2-2.7,2.1-4.3,2.5 c-2,0.5-4.1,0.4-6-0.4c-1.2-0.5-2.3-1.2-3.2-2.1c-0.5-0.5-0.9-1-1.2-1.6c-0.5-0.8-1.6-1-2.3-0.3l-3.5,3.5 c-0.5,0.5-0.6,1.3-0.1,1.9c0.5,0.7,1.1,1.4,1.7,2c0.9,0.9,1.9,1.7,3,2.4C46,62.3,48,63,50,63.4c3.9,0.8,8.1,0.2,11.7-1.8 c1.4-0.8,2.7-1.7,3.9-2.9l9.5-9.5C81.8,42.4,81.7,31.1,74.5,24.5z"></path> </g> </g> </g></svg> </span>
                </p>
            </div>
            <div class="project-card">
              <div class="pc-content-wrapper">
                <div class="pc-info_content">
                  <p>{{project.content }}</p>
                </div>
                <div class="pc-info_tabs">
                  <p class="tags-pill" v-for="tag in project.tags" :key="tag">{{ tag }}</p>
                </div>
              </div>
              <img class="pc-img mt-8 md:mt-1 sm:mt-1" :src="imagePath(project.image, 'projects')" />
            </div>
          </div>
        </div>

        <GetInTouch  class="mt-[100px]"/>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted} from "vue";
import CategoryTitle from '@/components/CategoryTitle.vue';
import GetInTouch from "@/components/GetInTouch.vue";
import getProjects from '@/composables/getProjects';
import { useRoute } from 'vue-router';

const route = useRoute();

const updateTitle = () => {
  const pageTitle = route.meta.title || 'Contact — Renan Matthew Portfolio'
  document.title = pageTitle;
}

const { projects, error, loadProjects } = getProjects();

const imagePath = (path, category) => {
  return `/${category}/${path}`
};

onMounted(()=>{
  loadProjects();
  updateTitle();
})

</script>

<style scoped>


.projects.row{
  width: 1000px;
}

.project-card{
  display: flex;
  gap: 20px;
}

.project-showcase:not(:last-child) {
  margin: 0 0 144px 0;
}
.pc-content-wrapper{
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.pc-img{
  width: 100%;
  max-width: 570px;  
  height: 350px;
  object-fit: cover;
  border-radius: 20px;
}

.pc-info_content{
  background: rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 30px;
  margin:0 -100px 0 0;
}

.pc-info_tabs .tags-pill{
  margin:0 15px 10px 0;
}

@media only screen and (max-width: 1100px) {
  .projects.row{
    width: 100%;
  }

  .project-showcase,
  .project-card{
    width: 100%;
    max-width: 570px;  
    margin: 0 auto 100px auto !important;
  }


  .project-card{
    display: flex;
    flex-flow: column-reverse;
    gap: 20px;
  }

  .pc-info_content{
    margin: 0;
  }

  .pc-img{
    margin-inline: auto;
  }
}

@media only screen and (max-width: 768px) {
  .project-card{
    gap: 20px;
  }

  .pc-info_tabs .tags-pill{
    margin:0 5px 10px 0;
  }
}


</style>