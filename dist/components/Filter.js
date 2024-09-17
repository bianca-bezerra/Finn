import { categories } from "./../api/categories.js";
import Button from "./ui/button.js";
import Form from "./ui/form.js";
import Input from "./ui/input.js";
import Label from "./ui/label.js";
import Select from "./ui/select.js";
function handleClick() {
    const categorySelect = document.getElementById("filterCategorySelect");
    const dateBeforeInput = document.getElementById("dateBeforeInput");
    const dateAfterInput = document.getElementById("dateAfterInput");
    const category_id = categorySelect.value;
    const dt_payment_from = dateAfterInput.value;
    const dt_payment_to = dateBeforeInput.value;
    let detail = {};
    if (!isNaN(Number(category_id))) {
        detail.category_id = category_id;
    }
    if (dt_payment_from) {
        detail.dt_payment_from = dt_payment_from;
    }
    if (dt_payment_to) {
        detail.dt_payment_from = dt_payment_to;
    }
    if (Object.keys(detail).length) {
        const event = new CustomEvent("filterSelected", {
            detail,
        });
        document.dispatchEvent(event);
    }
}
const Filter = async () => {
    const div = document.createElement("div");
    // div.style.marginRight = "5px";
    div.classList.add("h-fit", "p-6", "rounded", "shadow-md", "space-y-4", "w-full", "justify-center", "border-2", "border-gray-700", "mr-2");
    const form = Form("Filtros");
    //CATEGORIA
    const categoryLabel = Label("Categoria");
    categoryLabel.htmlFor = "filterCategorySelect";
    const categorySelect = Select("filterCategorySelect");
    const categoriesOptions = await categories.get();
    categoriesOptions.forEach((category) => {
        const option = document.createElement("option");
        option.classList.add("rounded");
        option.innerText = category.name;
        option.value = String(category.id);
        categorySelect.appendChild(option);
    });
    //DATA DEPOIS
    const dateAfterLabel = Label("A partir de", "dateAfterInput");
    const dateAfterInput = Input();
    dateAfterInput.id = "dateAfterInput";
    dateAfterInput.type = "date";
    //DATA ANTES
    const dateBeforeLabel = Label("Até", "dateBeforeInput");
    const dateBeforeInput = Input();
    dateBeforeInput.id = "dateBeforeInput";
    dateBeforeInput.type = "date";
    const submitBtn = Button("Aplicar");
    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();
        handleClick();
    });
    form.append(categoryLabel, categorySelect, dateAfterLabel, dateAfterInput, dateBeforeLabel, dateBeforeInput, submitBtn);
    div.appendChild(form);
    return div;
};
export default Filter;
