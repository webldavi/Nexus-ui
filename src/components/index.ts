//Import all categories
import Containment from "./Containment";
import Forms from "./Forms";
import GridAndFlex from "./Grid_and_Flex";
import Navigators from "./Navigators";

let categories: Array<object> = [];
[Containment, Forms, GridAndFlex, Navigators].forEach(
    (category: Array<object>) => {
        category.forEach((c) => {
            categories.push(c);
        });
    }
);

export default categories;
