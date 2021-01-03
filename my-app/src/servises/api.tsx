import axios from 'axios';

axios.defaults.baseURL = 'https://food-shop-auth-api.herokuapp.com/';

const getAllItems = () =>
  axios.get('/tableItems').then(response => response.data);

const deleteItem = id =>
  axios.delete(`/tableItems/${id}`).then(response => response);

const changeItem = (id, item) =>
  axios.put(`/tableItems/${id}`, item).then(response => response);


export { getAllItems, deleteItem, changeItem };