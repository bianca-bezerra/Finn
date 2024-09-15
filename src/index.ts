import App from './App';

async function main(){
    const body = document.body;
    body.append(await App());
}

main();