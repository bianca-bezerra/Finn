import { logout } from "./../lib/auth.js";
import Link from "./ui/link.js";
const Menu = () => {
    const menu = document.createElement("div");
    menu.classList.add("h-12", "w-full", "rounded-xl", "flex", "bg-black", "flex", "items-center", "p-5", "justify-between", "shadow-md");
    const title = document.createElement("p");
    title.innerText = "Finn";
    title.classList.add("text-white", "font-bold", "text-center", "font-pixel");
    const divLinks = document.createElement("div");
    divLinks.classList.add("flex", "flex-row", "w-1/4", "justify-around", "font-onest", "font-bold");
  
    const linkHome = Link("/","Finn")
    linkHome.classList.add('font-onest','font-bold','text-white')
    const linkDebit = Link("/debits.html", "Despesas");
    const linkCategory = Link("/categories.html", "Categorias");
    const logoutBtn = document.createElement("button");
    logoutBtn.innerText = "Logout";
    logoutBtn.classList.add("text-white");
    logoutBtn.addEventListener("click", logout);
    divLinks.append(linkCategory, linkDebit, logoutBtn);
    menu.append(linkHome, divLinks);
    return menu;
};
export default Menu;
