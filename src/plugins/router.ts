import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import AppLayout from "../layouts/AppLayout.vue";
import Home from "../pages/Home.vue";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: AppLayout,
    children: [
      {
        path: "/",
        component: Home,
      },
    ],
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
