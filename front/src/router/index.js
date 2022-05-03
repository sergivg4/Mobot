import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: {
      guest: true
    }
  },
  {
    path: '/Register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue'),
    meta: {
      guest: true
    }
  },
  {
    path: '/RecoverPassword',
    name: 'RecoverPassword',
    component: () => import(/* webpackChunkName: "recovery" */ '../views/RecoverPassword.vue'),
    meta: {
      guest: true
    }
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/Info',
    name: 'Info',
    component: () => import(/* webpackChunkName: "create" */ '../views/Info.vue'),
    meta: {
      requiresAuth: true
    }
  },
  
  {
    path: '/Profile/:user',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/Nav',
    name: 'Nav',
    component: () => import(/* webpackChunkName: "library" */ '../views/Nav.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/Settings',
    name: 'Settings',
    component: () => import(/* webpackChunkName: "settings" */ '../views/Settings.vue'),
    meta: {
      requiresAuth: true
    },
  },
  {
    path: '/ArmModel',
    name: 'ArmModel',
    component: () => import(/* webpackChunkName: "settings" */ '../views/ArmModel.vue'),
    meta: {
      requiresAuth: true
    },
  },
  {
    path: '/Movements',
    name: 'Movements',
    component: () => import(/* webpackChunkName: "settings" */ '../views/Movements.vue'),
    meta: {
      requiresAuth: true
    },
  },
  {
    path: "*",
    name: "NotFound",
    component: () => import(/* webpackChunkName: "settings" */ '../views/PageNotFound.vue')
    },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
      if (!localStorage.getItem("isLoggedIn")) {
          router.push("/");
      } else {
          next();
      }
  } else if (to.matched.some(record => record.meta.guest)) {
      if (localStorage.getItem("isLoggedIn")) {
          next("/Home");
      } else {
          next();
      }
  } else {
      next();
  }
});

export default router
