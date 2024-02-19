// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';

import './assets/utils/rem.js';

import './common/stylus/index.styl';

Vue.use(Mint);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, // 在根节点注入 ，才能使用this.$store
  components: { App },
  template: '<App/>',
});
