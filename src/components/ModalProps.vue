<template>
  <!-- It will close only if backdrop was clicked -->
  <div class="backdrop">
    <div class="wrapper" @click.self="closeModal">
      <div class="modal flex flex-col gap-5">
        <div class="flex justify-between">
          <div class="flex flex-col">
            <h2 class="font-bold text-left">Tech Used</h2>
            <div class="flex gap-1.5 justify-start">
              <img v-for="tech in props.techUsed" :src="getImageBadge(tech)" :title="tech + ' logo'"
                :alt="tech + ' logo'" :class="tech + '-logo'" width="20" height="20" />
            </div>
          </div>
          <h2 class="font-bold">Day {{ props.header }} - {{ props.date }}</h2>
        </div>
        <hr>
        <p>{{ props.text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Composition API version using <script setup>

import { defineEmits, defineProps } from "vue";

// define props
const props = defineProps({
  header: Number,
  date: String,
  text: String,
  techUsed: Array,
});

// define emit
const emit = defineEmits(["close"]);

// method to emit close event
function closeModal() {
  emit("close");
}

const getImageBadge = (logo) => {
  const customIcons = {
    excel:
      "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/microsoftexcel.svg",
  };

  if (customIcons[logo]) {
    return customIcons[logo];
  } else {
    return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${logo}/${logo}-original.svg`;
  }
};
</script>

<style>
.backdrop {
  top: 0;
  left: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  z-index: 9999999;
  transition: all 300ms ease;
}

.wrapper {
  position: relative;
  height: 100%;
}

.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 500px;
  padding: 20px;
  border-radius: 10px;
  color: black;
  background: #454545ea;
  box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.101);
  color: #FFFFFF;

}
</style>
