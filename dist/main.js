import App from './App.js';
// import './router.js';
async function main() {
    const body = document.body;
    body.append(await App());
}
main();
