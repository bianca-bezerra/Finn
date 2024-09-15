import createForm from './form';
import CategoriesList from './list';

const App = async () => {
  const appDiv = document.createElement('div');
  appDiv.classList.add('App','bg-pink-500');
  appDiv.append(createForm());
  appDiv.append(await CategoriesList());
//   appDiv.append(createButton("Submita"))
  return appDiv;
};

export default App;