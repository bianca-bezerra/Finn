const Separator = (className) => {
    const divider = document.createElement("div");
    divider.classList.add('h-px', 'bg-gray-300', 'w-full', 'mb-4');
    if (className) {
        divider.classList.add(...(className.split(' ')));
    }
    return divider;
};
export default Separator;
