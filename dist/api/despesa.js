import { api } from "./config";
async function get() {
    const res = await api.get("debit");
    return res.data;
}
async function post(data) {
    const res = await api.post("debit", data);
    return res.data;
}
export const despesas = {
    get, post
};
