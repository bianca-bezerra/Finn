import { categories } from "../api/categories.js";
import Button from "./ui/button.js";
import Field from "./ui/field.js";
import Form from "./ui/form.js";
async function handleSubmit() {
    const nomeInput = document.getElementById("nameInput");
    const descInput = document.getElementById("descInput");
    const name = nomeInput.value;
    const description = descInput.value;
    if (name && description) {
        await categories.post({ name, description });
        const event = new CustomEvent("categoryAdded", {
            detail: { name, description },
        });
        document.dispatchEvent(event);
    }
}
const CategoryForm = async () => {
    //DIV
    const div = document.createElement("div");
    div.classList.add("h-1/4", "p-6", "rounded", "shadow-lg", "space-y-4", "w-full", "justify-center");
    // FORM
    const form = Form("Adicionar categoria");
    //NOME
    const nameField = Field("Nome", "Digite o nome da categoria", "nameInput");
    //LABEL DESCRIÇÃO
    const descLabel = document.createElement("label");
    descLabel.classList.add("font-semibold");
    descLabel.innerText = "Descrição";
    //INPUT DESCRIÇÃO
    const descInput = document.createElement("textarea");
    descInput.classList.add("h-10", "rounded-lg", "p-2", "bg-gray-300", "border-2", "border-gray-400", "placeholder-gray-500");
    descInput.id = "descInput";
    descInput.placeholder = "Deixe uma descrição...";
    // BOTAO
    const submitBtn = Button("Enviar");
    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();
        handleSubmit();
    });
    form.append(nameField);
    form.append(descLabel);
    form.append(descInput);
    form.append(submitBtn);
    div.append(form);
    return div;
};
export default CategoryForm;
