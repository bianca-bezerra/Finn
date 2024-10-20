export function logout() {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("account");
    window.location.reload();
}
