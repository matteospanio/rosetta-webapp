import axios from "axios";

const pathAPI = import.meta.env.VITE_BACKEND_HOST;

export const getListsList = () => {
  return axios
    .get(`${pathAPI}/lists/`)
    .then((res) => res.data.lists)
    .catch((err) => {
      console.log(err);
      return [];
    });
};

export const deleteList = (list_id: number) => {
  return axios
    .delete(`${pathAPI}/lists/${list_id}`)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export const createList = (data: object) => {
  return axios
    .post(`${pathAPI}/lists/`, data)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export const editList = (data: object, list_id: number) => {
  return axios
    .put(`${pathAPI}/lists/${list_id}`, data)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
