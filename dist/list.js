import { categories } from "./api/categoria.js";
const CategoriesList = async () => {
    const categoriesList = document.createElement('ul');
    const response = await categories.get();
    console.log(response);
    for (let categoria of response) {
        const element = document.createElement("li");
        element.innerText = categoria.name;
        categoriesList.append(element);
    }
    return categoriesList;
};
export default CategoriesList;
