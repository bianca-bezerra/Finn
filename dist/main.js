import App from "./App.js";
import { middleware } from "./lib/middleware.js";
// import './router.js';
async function main() {
    const { redirect } = middleware();
    if (!redirect) {
        const body = document.body;
        body.append(await App());
    }
}
main();
