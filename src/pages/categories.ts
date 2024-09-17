// import './router.js';
import CategoryForm from "./../components/CategoryForm.js";
import CategoryList from "./../components/CategoriesList.js";
import Menu from "./../components/Menu.js";


async function main() {
  const menubar = Menu()
  const container = document.getElementById("container");
  container?.classList.add('flex', 'flex-col', 'gap-y-10', 'p-10')
  const title = document
  container?.append(menubar)
  container?.append(await CategoryForm());
  container?.append(await CategoryList());
}

main();
