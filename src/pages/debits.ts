// import './router.js';
import DebitForm from './../components/DebitForm.js'
import DebitList from './../components/DebitList.js'
import Filter from './../components/Filter.js'

async function main() {
    const container = document.getElementById('container');
    container.append(await DebitList());
    container.append(await DebitForm());
    container?.append(await Filter());
}

main();