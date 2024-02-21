import axios from "axios";

const BASE_API = "http://192.168.100.157:3001";

const api = axios.create({
  baseURL: BASE_API,
});

function get(url) {
  return api.get(url);
}

function post(url, formulario) {
  return api.post(url, formulario);
}

async function GetID(path, id) {
  return await axios.get(baseURL + `${path}/${id}`);
}

function salvarRegistro(formulario) {
  return axios.post(baseURL + "/Conteudo", formulario);
}

function editarRegistro(id, formulario) {
  return axios.put(baseURL + `/Conteudo/${id}`, formulario);
}

function deletarRegistro(id) {
  return axios.delete(baseURL + `/Conteudo/${id}`);
}

export default {
  get,
  post,
};
