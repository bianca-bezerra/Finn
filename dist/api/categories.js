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
async function put(id, data) {
    const res = await fetch(`${config.API_URL}categories/${id}/`, {
        headers: {
            'Content-Type': 'application/json'
        }, method: "PUT", body: JSON.stringify(data)
    });
    return await res.json();
}
async function remove(id) {
    const res = await fetch(`${config.API_URL}categories/${id}`, { method: "DELETE" });
    return res.ok;
}
export const categories = {
    get, post, put, remove
};
