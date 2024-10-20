// import './router.js';
import SignForm from "./../components/SignForm.js";
import { middleware } from "../lib/middleware.js";
import { hFull } from "../utils/styles.js";
async function main() {
    const { redirect } = middleware();
    if (!redirect) {
        const container = document.getElementById("container");
        container?.append(await SignForm());
        hFull();
        if (container)
            container.style.height = "100%";
    }
}
main();
