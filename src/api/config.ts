import config from "../env.js";
import { logout } from "../lib/auth.js";

export async function fetchWithToken(url: string, options: RequestInit = {}) {
    
    const token = sessionStorage.getItem("token");
    //@ts-ignore
    // const dencryptedToken : string = CryptoJS.AES.decrypt(token, config?.SECRET_KEY).toString();
  
    const headers = {
      ...options.headers,
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
  
    let response = await fetch(url, { ...options, headers });
  
    if (!response.ok) {
        logout();
    }

    return response;
  }