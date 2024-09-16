import { debits } from "../api/debit.js";
import Table from "./ui/table.js";
const DebitList = async () => {
    const container = Table.Container();
    const table = Table.Root();
    const thead = Table.Header(['Valor', 'Categoria', 'Data']);
    const tbody = document.createElement("tbody");
    const allDebits = await debits.get();
    if (allDebits.length) {
        allDebits.forEach(debit => {
            const row = document.createElement('tr');
            row.classList.add('font-onest');
            row.appendChild(Table.Cell(String(`R$ ${debit.value}`)));
            row.appendChild(Table.Cell(String(debit.category.name)));
            row.appendChild(Table.Cell(new Date(debit.dt_payment).toLocaleString("pt-BR", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
            })));
            tbody.appendChild(row);
        });
    }
    table.appendChild(thead);
    table.appendChild(tbody);
    container.appendChild(table);
    return container;
};
export default DebitList;
