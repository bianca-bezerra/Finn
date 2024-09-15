const createButton = (text, type = 'button') => {
    const button = document.createElement('button');
    button.setAttribute('type', type);
    button.textContent = text;
    button.classList.add('bg-blue-500', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded-lg', 'hover:bg-blue-700', 'transition', 'duration-300');
    // if (onClick) {
    //   button.addEventListener('click', onClick);
    // }
    return button;
};
export default createButton;
