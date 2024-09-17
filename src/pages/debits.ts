// import './router.js';
import Menu from "./../components/Menu.js";
import DebitForm from "./../components/DebitForm.js";
import DebitList from "./../components/DebitList.js";
import Filter from "./../components/Filter.js";
import { middleware } from "../lib/middleware.js";
import { hFull } from "../utils/styles.js";

async function main() {
  const { redirect } = middleware();
  if (!redirect) {
    const menubar = Menu();
    const container = document.getElementById("container");
    container?.classList.add("flex", "flex-col", "gap-y-10", "p-10");
    const div = document.createElement("div");
    div.classList.add("w-full", "gap-10", "flex", "items-start");
    container?.append(menubar);
    container?.append(await DebitForm(), div);
    div.style.gap = "20px";
    div.append(await Filter(), await DebitList());
  }
}

main();
