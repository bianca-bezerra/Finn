"use strict";
const createInput = (value) => {
    const input = document.createElement("input");
    input.type = "text";
    input.value = value;
    return input;
};
//chama atualiza quando dar enter ou sai
const handleInputEvents = async (e, selectedCell, input, updateFunction) => {
    if (e.key === "Enter" || e.type === "blur") {
        selectedCell.textContent = input.value;
        await updateFunction(input.value);
    }
};
const editCell = (e, initialValue, updateFunction) => {
    const selectedCell = e.target;
    const input = createInput(initialValue);
    input.addEventListener("keypress", (event) => handleInputEvents(event, selectedCell, input, updateFunction));
    input.addEventListener("blur", (event) => handleInputEvents(event, selectedCell, input, updateFunction));
    selectedCell.textContent = "";
    selectedCell.appendChild(input);
    input.focus();
};
