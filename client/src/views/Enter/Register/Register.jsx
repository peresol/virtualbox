import React from 'react'
import {Link} from 'react-router-dom'

import {User} from './../../../models'

import './register.sass'

export default class Register extends React.Component {

  componentWillMount() {

    // const user = new User()
    // user.save()

    this.userData = {
      name: undefined,
      surname: undefined,
      user: undefined,
      email: undefined,
      password: undefined
    }

    //IMPOIRTANT!!!! AQUESTA LINEA ES PERQUE HANDLEINPUTCHANGE FUNCIONI, SINO, NO SABRA LLEGIR THIS CORRECTAMENT
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleInputChange(event) {
     this.userData[event.target.name] = event.target.value
  }

  handleSubmit() {

    //Creem el model i fem que es guardi a la base de dades.
    //La logica de com ha de fer el post a la API esta al model base, ho farem sempre aixi
    const user = new User(this.userData)
    user.save()
  }

  render() {
    return (

      <div className="vb-register">
        <p>Text explicatiu sobre les ventatges d’estar registrat: rebre notificacions, mailing, fer videoconferències,
          presentacions, contactar amb artistes…</p>
        <p>Text explicatiu sobre les ventatges d’estar registrat: rebre notificacions, mailing, fer videoconferències,
          presentacions, contactar amb artistes…</p>
        <br />
        <h2>DADES DE REGISTRE</h2>
        <br />

        <form id="login_form" onSubmit={this.handleSubmit}>
          Nom
          <br />
          <input type="text" name="name" size="40" autofocus="autofocus" onChange={this.handleInputChange}/>
          <br /><br />
          Cognoms
          <br />
          <input type="text" name="surname" size="40" onChange={this.handleInputChange}/>
          <br /><br />
          Nom d'usuari
          <br />
          <input type="text" name="user" size="40" onChange={this.handleInputChange}/>
          <br /><br />
          Correu electrònic
          <br />
          <input type="email" name="email" size="50" onChange={this.handleInputChange}/>
          <br /><br />
          Contrasenya
          <br />
          <input type="password" name="password" size="10" onChange={this.handleInputChange}/>
          <br /><br />
          Repetir contrasenya
          <br />
          <input type="password" name="password-2" size="10" />
          <br /><br />
          <input type="button" value="Enviar" onClick={this.handleSubmit}/>
        </form>

        <Link to="/confirm">
          <p className="vb-link">
            Enllaç provisional a confirmació registre
          </p>
        </Link>

      </div>

    )
  }
}
