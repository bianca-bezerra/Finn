import { Category } from "@/types.js";
import { categories } from "../api/categories.js";
import TrashIcon from "./icons/trash.js";
import Table from "./ui/table.js";

async function handleDelete(id: number) {
    const tr = document.getElementById(`category-${id}`)
    tr?.classList.add('text-gray-500', 'line-through');
    const ok = await categories.remove(id);
    tr?.remove();
}
const CategoryList = async () => {
    const container = Table.Container();
    const table = Table.Root();
    const thead = Table.Header(['Categoria', 'Descrição', '   ']);
    const tbody = document.createElement("tbody");

    let allCategories = await categories.get()

    const renderTableBody = (data: Category[]) => {
        tbody.innerHTML = ""
        data.forEach(category => {
            const row = document.createElement('tr');
            row.classList.add('font-onest')
            row.id = `category-${category.id}`;
            const nameCell = Table.Cell(category.name)
            const descCell = Table.Cell(category.description ?? "em breve...")

            nameCell.addEventListener('dblclick', (e) => editCell(e, category, 'name'))
            descCell.addEventListener('dblclick', (e) => editCell(e, category, 'description'))

            const td = document.createElement("td");
            const deleteBtn = TrashIcon();
            deleteBtn.addEventListener('click', () => handleDelete(category.id));
            td.append(deleteBtn);//Talvez botar um botao depois pra nao ser exatamente no icone

            row.append(nameCell, descCell, td)
            tbody.appendChild(row);
        })
    }


    const editCell = (e: Event, cat: Category, property: 'name' | 'description') => {
        const selectedCell = e.target as HTMLElement
        const ogText = selectedCell.innerText
        const input = document.createElement('input')
        input.type = 'text'
        input.value = ogText

        const handleEvents = async (e: Event) => {
            if ((e as KeyboardEvent).key === 'Enter' || e.type === 'blur') {
                selectedCell.textContent = input.value;
                if (cat[property] != input.value) {
                    cat[property] = input.value;
                    await categories.put(cat.id, cat);
                }
            }
        };

        input.addEventListener('keypress', handleEvents)
        input.addEventListener('blur', handleEvents)
        selectedCell.textContent = ''
        selectedCell.appendChild(input)
        input.focus()
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