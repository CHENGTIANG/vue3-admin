import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import AppLayout from "../layouts/AppLayout.vue";
import HomePage from "../pages/HomePage.vue";
import UserPage from "../pages/user/UserPage.vue";
import SigninPage from "../pages/SigninPage.vue";
import ChartPage from "../pages/chart/ChartPage.vue";
const routes: RouteRecordRaw[] = [
  {
    path: "/signin",
    component: SigninPage,
  },
  {
    path: "/",
    component: AppLayout,
    children: [
      {
        path: "/",
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
    ],
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
