import { categories } from "../api/categories.js";
import Table from "./ui/table.js"


const CategoryList = async () => {
    const container = Table.Container();
    const table = Table.Root();
    const thead = Table.Header(['Categoria', 'Descrição']);
    const tbody = document.createElement("tbody");

    const allCategories = await categories.get()

    if (allCategories.length) {
        allCategories.forEach(category => {
            const row = document.createElement('tr');
            row.classList.add('font-onest')
            row.appendChild(Table.Cell(category.name));
            row.appendChild(Table.Cell(category.description ?? "em breve..."));
            tbody.appendChild(row);
        })
    }

    table.appendChild(thead);
    table.appendChild(tbody);
    container.appendChild(table);
    return container;
}

export default CategoryList