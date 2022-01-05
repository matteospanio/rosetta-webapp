import axios from "axios";

// const pathAPI = process.env.REACT_APP_BACKEND_HOST;

export const getListsList = async () => {
  try {
    const res = await axios.get(`/lists`);
    return res.data.lists;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const deleteList = (list_id) => {
  return axios
    .delete(`/lists/${list_id}`)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export const createList = (data) => {
  return axios
    .post(`/lists/`, data)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export const updateList = (list_id, data) => {
  return axios
    .put(`/lists/${list_id}`, data)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
