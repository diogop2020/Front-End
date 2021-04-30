import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue' 
import 'bootstrap/dist/css/bootstrap.css' 
import 'bootstrap-vue/dist/bootstrap-vue.css' 
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.use(VueRouter);

const routes = [
  {
    path: "/", 
    name: "Main",
    component: Main,
    },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/Profile.vue"),
  },
  {
    path: "*",
    name: "Erro",
    component: () =>
      import("../views/Erro.vue")
  },
  {
    path: "/profiles/:id",
    name: "Profiles",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/Profiles.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
