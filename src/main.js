import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import "@fortawesome/free-solid-svg-icons";
import router from "./router/route";
import { createPinia } from 'pinia';

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

// Andt vue
import Andt from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css';

library.add(fas, far, fab)
dom.watch();

const app = createApp(App);
const pinia = createPinia();

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(pinia);
app.use(router);
app.use(Andt)

app.mount('#app');


// createApp(App).component("font-awesome-icon", FontAwesomeIcon);
// createApp(App).use(router).mount("#app");