import { Debit } from "./../types.js";
import { debits } from "../api/debits.js";
import Table from "./ui/table.js";
import TrashIcon from "./icons/trash.js";

async function handleDelete(id: number) {
  const tr = document.getElementById(`debit-${id}`);
  tr?.classList.add("text-gray-500", "line-through");
  const ok = await debits.remove(id);
  console.log("Deleto deu certo? ", ok);
  tr?.remove();
}

const DebitList = async () => {
  const container = Table.Container();
  const table = Table.Root();
  const thead = Table.Header(["Valor", "Categoria", "Data", ""]);
  const tbody = document.createElement("tbody");

  let allDebits = await debits.get();

  const renderTableBody = (data: Debit[]) => {
    tbody.innerHTML = "";
    data.forEach((debit) => {
      const row = document.createElement("tr");
      row.classList.add("font-onest");

      row.id = `debit-${debit.id}`;
      const valueCell = Table.Cell(String(`R$ ${debit.value}`));
      const catNameCell = Table.Cell(String(debit.category.name));
      const dtPayCell = Table.Cell(
        new Date(debit.dt_payment).toLocaleString("pt-BR", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })
      );

      valueCell.addEventListener("dblclick", (e) =>
        editCell(e, debit, "value")
      );
      // catNameCell.addEventListener('dblclick', (e) => editCell(e, debit, 'category'))
      // dtPayCell.addEventListener('dblclick', (e) => editCell(e, debit, 'dt_payment'))

      //DELETO
      const td = document.createElement("td");
      const deleteBtn = TrashIcon();
      // deleteBtn.classList.add(`hidden`); e botar um hover pra aparecer o
      deleteBtn.addEventListener("click", () => handleDelete(debit.id));
      td.append(deleteBtn); //Talvez botar um botao depois pra nao ser exatamente no icone

      row.append(valueCell, catNameCell, dtPayCell, td);
      tbody.appendChild(row);
    });
  };

  const editCell = (e: Event, debit: Debit, property: "value") => {
    const selectedCell = e.target as HTMLElement;
    const ogText = selectedCell.innerText;
    const input = document.createElement("input");
    input.type = "text";
    input.value = ogText;

    const handleEvents = async (e: Event) => {
      if ((e as KeyboardEvent).key === "Enter" || e.type === "blur") {
        selectedCell.textContent = input.value;
        if (debit[property] != Number(input.value)) {
          debit[property] = Number(input.value);
          await debits.put(debit.id, {
            category_id: Number(debit.category.id),
            value: debit.value,
            owner_id: debit.owner_id,
          });
        }
      }
    };

    input.addEventListener("keypress", handleEvents);
    input.addEventListener("blur", handleEvents);
    selectedCell.textContent = "";
    selectedCell.appendChild(input);
    input.focus();
  };

  renderTableBody(allDebits);

  table.appendChild(thead);
  table.appendChild(tbody);
  container.appendChild(table);

  const updateDebits = async () => {
    console.log(`hello`);
    allDebits = await debits.get();
    renderTableBody(allDebits);
  };

  document.addEventListener("debitAdded", async () => {
    await updateDebits();
  });

  document.addEventListener("filterSelected", async (e) => {
    const event = e as CustomEvent;
    allDebits = await debits.get(event.detail);
    renderTableBody(allDebits);
  });

  return container;
};

export default DebitList;
