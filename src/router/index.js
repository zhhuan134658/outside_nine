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
    name: 'name',
    redirect: '/home',
    component: () => import('../pages/home.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/login.vue'),
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
            path: '/homePage/homePageindex',
            name: 'homePageindex',
            component: () => import('../pages/homePage/appIndex.vue'),
          },
        ],
      },
      //分类
      {
        path: '/classifiCation',
        name: 'classifiCation',
        component: () => import('../pages/classifiCation/index.vue'),
        redirect: '/classifiCation/classList',
        children: [
          {
            path: '/classifiCation/classList',
            name: 'classList',
            component: () => import('../pages/classifiCation/classList.vue'),
          },
        ],
      },
      //购物车
      {
        path: '/shoppingCart',
        name: 'shoppingCart',
        component: () => import('../pages/shoppingCart/index.vue'),
        redirect: '/shoppingCart/shoppingList',
        children: [
          {
            path: '/shoppingCart/shoppingList',
            name: 'shoppingList',
            component: () => import('../pages/shoppingCart/shoppingList.vue'),
          },
        ],
      },
      //我的
      {
        path: '/myOwn',
        name: 'myOwn',
        component: () => import('../pages/myOwn/index.vue'),
        redirect: '/myOwn/myownList',
        children: [
          {
            path: '/myOwn/myownList',
            name: 'myownList',
            component: () => import('../pages/myOwn/myownList.vue'),
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
