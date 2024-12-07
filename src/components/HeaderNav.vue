<template>
  <nav class="bg-primary text-white p-5 border-white border-b">
    <div class="flex justify-between items-center w-[800px] mx-auto">
      <router-link :to="{ name: 'home' }">
        <div class="flex justify-center items-center gap-2">
          <img
            class="w-8 rounded-full cursor-pointer"
            src="../assets/images/logo.png"
          />
          <p class="cursor-pointer">Renan Matthew</p>
        </div>
      </router-link>
      <div class="flex items-center gap-14">
        <div v-for="link in links" :key="link.id">
          <router-link :to="{ name: link.url }">
            <p class="cursor-pointer">{{ link.title }}</p>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  setup() {
    const links = [
      {
        id: 0,
        title: "Home",
        url: "home",
      },
      {
        id: 1,
        title: "Works",
        url: "works",
      },
      {
        id: 2,
        title: "About",
        url: "about",
      },
      {
        id: 3,
        title: "Contact",
        url: "contact",
      },
    ];

    return { links };
  },
};
</script>
