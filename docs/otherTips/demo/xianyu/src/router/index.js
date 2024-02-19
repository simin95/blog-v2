import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/pages/Index';
import Login from '@/pages/Login';
import My from '@/pages/My';
import Yutang from '@/pages/Yutang';
import Message from '@/pages/Message';


import New from '@/components/New/New';
import Near from '@/components/Near/Near';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      // 重定向：即每次刷新页面去的路由地址(否则不默认加载子路由组件)
      redirect: '/new',
      name: 'Index',
      component: Index,
      children: [
        {
          path: 'new',
          component: New,
        },
        {
          path: 'near',
          component: Near,
        },
      ],
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/my',
      component: My,
    },
    {
      path: '/yutang',
      component: Yutang,
    },
    {
      path: '/message',
      component: Message,
    },
  ],
});
