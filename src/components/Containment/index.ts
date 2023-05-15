//Import all components from Containment
import NButton from "./N-Button/NButton.vue";
import NCard from "./N-Card/NCard.vue";
import NModal from "./N-Modal/NModal.vue";
import NProgress from "./N-Progress/NProgress.vue";
import NAlert from "./N-Alert/NAlert.vue";
import NBadge from "./N-Badge/NBadge.vue";
import NNotify from "./N-Notify/NNotify.vue";
import N404 from "./N-404/N404.vue";
import NLoading from "./N-Loading/NLoading.vue";

//Export all components from Containment
export default [
    {
        name: "N-Button",
        component: NButton,
    },
    {
        name: "N-Card",
        component: NCard,
    },
    {
        name: "N-Modal",
        component: NModal,
    },
    {
        name: "N-Progress",
        component: NProgress,
    },
    {
        name: "N-Alert",
        component: NAlert,
    },
    {
        name: "N-Badge",
        component: NBadge,
    },
    {
        name: "N-Notify",
        component: NNotify,
    },
    {
        name: "N-404",
        component: N404,
    },
    {
        name: "N-Loading",
        component: NLoading,
    },
];
