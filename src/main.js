import Vue from 'vue'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import { library } from '@fortawesome/fontawesome-svg-core'
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faSearch);
Vue.component('font-awesome-icon', FontAwesomeIcon)


import {router} from "@/router";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
