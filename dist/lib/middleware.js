function isSigned() {
    return sessionStorage.getItem("account") !== null;
}
export function middleware() {
    console.log("Tentei validar!");
    const signed = isSigned();
    console.log("ta logado? ", isSigned());
    console.log(window.location.pathname);
    const isOnSignRoutes = window.location.pathname.includes("/login.html") ||
        window.location.pathname.includes("/sign.html");
    console.log("ta nas rotas de sign? ", isOnSignRoutes);
    let redirect = false;
    if (!signed && !isOnSignRoutes) {
        console.log("entrei no primeiro if");
        window.location.href = "./login.html";
        redirect = true;
    }
    else if (signed && isOnSignRoutes) {
        console.log("entrei no elsif");
        window.location.href = "/index.html";
        redirect = true;
    }
    return {
        redirect,
    };
}
