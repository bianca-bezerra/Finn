const Button = (content) => {
    const button = document.createElement("button");
    button.innerText = content;
    button.classList.add("bg-amber-300", "hover:bg-amber-400", "w-1/6", "h-fit", "rounded-lg", "p-2", "text-white", "mt-2", "text-xs", "self-end", "font-bold");
    return button;
};
export default Button;
