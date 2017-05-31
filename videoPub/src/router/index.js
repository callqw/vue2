import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
const Login = r => require.ensure([], () => r(require('../page/Login.vue')), 'Login')
Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    {path: '/', name: 'Login', component: Login},
    {path: '/hello', name: 'Hello', component: Hello},
    {path: '/login', name: 'login', component: Login},
    {path: '*', redirect: '/'}
  ]
})
router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem('demo-token');
  if (to.path == '/') { // 如果是跳转到登录页的
    if (token != 'null' && token != null) {
      next('/hello') // 如果有token就转向todolist不返回登录页
    }
    next(); // 否则跳转回登录页
  } else {
    if (token != 'null' && token != null) {
      Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token; // 全局设定header的token验证，注意Bearer后有个空格
      next()
      next() // 如果有token就正常转向
    } else {
      next('/') // 否则跳转回登录页
    }
  }
})

export default router

