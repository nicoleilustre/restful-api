const axios = require('axios').default;

export function getPersonInfo() {
return axios.get(`https://randomuser.me/api/`)
.then(response => response.data.results[0])
}