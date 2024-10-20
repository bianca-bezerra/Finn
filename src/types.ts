export interface UserRequest {
  username: string;
  email: string;
  full_name: string;
  password: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  full_name: string;
  password: string;
  debits: Debit[];
}

export interface DebitRequest {
  value: number;
  category_id: number;
  owner_id: number;
}

export interface Debit {
  id: number;
  value: number;
  owner_id: number;
  category: Category;
  dt_payment: string;
}

export interface Category {
  id: number;
  name: string;
  description?: string;
}

export interface CategoryRequest {
  name: string;
  description?: string;
}
