import { Category, CategoryRequest } from "./../types";
import config from "./../env.js"

async function get(): Promise<Category[]> {
    const res = await fetch(`${config.API_URL}categories/`);
    return (await res.json()).categories;
}

async function post(data: CategoryRequest): Promise<Category> {
    const res = await fetch(`${config.API_URL}categories/`, {
        headers: {
            'Content-Type': 'application/json'
        }, method: "POST", body: JSON.stringify(data)
    });
    return await res.json();
}
export const categories = {
    get, post
}
