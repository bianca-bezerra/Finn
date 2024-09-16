
const Button = (content: string) => {
    const button = document.createElement("button");
    button.innerText = content;
    button.classList.add('bg-gray-700', 'w-1/6', 'h-fit', 'rounded-lg', 'p-2', 'text-white', 'mt-2', 'text-xs', 'self-end');
    return button;
}
export default Button;