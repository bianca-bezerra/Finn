import config from "./../env.js";
async function get(q) {
    const res = await fetch(`${config.API_URL}debits/`, { headers: {
            'Content-Type': 'application/json'
        } });
    const data = (await res.json()).debits;
    console.log('Os débitos são: ', JSON.stringify(data));
    return data;
}
async function post(data) {
    const res = await fetch(`${config.API_URL}debits/`, {
        headers: {
            'Content-Type': 'application/json'
        }, method: "POST", body: JSON.stringify(data)
    });
    return await res.json();
}
async function put(id, data) {
    const res = await fetch(`${config.API_URL}debits/${id}/`, {
        headers: {
            'Content-Type': 'application/json'
        }, method: "PUT", body: JSON.stringify(data)
    });
    return await res.json();
}
async function remove(id) {
    const res = await fetch(`${config.API_URL}debits/${id}`, { method: "DELETE" });
    return res.ok;
}
export const debits = {
    get, post, put, remove
};
