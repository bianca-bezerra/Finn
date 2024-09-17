import Link from "./ui/link.js";

const Menu = () => {
    const menu = document.createElement('div');
    menu.classList.add('h-14', 'w-full', 'rounded-lg', 'flex', 'bg-black', 'flex', 'items-center', 'p-5', 'justify-between')

    const title = document.createElement('p')
    title.innerText = 'Finn'
    title.classList.add('text-white', 'font-bold', 'text-center','font-pixel'   )

    const divLinks = document.createElement('div')
    divLinks.classList.add('flex', 'flex-row', 'w-1/4','justify-around','font-onest','font-bold')

    const linkDebit = Link("/debits.html", "Despesas")
    const linkCategory = Link("/categories.html", "Categorias")

    divLinks.append(linkCategory, linkDebit)

    menu.append(title, divLinks)
    return menu;
}
export default Menu;