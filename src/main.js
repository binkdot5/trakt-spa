import Vue from "vue";
import Shell from "./Shell.vue";
import router from "./router";
import "./assets/css/main.css";
import "./registerServiceWorker";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(Shell)
}).$mount("#app");
