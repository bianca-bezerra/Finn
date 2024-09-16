import App from './App.js';
import CategoryList from './components/CategoriesList.js';
import CategoryForm from './components/CategoryForm.js';
import DebitForm from './components/DebitForm.js';
import DebitList from './components/DebitList.js';

interface RouteConfig {
  linkLabel: string;
  component: () => Promise<HTMLElement> | HTMLElement;
}

type Routes = {
  [path: string]: RouteConfig;
};

const routes: Routes = {
  "/": {
    linkLabel: "Dashboard",
    component: App
  },
  "/categoria": {
    linkLabel: "Categorias",
    component: async () => {
      const container = document.createElement('div');
      container.classList.add('categories-section');
      container.append(await CategoryList());
      container.append(await CategoryForm());
      return container;
    }
  },
  "/despesa": {
    linkLabel: "Despesas",
    component: async () => {
      const container = document.createElement('div');
      container.classList.add('debits-section');
      container.append(await DebitList());
      container.append(await DebitForm());
      return container;
    }
  }
};

const app = document.querySelector("#app") as HTMLElement;
const nav = document.querySelector("#nav") as HTMLElement;

const renderContent = async (route: string) => {
  const contentContainer = document.createElement('div');
  const routeConfig = routes[route];
  
  if (routeConfig && routeConfig.component) {
    const component = await routeConfig.component();
    contentContainer.appendChild(component);
    app.innerHTML = ''; // Limpa o conteúdo atual
    app.appendChild(contentContainer);
  } else {
    app.innerHTML = '404 - Not Found';
  }
};

const navigate = async (e: Event) => {
  e.preventDefault();
  const target = e.target as HTMLAnchorElement;
  const route = new URL(target.href).pathname;
  window.history.pushState({}, "", route);
  await renderContent(route);
};

const registerNavLinks = () => {
  nav.addEventListener("click", async (e: Event) => {
    if (e.target instanceof HTMLAnchorElement) {
      e.preventDefault();
      const route = new URL(e.target.href).pathname;
      window.history.pushState({}, "", route);
      await renderContent(route);
    }
  });
};

const renderNavlinks = () => {
  const navFragment = document.createDocumentFragment();
  Object.keys(routes).forEach((route) => {
    const { linkLabel } = routes[route];

    const linkElement = document.createElement("a");
    linkElement.href = route;
    linkElement.textContent = linkLabel;
    linkElement.className = "nav-link";
    navFragment.appendChild(linkElement);
  });

  nav.append(navFragment);
};

const registerBrowserBackAndForth = () => {
  window.onpopstate = async () => {
    const route = window.location.pathname;
    await renderContent(route);
  };
};

const renderInitialPage = async () => {
  const route = window.location.pathname || "/";
  await renderContent(route);
};

(function bootup() {
  renderNavlinks();
  registerNavLinks();
  registerBrowserBackAndForth();
  renderInitialPage();
})();
