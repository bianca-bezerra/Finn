const Label = (innerText, htmlFor) => {
    const label = document.createElement('label');
    label.classList.add('font-semibold');
    if (innerText) {
        label.innerText = innerText;
    }
    if (htmlFor) {
        label.htmlFor = htmlFor;
    }
    return label;
};
export default Label;
