// Cria e retorna o formulário
const createForm = () => {
    const form = document.createElement('div');
    form.classList.add('bg-gray-400', 'p-6', 'rounded', 'shadow-md', 'space-y-4', 'w-1/4', 'justify-center');
    return form;
};
export default createForm;
