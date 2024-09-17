import { users } from "./../api/users.js";
import { strExists } from "./../utils/strings.js";
import Button from "./ui/button.js";
import Field from "./ui/field.js";
import Form from "./ui/form.js";
import Input from "./ui/input.js";
import Label from "./ui/label.js";
import Link from "./ui/link.js";

// function handleSubmit() {
//     const usernameInput = document.getElementById("usernameInput") as HTMLInputElement
//     const fullNameInput = document.getElementById("fullNameInput") as HTMLInputElement
//     const passwordInput = document.getElementById("passwordInput") as HTMLInputElement

//     if(!strExists(usernameInput.value)||!strExists(fullNameInput.value)||!strExists(passwordInput.value)){
//         console.error('Preencha o formulário corretamente!');
//     }

//     users.sign({
//         username : usernameInput.value,
//         full_name: fullNameInput,
//     });
// }

const SignForm = () => {

    const div = document.createElement('div');
    div.classList.add('h-1/4', 'p-6', 'rounded', 'shadow-md', 'space-y-4', 'w-1/4', 'justify-center');

    const form = Form('Criar conta');

    const usernameField = Field('Username', 'Digite seu username', 'usernameInput')
    const fullNameField = Field('Nome completo', 'Digite seu nome', 'fullNameInput');
    const passwordField = Field('Senha', 'Digite sua melhor senha', 'passwordInput');

    const submitBtn = Button('Enviar')

    const footer = document.createElement('footer');
    footer.innerHTML = 'Já possui conta? ';
    footer.appendChild(Link('./login.html', 'Fazer login'));

    // submitBtn.addEventListener('click', (e) => { e.preventDefault(); handleSubmit() });
    form.append(usernameField, fullNameField, passwordField, submitBtn, footer);
    div.appendChild(form);
    return div;
};
export default SignForm;