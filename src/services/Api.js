import { setStore, getToken } from './auth';

const BASE = 'https://back-love-down-luan-vilela-luans-projects-340b3d71.vercel.app/';
const BASE_API = BASE.slice(0, -1);

console.log(BASE_API);

export default {
  checkToken: async token => {
    try {
      const req = await fetch(`${BASE_API}/auth/refresh`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });
      const json = await req.json();
      return json;
    } catch (error) {
      console.error('Erro ao verificar o token:', error);
      throw error;
    }
  },
  signIn: async (email, password) => {
    try {
      console.log(`${BASE_API}/auth/login`);
      const req = await fetch(`${BASE_API}/auth/login`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const json = await req.json();

      if (json.token) setStore(json.token);

      return json;
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      throw error;
    }
  },
  signUp: async (name, email, password) => {
    try {
      const req = await fetch(`${BASE_API}/user`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
      const json = await req.json();
      return json;
    } catch (error) {
      console.error('Erro ao registrar:', error);
      throw error;
    }
  },
  post: async (url, data) => {
    try {
      const req = await fetch(`${BASE_API}${url}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const json = await req.json();
      return json;
    } catch (error) {
      console.error('Erro ao fazer a solicitação POST:', error);
      throw error;
    }
  },
  get: async url => {
    try {
      const token = getToken();

      const req = await fetch(`${BASE_API}${url}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      const json = await req.json();
      return json;
    } catch (error) {
      console.error('Erro ao fazer a solicitação GET:', error);
      throw error;
    }
  },
};
