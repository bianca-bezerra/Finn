// async function handleSubmit() {
//     const valueInput = document.getElementById("valueInput") as HTMLInputElement;
//     const categorySelect = document.getElementById("categorySelect") as HTMLSelectElement; 
//     const value: number = Number(valueInput.value);
//     const category_id: number =Number(categorySelect.value);
//     if (!isNaN(value) && !isNaN(category_id)) {
//         await debits.post({ value, category_id, "owner_id": 1 });
//         console.log('fiz a req!');
//     }
// }
const CategoryForm = async () => {
    //DIV
    const div = document.createElement('div');
    div.classList.add('h-1/4', 'bg-green-500', 'p-6', 'rounded', 'shadow-md', 'space-y-4', 'w-1/4', 'justify-center');
    // FORM
    const form = document.createElement("form");
    form.classList.add('font-onest', 'flex', 'flex-col', 'justify-between', 'gap-y-2');
    //LABEL NOME
    const nameLabel = document.createElement('label');
    nameLabel.classList.add('font-semibold');
    nameLabel.innerText = 'Nome';
    // INPUT NOME
    const nameInput = document.createElement("input");
    nameInput.classList.add('h-10', 'rounded-lg', 'p-2');
    nameInput.id = 'nameInput';
    nameInput.placeholder = 'Digite o nome da categoria';
    //LABEL DESCRIÇÃO
    const descLabel = document.createElement('label');
    descLabel.classList.add('font-semibold');
    descLabel.innerText = 'Descrição';
    //INPUT DESCRIÇÃO
    const descInput = document.createElement("input");
    descInput.classList.add('h-10', 'rounded-lg', 'p-2');
    descInput.id = 'descInput';
    descInput.placeholder = 'Deixe uma descrição...';
    // BOTAO
    const submitBtn = document.createElement("button");
    submitBtn.classList.add('bg-gray-700', 'w-1/6', 'h-fit', 'rounded-lg', 'p-2', 'text-white', 'mt-2', 'text-xs', 'self-end');
    submitBtn.innerText = 'Enviar';
    // submitBtn.addEventListener('click', (e) => { e.preventDefault(); handleSubmit() });
    form.append(nameLabel);
    form.append(nameInput);
    form.append(descLabel);
    form.append(descInput);
    form.append(submitBtn);
    div.append(form);
    return div;
};
export default CategoryForm;
