<template>
  <HeaderNav />
  <div class="background-bg h-full pt-[72px]">
    <router-view />
  </div>
  <FooterPage />
</template>

<script>
import FooterPage from "@/components/FooterPage.vue";
import HeaderNav from "@/components/HeaderNav.vue";
export default {
  components: {
    HeaderNav,
    FooterPage,
  },
  setup() {},
};
</script>

<style></style>
