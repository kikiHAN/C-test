import Vue from 'vue';
import VueRouter from 'vue-router';


import Goods from './goods.vue';
import Classify from './classify.vue';


Vue.use(VueRouter);

var router = new VueRouter({
	routes: [
		{path:'/goods', component: Goods},

		{path:'/classify', component: Classify},

		{path:'', redirect: 'goods'}

	]
});

new Vue({
  el: '#app',
  router: router
  // render: h => h(App)
})
