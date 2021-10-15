const axios = require('axios').default;

export function getPersonInfo() {
  return axios.get(`https://randomuser.me/api/`)
    .then(response => response.data.results[0])
}

export function getPersonInfoWithGender(gender) {
  return axios.get(`https://randomuser.me/api/?gender=` + gender)
    .then(response => response.data.results[0])
}