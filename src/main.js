import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueImgInputer from 'vue-img-inputer'

Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App)
})
