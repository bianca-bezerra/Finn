import config from "../env.js";
async function get() {
    const res = await fetch(`${config.API_URL}users/`);
    return (await res.json()).users;
}
async function sign(data) {
    console.log("hello hello baby");
    const res = await fetch(`${config.API_URL}auth/register`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
    });
    return await res.json();
}
async function authenticate({ username, password, }) {
    const res = await fetch(`${config.API_URL}auth/login`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ username, password }),
    });
    const body = await res.json();
    const logged = body.message === "👍";
    if (!logged)
        return false;
    const users = await get();
    console.log("entrei no login com ", username, " e ", password);
    const user = users.find((user) => user.username === username);
    if (user === undefined) {
        throw Error("404 - Não foram encontrados os dados do usuário logado!");
    }
    sessionStorage.setItem("account", JSON.stringify(user));
    return true;
}
export const users = {
    get,
    sign,
    authenticate,
};
