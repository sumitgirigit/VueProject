
//import './firebase/config';
import Vue from 'vue';
import App from './App.vue';
//import VueFire from 'vuefire';
//import fire from 'vuefire';
//Vue.use(fire)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
