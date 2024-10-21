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
        const porco = document.getElementById("porco");
        porco?.addEventListener("click", (e) => {
            const form = document.getElementById("loginForm");
            if (form?.classList.contains("hidden")) {
                porco.classList.remove(...["animate-jump", "animate-once", "animate-normal"]);
                form?.classList.remove("animate-flip-down", "animate-reverse");
                form.classList.remove("hidden");
                form.classList.add("animate-flip-up");
            }
            else {
                form?.classList.remove("animate-flip-up");
                form?.classList.add("animate-reverse", "animate-flip-down");
                new Promise(r => setTimeout(r, 1100)).then(() => { form?.classList.add("hidden"); });
                porco.classList.add(...["animate-jump", "animate-once", "animate-normal"]);
            }
        });
    }
}
main();
