export function logout() {
  sessionStorage.removeItem("account");
  window.location.reload();
}
