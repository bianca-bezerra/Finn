import Button from "./ui/button.js";
import Field from "./ui/field.js";
import Form from "./ui/form.js";
import Input from "./ui/input.js";
import Label from "./ui/label.js";
import Link from "./ui/link.js";

const LoginForm = () => {

    const div = document.createElement('div');
    div.classList.add('h-1/4', 'p-6', 'rounded', 'shadow-md', 'space-y-4', 'w-1/4', 'justify-center');

    const form = Form("Login");

    const usernameField = Field('Username', 'Digite seu username', 'usernameInput')
    const emailField = Field('Email', 'Digite seu email', 'emailInputt');

    const submitBtn = Button('Enviar')
    // submitBtn.addEventListener('click', (e) => { e.preventDefault(); handleSubmit() });

    const footer = document.createElement('footer');
    footer.innerHTML = 'Novo por aqui? ';
    footer.appendChild(Link('./sign.html', 'Criar conta'));
    
    form.append(usernameField, emailField, submitBtn,footer);
    div.appendChild(form);

    return div;
};
export default LoginForm;