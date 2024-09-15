import { Category } from "@/types";
import { api } from "./config";

async function get(): Promise<Category[]> {
    const res = await api.get("categories/");
    return res.data.categories;
}

export const categories = {
    get
}