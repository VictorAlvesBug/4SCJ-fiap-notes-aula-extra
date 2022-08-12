import axios from "axios";

export const apiAuth = axios.create({
  baseURL: `https://fiap-notes-api-auth.herokuapp.com/`,
});
