import {  User,UserRequest } from "./../types.js";
import config from "../env.js"

async function get(): Promise<User[]> {
    const res = await fetch(`${config.API_URL}users/`);
    return (await res.json()).users;
}

async function sign(data: UserRequest): Promise<void> {
    const res = await fetch(`${config.API_URL}users/`, {
        headers: {
            'Content-Type': 'application/json'
        }, method: "POST", body: JSON.stringify(data)
    });
    return await res.json();
}

async function login({}:{username: string, password: string}): Promise<boolean> {//OBS: A password na verdade eh o email...
    const users = await get();
    return(users.find((user)=>user.username === username && user.email && password))
}


export const users = {
    get, sign, login
}
