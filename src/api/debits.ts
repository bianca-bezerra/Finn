import { Debit, DebitRequest } from "../types.js";
import config from "../env.js";
import { addQuery } from "../utils/query.js";
import {fetchWithToken} from "./config.js";

type QueryParams = {
  category_id?: string;
  dt_payment_from?: string;
  dt_payment_to?: string;
};

async function get(q?: QueryParams): Promise<Debit[]> {
  const account = sessionStorage.getItem("account");
  if (!account) throw Error("Usuário não encontrado no sessionStorage!");
  let query = `?owner_id=${JSON.parse(account).id}`;
  query = addQuery("category_id", q?.category_id, query);
  query = addQuery("dt_payment_from", q?.dt_payment_from, query);
  query = addQuery("dt_payment_to", q?.dt_payment_to, query);

  let url = `${config.API_URL}debits/${query}`;

  console.log(url);
  const res = await fetchWithToken(url);
  const data = (await res.json()).debits;
  console.log("Os débitos são: ", JSON.stringify(data));
  return data;
}

async function post(data: DebitRequest): Promise<Debit> {
  const res = await fetchWithToken(`${config.API_URL}debits/`, {
    method: "POST",
    body: JSON.stringify(data),
  });
  return await res.json();
}

async function put(id: number, data: DebitRequest): Promise<Debit> {
  const res = await fetchWithToken(`${config.API_URL}debits/${id}/`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
  return await res.json();
}

async function remove(id: number) {
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
