import axios from "axios";

const url = import.meta.env.VITE_API_URL;
const userToken = localStorage.getItem("fakeStore");

const requestWithoutPermission = axios.create({
  baseURL: url,
});

const requestWithPermission = axios.create({
  baseURL: url,
  headers: {
    Authorization: `Bearer ${userToken}`,
  },
});

export { requestWithoutPermission, requestWithPermission };
