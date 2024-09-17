// import './router.js';
import SignForm from './../components/SignForm.js'

async function main() {
    const container = document.getElementById('container');
    container.append(await SignForm());
}

main();