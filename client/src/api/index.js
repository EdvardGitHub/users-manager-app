import axios from 'axios';

const url = 'http://localhost:5000/users';

export const fetchUsers = () => axios.get(url);
export const createUsers = (newUser) => axios.post(url, newUser);
export const updateUsers = (id, updateUsers) =>
  axios.patch(`${url}/${id}`, updateUsers);
export const deleteUsers = (id) => axios.delete(`${url}/${id}`);
