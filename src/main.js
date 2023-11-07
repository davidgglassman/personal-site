import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./app/App.vue";
import router from "./routing/router.js";
import "./assets/css/global.css";

import mitt from "mitt";
const emitter = mitt();

const app = createApp(App);

app.use(router);
app.use(createPinia());

app.provide("emitter", emitter);

app.mount("#app");
