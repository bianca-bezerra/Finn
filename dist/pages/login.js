// import './router.js';
import LoginForm from "./../components/LoginForm.js";
import { middleware } from "../lib/middleware.js";
import { hFull } from "../utils/styles.js";
async function main() {
    const { redirect } = middleware();
    if (!redirect) {
        const container = document.getElementById("container");
        container?.append(await LoginForm());
        hFull();
        if (container)
            container.style.height = "100%";
        const bg = document.getElementById("bg");
        if (bg)
            bg.style.objectFit = '';
    }
}
main();
