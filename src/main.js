import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'; import 'bootstrap/dist/css/bootstrap.css'
import ToggleButton from 'vue-js-toggle-button'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.config.productionTip = false
Vue.use(ToggleButton)
Vue.use(VueSweetalert2, {confirmButtonColor: '#808080'})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
