import Vue from 'vue';
import App from './App.vue';
import router from './router';

import vueAwesomeCountdown from 'vue-awesome-countdown';

import 'jquery/src/jquery.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;

Vue.use(vueAwesomeCountdown, 'vac');

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
