const List = async (headers, data) => {
    // DIV
    const div = document.createElement('div');
    div.classList.add('h-1/4', 'bg-gray-400', 'p-6', 'rounded', 'shadow-md', 'space-y-4', 'w-1/4', 'justify-center');
    // TABLE
    const table = document.createElement('table');
    table.classList.add('bg-white', 'rounded-lg', 'shadow-md');
    // CABEÇALHO
    const thead = document.createElement('thead');
    thead.classList.add('bg-gray-200', 'rounded');
    const headerRow = document.createElement('tr');
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.classList.add('py-2', 'px-4', 'rounded-lg', 'self-start');
        th.innerText = headerText;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    // CORPO DA TABELA
    const tbody = document.createElement('tbody');
    if (data.length) {
        data.forEach(item => {
            const row = document.createElement('tr');
            cells.forEach(cellText => {
                const td = document.createElement('td');
                td.classList.add('py-2', 'px-4');
                td.innerText = cellText ?? "em breve...";
                row.appendChild(td);
            });
            tbody.appendChild(row);
        });
    }
    table.appendChild(thead);
    table.appendChild(tbody);
    div.appendChild(table);
    return div;
};
export default List;
