import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import myPlugin from './index'
// import myPlugin from "@n0d3rr/nexus-ui";
// import "@n0d3rr/nexus-ui/dist/style.css";
const app = createApp(App);
app.use(myPlugin);
app.mount("#app");
