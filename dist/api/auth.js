import config from "../env.js";
import { fetchWithToken } from "./config.js";
async function get() {
    const res = await fetch(`${config.API_URL}users/`);
    return (await res.json()).users;
}
async function sign(data) {
    console.log("hello hello baby");
    const res = await fetch(`${config.API_URL}auth/register`, {
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*'
        },
        method: "POST",
        body: JSON.stringify(data),
    });
    return await res.json();
}
async function login({ username, password, }) {
    const res = await fetch(`${config.API_URL}auth/login`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ username, password }),
    });
    const body = await res.json();
    const logged = !!body?.acess_token;
    console.log('Token antes: ', body.acess_token);
    if (!logged)
        return false;
    //@ts-ignore
    // const encryptedToken : string = CryptoJS.AES.encrypt(body.acess_token, config?.SECRET_KEY).toString();
    // console.log('Token depois: ',encryptedToken);
    sessionStorage.setItem("token", body.acess_token);
    const user = await (await fetchWithToken(`${config.API_URL}users/me`)).json();
    console.log('User: ', JSON.stringify(user));
    sessionStorage.setItem("account", JSON.stringify(user));
    return true;
}
export const auth = {
    get,
    sign,
    login,
};
