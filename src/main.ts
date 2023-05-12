import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import myPlugin from "./index";

const app = createApp(App);
app.use(myPlugin);
app.mount("#app");
