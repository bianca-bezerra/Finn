const Container = () => {
  // DIV
  const div = document.createElement("div");
  div.classList.add(
    "bg-black",
    "p-6",
    "rounded-lg",
    "shadow-md",
    "space-y-4",
    "w-full",
    "justify-center",
    "flex",
    "h-fit"
  );

  return div;
};

const Header = (headers: string[]) => {
  // CABEÇALHO
  const thead = document.createElement("thead");
  thead.classList.add("w-full");

  const headerRow = document.createElement("tr");
  headers.forEach((headerText) => {
    const th = document.createElement("th");
    th.classList.add(
      "py-2",
      "px-4",
      "rounded-lg",
      "font-onest",
      "w-1/2",
      "text-start"
    );
    th.innerText = headerText;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  return thead;
};

const Root = () => {
  const table = document.createElement("table");
  table.classList.add("bg-white", "h-fit", "rounded-lg", "shadow-md", "w-full");
  return table;
};

const Cell = (value: string) => {
  const td = document.createElement("td");
  td.classList.add("py-2", "px-4");
  td.innerText = value;

  return td;
};

const Table = {
  Container,
  Header,
  Root,
  Cell,
};

export default Table;
