import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import VueChartkick from 'vue-chartkick'
// import Chart from 'chart.js'

// Vue.use(VueChartkick)
// Vue.use(Chart)
// Vue.use(VueChartkick.use(Chart))

// import Chartkick from 'vue-chartkick'
// import Chart from 'chart.js'

// Vue.use(Chartkick.use(Chart))
// Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin)
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
