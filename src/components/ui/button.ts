const Button = (
  content: string,
  opts: { className?: string; useBaseClass: boolean } = { useBaseClass: true }
) => {
  const button = document.createElement("button");
  button.innerText = content;
  if (opts?.className) button.classList.add(...opts.className.split(" "));
  if (opts.useBaseClass) {
    button.classList.add(
      "bg-amber-300",
      "hover:bg-amber-400",
      "w-1/6",
      "h-fit",
      "rounded-lg",
      "p-2",
      "text-white",
      "mt-2",
      "text-xs",
      "self-end",
      "font-bold"
    );
  }
  return button;
};
export default Button;
