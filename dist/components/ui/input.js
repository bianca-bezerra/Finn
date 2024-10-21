const Input = (placeholder, className) => {
    const input = document.createElement("input");
    input.classList.add("h-10", "rounded-lg", "p-2", "w-full");
    if (className) {
        input.classList.add(...className.split(""));
    }
    if (placeholder) {
        input.placeholder = placeholder;
    }
    return input;
};
export default Input;
