import BaseModel from './Base'

export default class User extends BaseModel {

  constructor(params) {
    super(params)
    //Definim endpoint de la API
    this.model = 'User'
    this.endpoint = 'users'

  }

  toJSON() {
    return {
      name: this.name,
      // surname: this.surname,
      // user: this.user,
      // email: this.email,
      // password: this.password,
    }
  }
}
