<template>
  <component 
    :is="tag"
    class="custom-bg-text-gradient font-extrabold text-center"
    :class="[size ? `text-[${size}]` : 'text-4xl']"
  >
    {{ title }}
  </component>
</template>

<script setup>
defineProps({
  title: String,
  tag: {
    type: String,
    default: "h2",
  },
  size: {
    type: String,
    default: "4xl", 
  },
});
</script>