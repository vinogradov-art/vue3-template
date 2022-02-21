import { createRouter, createWebHashHistory } from "vue-router"

import HomePage from "@/pages/HomeComponent"
import AboutPage from "@/pages/AboutComponent"
import NotFoundPage from "@/pages/NotFoundComponent"

const routers = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: HomePage
    },
    {
      path: "/about",
      component: AboutPage
    },
    {
      path: "/:catchAll(.*)",
      component: NotFoundPage
    }
  ]
})

export default routers
