import Vue from 'vue';
import App from './App.vue';
import router from './router';

import vueAwesomeCountdown from 'vue-awesome-countdown';

import 'jquery/src/jquery.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import AOS from 'aos';
import 'aos/dist/aos.css';
import VueSmoothScroll from 'vue2-smooth-scroll';
library.add(faPlay);
library.add(faPause);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(vueAwesomeCountdown, 'vac');
Vue.use(VueSmoothScroll);

new Vue({
  created() {
    AOS.init();
  },
  router,
  render: (h) => h(App),
}).$mount('#app');
