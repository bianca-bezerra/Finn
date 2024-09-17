import Button from "./ui/button.js";
import Field from "./ui/field.js";
import Form from "./ui/form.js";
import Input from "./ui/input.js";
import Label from "./ui/label.js";
import Link from "./ui/link.js";

const SignForm = () => {

    const div = document.createElement('div');
    div.classList.add('h-1/4', 'p-6', 'rounded', 'shadow-md', 'space-y-4', 'w-1/4', 'justify-center');

    const form = Form('Criar conta');

    const usernameField = Field('Username', 'Digite seu username', 'usernameInput')
    const emailField = Field('Email', 'Digite seu email preferido', 'emailInput')
    const fullNameField = Field('Nome completo', 'Digite seu nome completo', 'fullNameInput');
    const passwordField = Field('Senha', 'Digite sua melhor senha', 'passwordInput');

    const submitBtn = Button('Enviar')

    const footer = document.createElement('footer');
    footer.innerHTML = 'Já possui conta? ';
    footer.appendChild(Link('./login.html', 'Fazer login'));

    // submitBtn.addEventListener('click', (e) => { e.preventDefault(); handleSubmit() });
    form.append(usernameField, emailField, fullNameField, passwordField, submitBtn, footer);
    div.appendChild(form);
    return div;
};
export default SignForm;