import { auth } from "../api/auth.js";
import { strExists } from "../utils/strings.js";
import Button from "./ui/button.js";
import Field from "./ui/field.js";
import Form from "./ui/form.js";
import Link from "./ui/link.js";
function handleSubmit() {
    const usernameInput = document.getElementById("usernameInput");
    const fullNameInput = document.getElementById("fullNameInput");
    const emailInput = document.getElementById("emailInput");
    const passwordInput = document.getElementById("passwordInput");
    if (!strExists(usernameInput.value) ||
        !strExists(fullNameInput.value) ||
        !strExists(passwordInput.value)) {
        console.error("Preencha o formulário corretamente!");
    }
    auth.sign({
        username: usernameInput.value,
        full_name: fullNameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
    });
}
const SignForm = () => {
    const div = document.createElement("div");
    div.classList.add("h-fit", "p-6", "rounded", "shadow-md", "space-y-4", "w-1/4", "justify-center");
    const form = Form("Criar conta");
    const usernameField = Field("Username", "Digite seu username", "usernameInput");
    const emailField = Field("Email", "Digite seu email", "emailInput");
    const fullNameField = Field("Nome completo", "Digite seu nome", "fullNameInput");
    const passwordField = Field("Senha", "Digite sua melhor senha", "passwordInput");
    const submitBtn = Button("Enviar");
    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();
        handleSubmit();
    });
    const footer = document.createElement("footer");
    footer.innerHTML = "Já possui conta? ";
    footer.appendChild(Link("./login.html", "Fazer login"));
    form.append(usernameField, fullNameField, emailField, passwordField, submitBtn, footer);
    div.appendChild(form);
    return div;
};
export default SignForm;
