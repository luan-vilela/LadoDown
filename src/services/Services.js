import axios from "axios";

const BASE_API = process.env.EXPO_PUBLIC_API_URL;

const api = axios.create({
  baseURL: BASE_API,
});

function get(url) {
  return api.get(url);
}

function getAllComment(url,id) {
  console.log(`${url}/${id}`)
  return api.get(`${url}/${id}`);
}

function salvarRegistro(url, formulario) {
  console.log(BASE_API+url )
  console.log(formulario)

  return api.post(url, formulario);
}

function deletarRegistro(url,id) {
  console.log(url)
  console.log(`${url}/${id}`)

  return api.delete(`${url}/${id}`);
}

export default {
  get,
  salvarRegistro,
  deletarRegistro,
  getAllComment
};
