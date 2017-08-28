import {apiService} from './../services'
import _ from 'lodash'

export default class BaseModel {

  constructor(params) {
    this.model = 'Base'
    this.endpoint = undefined

    //Fem que crei una propietat del model per cada key de l'objecte params
    //Fem servir _ que es lodash i serveix per fer coses amb arrays i objectes
    const self = this
    _.forEach(_.keys(params), function(key) {
      self[key] = params[key]
    })

  }

  save() {
    console.log('saving ' + this.model)
    apiService.save(this.endpoint, this.toJSON())
  }

}
