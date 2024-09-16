import { debits } from "../api/debit.js";
import Table from "./ui/table.js";
const DebitList = async () => {
    const container = Table.Container();
    const table = Table.Root();
    const thead = Table.Header(['Valor', 'Categoria', 'Data']);
    const tbody = document.createElement("tbody");
    let allDebits = await debits.get();
    const renderTableBody = (data) => {
        tbody.innerHTML = "";
        data.forEach(debit => {
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
    };
    renderTableBody(allDebits);
    table.appendChild(thead);
    table.appendChild(tbody);
    container.appendChild(table);
    const updateDebits = async () => {
        allDebits = await debits.get();
        renderTableBody(allDebits);
    };
    document.addEventListener('debitAdded', async () => {
        await updateDebits();
    });
    return container;
};
export default DebitList;
