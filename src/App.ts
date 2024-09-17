import CategoryList from "./components/CategoriesList.js";
import DebitList from "./components/DebitList.js";
import Menu from "./components/Menu.js";
import { hFull } from "./utils/styles.js";

const App = async () => {
  const container = document.createElement("div");
  container.classList.add();

  const menu = Menu();

  const categorySection = document.createElement("section");
  categorySection.classList.add("flex");

  const debitSection = document.createElement("section");
  debitSection.classList.add("flex");

  const userSection = document.createElement("section");
  userSection.classList.add("flex");

  categorySection.append(await CategoryList());

  debitSection.append(await DebitList());

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
