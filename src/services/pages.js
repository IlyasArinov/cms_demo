import axios from 'axios'
const baseUrl = '/api/pages'

const get = (id) => axios.get(`${baseUrl}/${id}`).then(response => response.data);
const update = (id, page) => axios.put(`${baseUrl}/${id}`, page).then(response => response.data);

export default { get, update };