const createInput = (value: string): HTMLInputElement => {
  const input = document.createElement("input");
  input.type = "text";
  input.value = value;
  return input;
};

//chama atualiza quando dar enter ou sai
const handleInputEvents = async (
  e: Event,
  selectedCell: HTMLElement,
  input: HTMLInputElement,
  updateFunction: (newValue: string) => Promise<void>
) => {
  if ((e as KeyboardEvent).key === "Enter" || e.type === "blur") {
    selectedCell.textContent = input.value;
    await updateFunction(input.value);
  }
};

const editCell = (
  e: Event,
  initialValue: string,
  updateFunction: (newValue: string) => Promise<void>
) => {
  const selectedCell = e.target as HTMLElement;
  const input = createInput(initialValue);

  input.addEventListener("keypress", (event) =>
    handleInputEvents(event, selectedCell, input, updateFunction)
  );
  input.addEventListener("blur", (event) =>
    handleInputEvents(event, selectedCell, input, updateFunction)
  );

  selectedCell.textContent = "";
  selectedCell.appendChild(input);
  input.focus();
};
