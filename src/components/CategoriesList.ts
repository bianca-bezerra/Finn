import { Category } from "@/types.js";
import { categories } from "../api/categories.js";
import Table from "./ui/table.js"

const CategoryList = async () => {
    const container = Table.Container();
    const table = Table.Root();
    const thead = Table.Header(['Categoria', 'Descrição']);
    const tbody = document.createElement("tbody");

    let allCategories = await categories.get()

    const renderTableBody = (data: Category[]) => {
        tbody.innerHTML = ""
        data.forEach(category => {
            const row = document.createElement('tr');
            row.classList.add('font-onest')
            row.appendChild(Table.Cell(category.name));
            row.appendChild(Table.Cell(category.description ?? "em breve..."));
            tbody.appendChild(row);
        })
    }

    renderTableBody(allCategories)

    const updateCategories = async () => {
        allCategories = await categories.get()
        renderTableBody(allCategories)
    }

    document.addEventListener('categoryAdded', async () => {
        await updateCategories()
    })

    table.appendChild(thead);
    table.appendChild(tbody);
    container.appendChild(table);
    return container;
}

export default CategoryList