import config from "../env.js";

function isSigned() {
  return sessionStorage.getItem("account") !== null;
}

export function middleware() {
  console.log("Tentei validar!");
  const signed = isSigned();
  console.log("ta logado? ", isSigned());
  console.log(window.location.pathname);
  const isOnSignRoutes =
    window.location.pathname === "/login.html" ||
    window.location.pathname === "/sign.html";
  console.log("ta nas rotas de sign? ", isOnSignRoutes);
  let redirect = false;
  let isProduction = config.NODE_ENV === "production";
  const redirectRoot = isProduction ? "/Finn" : "";

  if (!signed && !isOnSignRoutes) {
    console.log("entrei no primeiro if");
    window.location.href = redirectRoot + "./login.html";
    redirect = true;
  } else if (signed && isOnSignRoutes) {
    console.log("entrei no elsif");
    window.location.href = redirectRoot + "./index.html";
    redirect = true;
  }
  return {
    redirect,
  };
}
