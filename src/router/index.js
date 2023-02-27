import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import Login from "../views/Login"
import Register from "../views/Register"
import Secret from "../views/Secret"
import { getAuth } from "firebase/auth"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/secret",
    name: "secret",
    component: Secret,
    meta: { requiresAuth: true },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
  const auth = getAuth()
  const isAuthenticated = auth.currentUser
  if (requiresAuth && !isAuthenticated) {
    next("/login")
  } else {
    next()
  }
})

export default router
