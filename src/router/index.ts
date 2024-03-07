import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import Cadastro from '../views/cadastroUsuarioView.vue'
import AcessoNegado from '../components/AcessoNegado.vue'
import cadastroLogin from '../components/cadastroLogin.vue'
import esqueceuSenha from '../views/esqueceuSenha.vue'
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: Cadastro
  },
  {
    path: '/acesso-negado',
    name: 'acesso negado',
    component: AcessoNegado
  },
  {
    path: '/cadastro-login',
    name: 'cadastro de login',
    component: cadastroLogin
  },
  {
    path: '/esqueceu-senha',
    name:'esqueceu senha',
    component: esqueceuSenha
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router
