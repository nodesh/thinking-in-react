import axios from 'axios';

export function getProducts() {
  return axios.get('/data/index.json');
}
