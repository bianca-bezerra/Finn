import { categories } from "./api/categories.js";
import { debits } from "./api/debit.js";
async function handleSubmit() {
    const valueInput = document.getElementById("valueInput");
    const categorySelect = document.getElementById("categorySelect");
    const value = Number(valueInput.value);
    const category_id = Number(categorySelect.value);
    if (!isNaN(value) && !isNaN(category_id)) {
        await debits.post({ value, category_id, "owner_id": 1 });
        console.log('fiz a req!');
    }
}
const DebitForm = async () => {
    //DIV
    const div = document.createElement('div');
    div.classList.add('h-1/4', 'bg-rose-950', 'p-6', 'rounded', 'shadow-md', 'space-y-4', 'w-1/4', 'justify-center');
    // FORM
    const form = document.createElement("form");
    form.classList.add('font-onest', 'flex', 'flex-col', 'justify-between', 'gap-y-2');
    //LABEL VALOR
    const valueLabel = document.createElement('label');
    valueLabel.classList.add('font-semibold');
    valueLabel.innerText = 'Valor da despesa';
    // INPUT VALOR
    const valueInput = document.createElement("input");
    valueInput.classList.add('h-10', 'rounded-lg', 'p-2');
    valueInput.id = 'valueInput';
    valueInput.placeholder = 'Digite o valor';
    //LABEL CATEGORIA
    const categoryLabel = document.createElement('label');
    categoryLabel.classList.add('font-semibold');
    categoryLabel.innerText = 'Categoria';
    //INPUT CATEGORIA
    const categorySelect = document.createElement('select');
    categorySelect.id = 'categorySelect';
    categorySelect.classList.add('h-10', 'rounded-lg', 'p-2');
    //OPTIONS
    const categoriesOptions = await categories.get();
    categoriesOptions.forEach((category) => {
        const option = document.createElement('option');
        option.classList.add('rounded');
        option.innerText = category.name;
        option.value = String(category.id);
        categorySelect.appendChild(option);
    });
    // BOTAO
    const submitBtn = document.createElement("button");
    submitBtn.classList.add('bg-gray-700', 'w-1/6', 'h-fit', 'rounded-lg', 'p-2', 'text-white', 'mt-2', 'text-xs', 'self-end');
    submitBtn.innerText = 'Enviar';
    submitBtn.addEventListener('click', (e) => { e.preventDefault(); handleSubmit(); });
    form.append(valueLabel);
    form.append(valueInput);
    form.append(categoryLabel);
    form.append(categorySelect);
    form.append(submitBtn);
    div.append(form);
    return div;
};
export default DebitForm;
