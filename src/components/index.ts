//Import all categories
import Containment from "./Containment";
import Forms from "./Forms";
import GridAndFlex from "./Grid_and_Flex";
import Navigators from "./Navigators";

let categories: Array<object> = [];
[Containment, Forms, GridAndFlex, Navigators].forEach(
    (category: Array<object>) => {
        category.forEach((components: Object) => {
            categories.push(components);
        });
    }
);
export default categories;
