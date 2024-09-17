import { Debit, DebitRequest } from "./../types";
import config from "./../env.js"

type QueryParams = {
    category_id: number
}
async function get(q?: QueryParams): Promise<Debit[]> {
    const res = await fetch(`${config.API_URL}debits/`,  {headers: {
        'Content-Type': 'application/json'
    }});
    const data = (await res.json()).debits
    console.log('Os débitos são: ', JSON.stringify(data));
    return data;
}

async function post(data: DebitRequest): Promise<Debit> {
    const res = await fetch(`${config.API_URL}debits/`, {
        headers: {
            'Content-Type': 'application/json'
        }, method: "POST", body: JSON.stringify(data)
    });
    return await res.json();
}


async function put(id: number, data: DebitRequest): Promise<Debit> {
    const res = await fetch(`${config.API_URL}debits/${id}/`, {
        headers: {
            'Content-Type': 'application/json'
        }, method: "PUT", body: JSON.stringify(data)
    });
    return await res.json();
}

async function remove(id: number) {

    const res = await fetch(`${config.API_URL}debits/${id}`, { method: "DELETE" });
    return res.ok;
}

export const debits = {
    get, post, put, remove
}