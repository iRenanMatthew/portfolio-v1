import AboutView from "@/views/AboutView.vue";
import ContactView from "@/views/ContactView.vue";
import EmailTemplatesView from "@/views/EmailTemplatesView.vue";
import HomeView from "@/views/HomeView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import ProjectsView from "@/views/ProjectsView.vue";
import UIDesignView from "@/views/UIDesignView.vue";
import VideoCreationsView from "@/views/VideoCreationsView.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Home — Renan Matthew Portfolio",
    },
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
    meta: {
      title: "About Me — Renan Matthew Portfolio",
    },
  },
  {
    path: "/projects",
    name: "projects",
    component: ProjectsView,
    meta: {
      title: "Projects — Renan Matthew Portfolio",
    },
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
    meta: {
      title: "Contact — Renan Matthew Portfolio",
    },
  },
  {
    path: "/projects/email-templates",
    name: "Email Templates",
    component: EmailTemplatesView,
    meta: {
      title: "Email Templates — Renan Matthew Portfolio",
    },
  },
  {
    path: "/projects/ui-designs",
    name: "UI Designs",
    component: UIDesignView,
    meta: {
      title: "UI Designs — Renan Matthew Portfolio",
    },
  },
  {
    path: "/projects/video-creations",
    name: "Video Creations",
    component: VideoCreationsView,
    meta: {
      title: "Video Creations — Renan Matthew Portfolio",
    },
  },

  // 404
  {
    path: "/:pathMatch(.*)",
    name: "not-found",
    component: NotFoundView,
    meta: {
      title: "404 Not Found — Renan Matthew Portfolio",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
