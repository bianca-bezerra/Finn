const Label = (innerText?: string, htmlFor?: string, className?: string) => {
  const label = document.createElement("label");
  label.classList.add("font-semibold");
  if (className) {
    label.classList.add(...className.split(" "));
  }
  if (innerText) {
    label.innerText = innerText;
  }
  if (htmlFor) {
    label.htmlFor = htmlFor;
  }
  return label;
};

export default Label;
