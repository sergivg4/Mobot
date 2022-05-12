import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import Movements from '../views/Movements.vue'
import Nav from '../views/Nav.vue'
import RecoverPassword from '../views/RecoverPassword.vue'
import Login from '../views/Login.vue'
import Settings from '../views/Settings.vue'
import Info from '../views/Info.vue'
import Register from '../views/Register.vue'
import ArmModel from '../views/ArmModel.vue'
import robotApp from '../views/robotApp.vue'
const history = createWebHistory();
const routes = [
  {
    path: '/Login',
    component: Login
  },
  {
    path: '/',
    component: Home,
  },
  {
    path: '/app',
    component: robotApp,
  },
  {
    path: '/Register',
    component: Register,

  },
  {
    path: '/RecoverPassword',
    component: RecoverPassword,
  },
  {
    path: '/Home',
    component: Home
  },
  {
    path: '/Info',
    component: Info
  },
  {
    path: '/Nav',
    component: Nav
    
  },
  {
    path: '/Settings',
    component: Settings
    
  },
  {
    path: '/ArmModel',
    component: ArmModel
    
  },
  {
    path: '/Movements',
    component: Movements
    ,
  },
/*   {
    path: "*",
    name: "NotFound",
    component: () => import(/* webpackChunkName: "settings" / '../views/PageNotFound.vue')
    }, */
];
const router = createRouter({
  history,
  routes
});


export default router;
