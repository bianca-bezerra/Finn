
const Container = () => {
    // DIV
    const div = document.createElement('div');
    div.classList.add('h-1/4', 'bg-gray-400', 'p-6', 'rounded', 'shadow-md', 'space-y-4', 'w-1/2', 'justify-center','flex');

    return div;
};

const Header = (headers: string[]) => {

    // CABEÇALHO
    const thead = document.createElement('thead');

    const headerRow = document.createElement('tr');
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.classList.add('py-2', 'px-4', 'rounded','font-onest');
        th.innerText = headerText;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    return thead;
};

const Root = () => {
    const table = document.createElement('table');
    table.classList.add('bg-white', 'rounded-lg', 'shadow-md');
    return table;
}

const Cell = (value: string) => {
    const td = document.createElement('td');
    td.classList.add('py-2', 'px-4');
    td.innerText = value;

    return td;
}

const Table = {
    Container, Header, Root, Cell
};

export default Table;