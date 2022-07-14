import Vue from 'vue';
import VueRouter from 'vue-router';

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

Vue.use(VueRouter);
const routes = [
  //-----------首页
  {
    path: '/',
    redirect: '/home',
    component: () => import('../pages/home.vue'),
  },
  {
    path: '/home',
    name: 'home',
    redirect: '/homePage/homePageindex',
    component: () => import('../pages/home.vue'),
    children: [
      //首页
      {
        path: '/homePage',
        name: 'homePage',
        component: () => import('../pages/homePage/index.vue'),
        redirect: '/homePage/homePageindex',
        children: [
          {
            path: '/homePage/homePageindex', //首页-我的工作
            name: 'homePageindex',
            component: () => import('../pages/homePage/appIndex.vue'),
          },
          
        ],
      },

      
    ],
  },
];
const router = new VueRouter({
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.path === '/error' || to.path === '/errorOut') {
    next();
  } else {
    let token = sessionStorage.getItem('errcode');
    if (token == 2 || token == 0) {
      next('/error');
    } else if (token == 3) {
      next('/errorOut');
    } else {
      next();
    }
  }
});
export default router;
