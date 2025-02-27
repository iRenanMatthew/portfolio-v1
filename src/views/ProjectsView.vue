<template>
  <div class="section">
    <div class="projects row">
        <CategoryTitle title="PROJECTS"/>

        <div class="project-card-wrapper mt-36">
          <div class="project-card" v-for="project in projects" :key="project.id">
            <div class="pc-info">
              <div class="pc-info_name">
                <h3>Featured Project</h3>
                <p>{{ project.name }}</p>
              </div>
              <div class="pc-info_content">
                <p>{{project.content }}</p>
              </div>
              <div class="pc-info_tabs">
                <p class="tags-pill" v-for="tag in project.tags" :key="tag">{{ tag }}</p>
              </div>
            </div>
            <img :src="imagePath(project.image, 'projects')" />
          </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted} from "vue";
import CategoryTitle from '@/components/CategoryTitle.vue';
import getProjects from '@/composables/getProjects';

const { projects, error, loadProjects } = getProjects();

const imagePath = (path, category) => {
  return `/${category}/${path}`
};

onMounted(()=>{
  loadProjects();
})

</script>

<style scoped>


</style>