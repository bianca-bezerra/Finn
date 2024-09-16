import Button from "./ui/button.js";
import Field from "./ui/field.js";
import Form from "./ui/form.js";
import Input from "./ui/input.js";
import Label from "./ui/label.js";

const LoginForm = () => {

    const div = document.createElement('div');
    div.classList.add('h-1/4', 'p-6', 'rounded', 'shadow-md', 'space-y-4', 'w-1/4', 'justify-center');

    const form = Form("Login");

    const usernameField = Field('Username', 'Digite seu username', 'usernameInput')
    const passwordField = Field('Senha', 'Digite sua melhor senha', 'passwordInput');

    const submitBtn = Button('Enviar')

    // submitBtn.addEventListener('click', (e) => { e.preventDefault(); handleSubmit() });
    form.append(usernameField, passwordField, submitBtn);
    div.appendChild(form);

    return div;
};
export default LoginForm;