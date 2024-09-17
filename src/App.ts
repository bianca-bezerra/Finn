import CategoryList from "./components/CategoriesList.js";
import DebitList from "./components/DebitList.js";
import Menu from "./components/Menu.js";
import { hFull } from "./utils/styles.js";

const App = async () => {
  const container = document.createElement("div");
  document.body.classList.add('p-10')
  const menu = Menu();

  const categorySection = document.createElement("section");
  categorySection.classList.add("flex","flex-col");


  const debitSection = document.createElement("section");
  debitSection.classList.add("flex","flex-col");


  const userSection = document.createElement("section");
  userSection.classList.add("flex");


  const titleCategory = document.createElement('h2')
  titleCategory.innerText = 'Lista de categorias'
  titleCategory.classList.add('font-onest','mb-2','font-bold')

  const titleDebit = document.createElement('h2')
  titleDebit.innerText = 'Lista de despesas'
  titleDebit.classList.add('font-onest','mb-2',"font-bold")



  categorySection.append(titleCategory,await CategoryList());
  debitSection.append(titleDebit,await DebitList());


  container.classList.add("flex", "justify-center", "gap-5");
  hFull();
  container.style.height = "100%";
  container.style.alignItems = "center";

  // debitSection.append(await DebitForm());
  document.body.append(menu);
  container.append(categorySection);
  container.append(debitSection);
  return container;
};

export default App;
