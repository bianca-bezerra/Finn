// import './router.js';
import LoginForm from './components/LoginForm.js';
async function main() {
    const container = document.getElementById('container');
    container.append(await LoginForm());
}
main();
