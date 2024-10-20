import Input from './input.js'
import Label from './label.js'

const Field = (labelValue: string, placeholder: string, id: string) => {
    const div = document.createElement("div");
    div.classList.add("field", 'w-full');

    const input = Input(placeholder);
    input.id = id;

    const label = Label(labelValue);
    label.htmlFor = id;

    div.append(label);
    div.append(input);

    return div;
}

export default Field;