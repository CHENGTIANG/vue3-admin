import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import AppLayout from "../layouts/AppLayout.vue";
import HomePage from "../pages/HomePage.vue";
import UserPage from "../pages/user/UserPage.vue";
import SigninPage from "../pages/SigninPage.vue";
import ChartPage from "../pages/chart/ChartPage.vue";
import RichTextEditorPage from "../pages/richText/RichTextEditorPage.vue";
import VideoPlayerPage from "../pages/video/VideoPlayerPage.vue";
import AuthPage from "../pages/AuthPage.vue";
const routes: RouteRecordRaw[] = [
  {
    path: "/signin",
    component: SigninPage,
  },
  {
    path: "/",
    component: AppLayout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        component: HomePage,
      },
      {
        path: "/chart",
        component: ChartPage,
      },
      {
        path: "/user",
        component: UserPage,
      },
      {
        path: "/rich-text-editor",
        component: RichTextEditorPage,
      },
      {
        path: "/video-player",
        component: VideoPlayerPage,
      },
    ],
  },
  {
    path: "/auth",
    component: AuthPage,
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
