import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/login.vue'
import home from '../components/home.vue'
Vue.use(VueRouter)
const routes = [{
  path: '/login', component: login
},
{
  path: '/', redirect: '/login'
},
{
  path: '/home', component: home
}
]

const router = new VueRouter({
  routes
})
// 路由拦截
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()

  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})
export default router
