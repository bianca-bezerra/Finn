import { categories } from "../api/categories.js";
import { debits } from "../api/debit.js";
import Button from "./ui/button.js";
import Field from "./ui/field.js";
import Form from "./ui/form.js";
import Label from "./ui/label.js";
import Select from "./ui/select.js";

async function handleSubmit() {
    const valueInput = document.getElementById("valueInput") as HTMLInputElement;
    const categorySelect = document.getElementById("categorySelect") as HTMLSelectElement;
    const value: number = Number(valueInput.value);
    const category_id: number = Number(categorySelect.value);

    if (!isNaN(value) && !isNaN(category_id)) {
        await debits.post({ value, category_id, "owner_id": 1 });

        const event = new CustomEvent('debitAdded', {
            detail: { value, category_id },
        });
        document.dispatchEvent(event);
    }
}

const DebitForm = async () => {
    const div = document.createElement('div');
    div.classList.add('h-1/4', 'p-6', 'rounded', 'shadow-md', 'space-y-4', 'w-1/4', 'justify-center');

    const form = Form('Adicionar despesa');

    const valueField = Field('Valor', 'Digite o valor', 'valueInput');

    const categoryLabel = Label('Categoria');
    categoryLabel.htmlFor = 'categorySelect';
    const categorySelect = Select('categorySelect');

    const categoriesOptions = await categories.get();
    categoriesOptions.forEach((category) => {
        const option = document.createElement('option');
        option.classList.add('rounded');
        option.innerText = category.name;
        option.value = String(category.id);
        categorySelect.appendChild(option);
    });

    const submitBtn = Button('Enviar');
    submitBtn.addEventListener('click', (e) => { e.preventDefault(); handleSubmit() });

    form.append(valueField, categoryLabel, categorySelect, submitBtn);
    div.append(form);

    return div;
};

export default DebitForm;
