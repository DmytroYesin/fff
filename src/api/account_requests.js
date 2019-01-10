import axios from 'axios';

const baseUrl = 'http://localhost:5000/';

export const registerUser = ({ username, email, password }) => {
  return axios({
    method: 'post',
    url: baseUrl + 'account/register',
    data: { username, email, password }
  }).then(response => response.data).catch(error => error);
};

export const loginUser = ({ email, password }) => {
  return axios({
    method: 'post',
    url: baseUrl + 'account/login',
    data: { email, password }
  }).then(response => response.data).catch(error => error);
};

export const logoutUser = () => {
  return axios({
    method: 'get',
    url: baseUrl + 'account/logout',
  }).then(response => response.data).catch(error => error);
};