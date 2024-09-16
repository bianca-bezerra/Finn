import config from "./../env.js";
async function get() {
    const res = await fetch(`${config.API_URL}categories/`);
    return (await res.json()).categories;
}
async function post(data) {
    const res = await fetch(`${config.API_URL}categories/`, {
        headers: {
            'Content-Type': 'application/json'
        }, method: "POST", body: JSON.stringify(data)
    });
    return await res.json();
}
export const categories = {
    get, post
};
