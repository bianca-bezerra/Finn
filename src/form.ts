
// Cria e retorna o formulário
const createForm = () => {
  const form = document.createElement('form');
  form.classList.add('bg-white', 'p-6', 'rounded', 'shadow-md', 'space-y-4');
  console.log("to")
  return form;
};

export default createForm;