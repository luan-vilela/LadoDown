// import { add } from "react-native-reanimated";
import { setStore, getToken } from "./auth";

const BASE_API = "http://192.168.100.157:3001/";

export default {
  checkToken: async (token) => {
    const req = await fetch(`${BASE_API}/auth/refresh`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });
    const json = await req.json();
    return json;
  },
  signIn: async (email, password) => {
    // console.log(email, password)

    console.log(BASE_API)
    const req = await fetch(`${BASE_API}auth/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const json = await req.json();

    if (json.token) setStore(json.token);

    return json;
  },
  signUp: async (name, email, password) => {
    const req = await fetch(`${BASE_API}/user`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await req.json();
    return json;
  },
  post: async (url, data) => {
    console.log(`${BASE_API}${url}`, data)
    const req = await fetch(`${BASE_API}${url}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const json = await req.json();
    return json;
  },
  get: async (url) => {
    const token = getToken();

    const req = await fetch(`${BASE_API}${url}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const json = await req.json();
    return json;
  },
};
