// import './router.js';
import CategoryForm from "./../components/CategoryForm.js";
import CategoryList from "./../components/CategoriesList.js";
import Menu from "./../components/Menu.js";
import { middleware } from "../lib/middleware.js";
import { hFull } from "./../utils/styles.js";

async function main() {
  const { redirect } = middleware();
  if (!redirect) {
    const menubar = Menu();

    const container = document.getElementById("container");
    container?.classList.add("flex", "flex-col", "gap-y-10", "p-10");
    const title = document;
    container?.append(menubar);
    container?.append(await CategoryForm());
    container?.append(await CategoryList());

    hFull();
    if (container) container.style.height = "100%";
  } else {
    //Todo: Carregar um componente de loading em todas as páginas avisando do redirect
  }
}

main();
