import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import AppLayout from "../layouts/AppLayout.vue";
import Home from "../pages/HomePage.vue";
import CRUD from "../pages/crud/CRUDPage.vue";
import Signin from "../pages/SigninPage.vue";
const routes: RouteRecordRaw[] = [
  {
    path: "/signin",
    component: Signin,
  },
  {
    path: "/",
    component: AppLayout,
    children: [
      {
        path: "/",
        component: Home,
      },
      {
        path: "/crud",
        component: CRUD,
      },
    ],
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
