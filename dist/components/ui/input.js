const Input = (placeholder) => {
    const input = document.createElement("input");
    input.classList.add('h-10', 'rounded-lg', 'p-2', 'w-full');
    if (placeholder) {
        input.placeholder = placeholder;
    }
    return input;
};
export default Input;
