import { categories } from "./../api/categories.js";
import Button from "./ui/button.js";
import Form from "./ui/form.js";
import Label from "./ui/label.js";
import Select from "./ui/select.js";
function handleClick() {
    const categorySelect = document.getElementById("filterCategorySelect");
    const category_id = Number(categorySelect.value);
    if (!isNaN(category_id)) {
        const event = new CustomEvent('filterSelected', {
            detail: { category_id },
        });
        document.dispatchEvent(event);
    }
}
const Filter = async () => {
    const div = document.createElement('div');
    div.classList.add('h-1/4', 'p-6', 'rounded', 'shadow-md', 'space-y-4', 'w-1/4', 'justify-center');
    const form = Form("Filtros");
    //CATEGORIA
    const categoryLabel = Label('Categoria');
    categoryLabel.htmlFor = 'filterCategorySelect';
    const categorySelect = Select('filterCategorySelect');
    const categoriesOptions = await categories.get();
    categoriesOptions.forEach((category) => {
        const option = document.createElement('option');
        option.classList.add('rounded');
        option.innerText = category.name;
        option.value = String(category.id);
        categorySelect.appendChild(option);
    });
    const submitBtn = Button('Aplicar');
    submitBtn.addEventListener('click', (e) => { e.preventDefault(); handleClick(); });
    div.appendChild(form);
    return div;
};
export default Filter;
