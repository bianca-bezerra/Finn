// Cria e retorna o formulário
const createForm = () => {
    const form = document.createElement('form');
    form.classList.add('bg-white', 'p-6', 'rounded', 'shadow-md', 'space-y-4');
    // Criar o campo de entrada "Nome"
    const nameField = document.createElement('input');
    nameField.setAttribute('type', 'text');
    nameField.setAttribute('placeholder', 'Nome');
    nameField.classList.add('w-full', 'px-4', 'py-2', 'border', 'rounded-lg', 'focus:outline-none', 'focus:ring-2', 'focus:ring-blue-500');
    form.appendChild(nameField);
    // Criar o campo de entrada "Email"
    const emailField = document.createElement('input');
    emailField.setAttribute('type', 'email');
    emailField.setAttribute('placeholder', 'Email');
    emailField.classList.add('w-full', 'px-4', 'py-2', 'border', 'rounded-lg', 'focus:outline-none', 'focus:ring-2', 'focus:ring-blue-500');
    form.appendChild(emailField);
    // Criar o campo "Mensagem"
    const messageField = document.createElement('textarea');
    messageField.setAttribute('placeholder', 'Mensagem');
    messageField.classList.add('w-full', 'px-4', 'py-2', 'border', 'rounded-lg', 'focus:outline-none', 'focus:ring-2', 'focus:ring-blue-500', 'resize-none', 'h-32');
    form.appendChild(messageField);
    // Criar o botão de submissão
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'Enviar';
    submitButton.classList.add('bg-blue-500', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded-lg', 'hover:bg-blue-700', 'w-full');
    form.appendChild(submitButton);
    return form;
};
export default createForm;
