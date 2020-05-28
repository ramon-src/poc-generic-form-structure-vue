import Vue from "vue";
import VueRouter from "vue-router";
import FormContainer from "~/views/Forms/FormContainer";
import { FORMS } from "~/views/Forms/FormFactory";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Form",
    component: FormContainer,
    props: () => ({ type: FORMS.PERSON }),
  },
  {
    path: "/form/:id",
    name: "FormEdit",
    component: FormContainer,
    props: (route) => ({ type: FORMS.PERSON, id: route.params.id }),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
