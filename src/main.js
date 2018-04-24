import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'

import { routes } from './routes'
import store from './store/store';

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-stock-trader-69525.firebaseio.com/';

Vue.filter('currency', (value) => {
	return '$ ' + value.toLocaleString();
})

const router = new VueRouter({ 
  routes: routes,
  mode: 'history',
});

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
