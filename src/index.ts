import components from "./components";
interface componentType {
    name: string;
    component: object;
}

const componentsArray: componentType[] = components as componentType[];
export default {
    install(app: any) {
        componentsArray.forEach((c: componentType) => {
            app.component(c.name, c.component);
        });
    },
};
