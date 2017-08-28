import axios from 'axios'

export default class ApiService {

  constructor() {
    this.baseUrl = 'http://127.0.0.1:8000'
  }

  save(endpoint, params) {
    //Construim url per accedir al controller adequat
    const url = `${this.baseUrl}/api/${endpoint}`

    console.log(url, params)
    //Fem una request POST
    axios.post(url, params)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  }

}
