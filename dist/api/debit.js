import config from "./../env.js";
async function get() {
    const res = await fetch(`${config.API_URL}debits/`);
    return (await res.json()).debits;
}
async function post(data) {
    const res = await fetch(`${config.API_URL}debits/`, { headers: {
            'Content-Type': 'application/json'
        }, method: "POST", body: JSON.stringify(data) });
    return await res.json();
}
export const debits = {
    get, post
};
