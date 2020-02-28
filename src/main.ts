import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { VueIocPlugin } from "@vue-ioc/core";

import "normalize.css";

Vue.config.productionTip = false;
Vue.use(VueIocPlugin);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
