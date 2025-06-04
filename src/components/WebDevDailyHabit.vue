<template>
  <CategoryTitle
    title="Studying web development for 1 hour or more each day."
    tag="h2"
    size="2xl"
    class="mt-5"
  />

  <p class="text-center my-5">Inspired from <a href="https://theicedev.netlify.app/" target="_blank" rel="noreferrer" class="underline font-bold">@dev.iceice</a></p>
  <div>

    <div class="tracker-info card p-5">
      <h2 class="font-bold font-3xl mb-3">My current tech stack</h2>
      <div class="">
          <div v-for="skill in filteredSkills" :key="skill.id" class="inline-block mr-1">
            <img :alt="skill.name" :src="getImageBadge(skill.badgeLogo, skill.badgeName)">
          </div> 
      </div>
      <div class="flex flex-col gap-2 justify-center items-center mt-3">
          <div class="flex gap-1.5">
            <svg class="w-[20px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 7V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            <h3 class="font-bold font-xl">Total Time: {{ displayTimeFormatted }}</h3>
          </div>
          <div class="flex gap-1.5">
            <svg class="w-[20px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 13.1111C3 20.2222 8.28889 22 10.9333 22C12.2874 22 14.2481 21.6432 16 20.6097M18.7207 18C19.5021 16.7537 20 15.152 20 13.1111C20 8.58427 17.1653 5.35127 14.6023 3.49767C13.4438 2.65985 12 3.58 12 5.00971V5.33334C12 6.7752 11.3938 9.40705 9.70932 10.5017C8.84932 11.0606 7.92052 10.2241 7.816 9.20382L7.73017 8.36598C7.6304 7.39197 6.63841 6.80069 5.85996 7.39454C5.18794 7.90718 4.50139 8.60486 3.96944 9.5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M8 18.4445C8 21.2889 10.4889 22 11.7333 22C12.8222 22 15 21.2889 15 18.4445C15 17.3435 14.4107 16.6002 13.8404 16.1713C13.4424 15.872 12.8828 16.1408 12.7459 16.6196C12.5675 17.2437 11.9228 17.636 11.5944 17.0759C11.2941 16.5638 11.2941 15.7957 11.2941 15.3334C11.2941 14.6968 10.6539 14.2847 10.1389 14.6589C9.10649 15.4091 8 16.6815 8 18.4445Z" stroke="#ffffff" stroke-width="1.5"></path> </g></svg>
            <h3 class="font-bold font-xl">Streak: {{ totalDay }}</h3>
          </div>
      </div>
    </div>

    <hr class="my-5">

    <div class="data-info-wrapper flex gap-5 justify-between">
      <div class="flex flex-col gap-3 items-center p-5 card" v-for="data in webDailyTracker" :key="data.day">
        <div>
          <h2 class="font-bold text-3xl text-center">Day {{ data.day }}</h2>
          <p class="text-sm text-gray-400 text-center">{{ data.date }}</p>
        </div>
        <div>
          <h3 class="font-bold text-4xl">{{ data.time_consumed.hour }} : {{ addZeros(data.time_consumed.minutes) }}</h3>
          <p class="text-xs text-center text-gray-400">HH:MM</p>
        </div>


        <div class="">
          <h2 class="font-bold text-center">Tech Used</h2>
          <div class="flex gap-1.5">
            <img v-for="techUsed in data.tech_used" :src="getImageBadge(techUsed)" :title="techUsed - logo" :alt="techUsed - logo" width="20" height="20">
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import getSkills from "@/composables/getSkills";
import getWebDailyTracker from "@/composables/getWebDailyTracker";
import { computed, onMounted, watchEffect } from "vue";
import CategoryTitle from "./CategoryTitle.vue";

const { webDailyTracker, trackerError, loadWebDailyTracker } = getWebDailyTracker();
const { skills, skillError, loadSkills } = getSkills();

const totalDay = computed(() => {
  return webDailyTracker.value ? webDailyTracker.value.length : 0;
});

let totalTimeHours = computed(()=> getTimeData('hour'))

let totalTimeMinutes = computed(()=> getTimeData('minutes'))

const getTimeData = (time) => {
   return webDailyTracker.value ? webDailyTracker.value.reduce((total, item) => {
    return total + (item.time_consumed?.[time] || 0)
  },0) : 0
}

const displayTimeFormatted = computed(() => {
  let totalConvertedMinutes = ((totalTimeHours.value * 60) + totalTimeMinutes.value);
  let totalConvertedHours = Math.floor(totalConvertedMinutes/60);
  let totalConvertedMinutesOnly = Math.round(((Math.round((totalTimeHours.value + (totalTimeMinutes.value/60)) * 100)/100) - totalConvertedHours) * 60)

  return `${totalConvertedHours} hours & ${totalConvertedMinutesOnly} minutes`
});

const filteredSkills = computed(() => {
  return skills.value.filter(data => data.category === "web");
});

const getImageBadge = (logo, name) => {

  if(!name) {
   return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${logo}/${logo}-original.svg`;
  } else {
    return `https://img.shields.io/badge/${logo}?style=for-the-badge&logo=${name}&logoColor=white`
  }
}

const addZeros = (num) => {
  return num > 9 ? num : `0${num}`
}

onMounted(async() => {
  await loadWebDailyTracker();
  await loadSkills();
});

watchEffect(() => {
  console.log("Hours:", totalTimeHours.value);
  console.log("Minutes:", totalTimeMinutes.value);
});
</script>

<style scoped>
.card{
  width: 100%;

  background: rgba( 255, 255, 255, 0.1 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 15px );
  -webkit-backdrop-filter: blur( 15px );
  border-radius: 12px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
}

</style>
