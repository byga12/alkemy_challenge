import axios from 'axios';


const API_KEY = 103854575424896;
const BASE_URL = `https://superheroapi.com/api.php/${API_KEY}`;

export const searchByKeyword = async (keyword) => {
  return axios({
    method: 'get', 
    baseURL: BASE_URL,
    url: `/search/${keyword}`,
  })
}


export const searchById = async (id) => {
  return axios({
    method: 'get', 
    baseURL: BASE_URL,
    url: `/${id}`,
  })
}