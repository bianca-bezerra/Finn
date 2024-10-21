const Input = (opts) => {
    const input = document.createElement("input");
    input.classList.add("h-10", "rounded-lg", "p-2", "w-full");
    if (opts?.className) {
        input.classList.add(...opts.className.split(""));
    }
    if (opts?.placeholder) {
        input.placeholder = opts.placeholder;
    }
    if (opts?.type) {
        input.type = opts.type;
    }
    return input;
};
export default Input;
