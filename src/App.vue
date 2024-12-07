<template>
  <HeaderNav />
  <router-view />
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
