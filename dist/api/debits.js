import config from "../env.js";
import { addQuery } from "./../utils/query.js";
async function get(q) {
    const account = sessionStorage.getItem("account");
    if (!account)
        throw Error("Usuário não encontrado no sessionStorage!");
    let query = `?owner_id=${JSON.parse(account).id}`;
    query = addQuery("category_id", q?.category_id, query);
    query = addQuery("dt_payment_from", q?.dt_payment_from, query);
    query = addQuery("dt_payment_to", q?.dt_payment_to, query);
    let url = `${config.API_URL}debits/${query}`;
    console.log(url);
    const res = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = (await res.json()).debits;
    console.log("Os débitos são: ", JSON.stringify(data));
    return data;
}
async function post(data) {
    const res = await fetch(`${config.API_URL}debits/`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
    });
    return await res.json();
}
async function put(id, data) {
    const res = await fetch(`${config.API_URL}debits/${id}/`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify(data),
    });
    return await res.json();
}
async function remove(id) {
    const res = await fetch(`${config.API_URL}debits/${id}`, {
        method: "DELETE",
    });
    return res.ok;
}
export const debits = {
    get,
    post,
    put,
    remove,
};
