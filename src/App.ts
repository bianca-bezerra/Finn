import CategoryList from './components/CategoriesList.js';
import CategoryForm from './components/CategoryForm.js';
import DebitForm from './components/DebitForm.js';
import DebitList from './components/DebitList.js';
import LoginForm from './components/LoginForm.js';
import SignForm from './components/SignForm.js';

const App = async () => {
  const container = document.createElement('div');
  container.classList.add()

  const categorySection = document.createElement("section");
  categorySection.classList.add("flex");

  const debitSection = document.createElement("section");
  debitSection.classList.add("flex");

  const userSection = document.createElement("section")
  userSection.classList.add("flex");

  categorySection.append(await CategoryForm())
  categorySection.append(await CategoryList())

  debitSection.append(await DebitForm())
  debitSection.append(await DebitList())

  userSection.append(SignForm());
  userSection.append(LoginForm());

  // container.classList.add('App', 'bg-pink-500');

  // debitSection.append(await DebitForm());


  container.append(categorySection)
  container.append(debitSection)
  container.append(userSection);
  return container;
};

export default App;