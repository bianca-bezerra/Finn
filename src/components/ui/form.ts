import Separator from "./separator.js";

const Form = (title?: string) => {
    const form = document.createElement("form");
    if (title) {
        const h2 = document.createElement("h2");
        h2.innerText = title;
        h2.classList.add('text-lg','font-bold')
        form.append(h2,Separator())
    }
    form.classList.add('font-onest', 'flex', 'flex-col', 'justify-between', 'gap-y-2');
    return form;
}
export default Form;