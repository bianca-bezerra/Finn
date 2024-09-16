const Label = (innerText? : string) => {
    const label = document.createElement('label')
    label.classList.add('font-semibold')
    if(innerText){
        label.innerText = innerText;
    }
    return label;
}

export default Label;