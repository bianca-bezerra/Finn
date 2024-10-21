import { strExists } from "../utils/strings.js";
import { auth } from "../api/auth.js";
import Button from "./ui/button.js";
import Field from "./ui/field.js";
import Form from "./ui/form.js";
import Link from "./ui/link.js";

async function handleSubmit() {
  console.log("click");
  const usernameInput = document.getElementById(
    "usernameInput"
  ) as HTMLInputElement;
  const passwordInput = document.getElementById(
    "passwordInput"
  ) as HTMLInputElement;

  if (strExists(usernameInput.value) && strExists(passwordInput.value)) {
    const isAuthenticated = await auth.login({
      username: usernameInput.value,
      password: passwordInput.value,
    });
    if (!isAuthenticated) window.location.href = "./sign.html";
    else window.location.href = "./index.html";
  } else console.error("Preencha o formulário corretamente!");
}

const LoginForm = () => {
  const root = document.createElement("div");
  root.id = "loginForm"
  const div = document.createElement("div");
  root.classList.add(
    "w-1/2",
    "max-md:flex",
    "max-md:w-full",
    "h-full",
    "bg-yellow-100",
    "flex",
    "justify-center",
    "items-center",
    "hidden"
  );
  div.classList.add(
    "p-6",
    "w-fit",
    "rounded",
    "shadow-md",
    "bg-white",
    "space-y-4",
    "justify-center",
    "border-2",
    "border-gray-400",
  );

  const form = Form("Bem vindo de volta!");

  const usernameField = Field(
    "Username",
    "Digite seu username",
    "usernameInput"
  );
  const passwordField = Field("Senha", "Digite sua senha", "passwordInput");

  const submitBtn = Button("Enviar");
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("outro click");
    handleSubmit();
  });

  const footer = document.createElement("footer");
  footer.innerHTML = "Novo por aqui? ";
  footer.appendChild(Link("./sign.html", "Criar conta"));

  form.append(usernameField, passwordField, submitBtn, footer);
  div.appendChild(form);
  root.appendChild(div);

  return root;
};
export default LoginForm;
