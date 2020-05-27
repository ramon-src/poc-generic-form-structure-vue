import Vue from "vue";
import VueRouter from "vue-router";
import Home from "~/views/Home.vue";
import FormContainer from "~/views/Forms/FormContainer";
import { FORMS } from "~/views/Forms/FormFactory";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/form",
    name: "Form",
    component: FormContainer,
    props: () => ({ type: FORMS.FORM_A }),
  },
  {
    path: "/form/:id",
    name: "FormEdit",
    component: FormContainer,
    props: (route) => ({ type: FORMS.FORM_A, id: route.params.id }),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
