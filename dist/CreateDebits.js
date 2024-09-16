const CreateDebit = async () => {
    const form = document.createElement("form");
    const valueInput = document.createElement("input");
    valueInput.placeholder = 'Digite o valor';
    const submitBtn = document.createElement("button");
    submitBtn.innerText = 'Enviar';
    form.append(valueInput);
    form.append(submitBtn);
};
export default CreateDebit;
