import { api } from "./config";
async function get() {
    const res = await api.get("categories/");
    return res.data.categories;
}
export const categories = {
    get
};
