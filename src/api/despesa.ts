import { api } from "./config";
import { Debit, DebitRequest } from "@/types";

async function get(): Promise<Debit> {
    const res = await api.get("debit");
    return res.data;
}

async function post(data: DebitRequest): Promise<Debit> {
    const res = await api.post("debit", data);
    return res.data;
}

export const despesas = {
    get, post
}