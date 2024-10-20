import config from "../env.js";
import { Category, CategoryRequest } from "../types";
import {fetchWithToken} from "./config.js";

async function get(): Promise<Category[]> {
  const res = await fetchWithToken(`${config.API_URL}categories/`);
  return (await res.json()).categories;
}

async function post(data: CategoryRequest): Promise<Category> {
  const res = await fetchWithToken(`${config.API_URL}categories/`, {
    method: "POST",
    body: JSON.stringify(data),
  });
  return await res.json();
}

async function put(id: number, data: CategoryRequest): Promise<Category> {
  const res = await fetchWithToken(`${config.API_URL}categories/${id}/`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
  return await res.json();
}

async function remove(id: number) {
  const res = await fetchWithToken(`${config.API_URL}categories/${id}`, {
    method: "DELETE",
  });
  return res.ok;
}

export const categories = {
  get,
  post,
  put,
  remove,
};
