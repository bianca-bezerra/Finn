import Input from "./input.js";
import Label from "./label.js";
const Field = (labelValue, placeholder, id, labelClass, inputClass) => {
    const div = document.createElement("div");
    div.classList.add("field", "w-full");
    const input = Input({ placeholder, className: inputClass });
    input.id = id;
    const label = Label(labelValue, id, labelClass);
    div.append(label);
    div.append(input);
    return div;
};
export default Field;
