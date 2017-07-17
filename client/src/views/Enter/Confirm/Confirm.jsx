import React from 'react'

import './confirm.sass'

export default class Confirm extends React.Component {

  render() {
    return (

        <div className="vb-confirm">
          <br /><br /><br />
          Espai per posar el formulari de registre
          <div className="vb-confirm-2">
            <p>Text explicatiu sobre les ventatges d’estar registrat: rebre notificacions, mailing, fer videoconferències,
              presentacions, contactar amb artistes…</p>
            <p>Text explicatiu sobre les ventatges d’estar registrat: rebre notificacions, mailing, fer videoconferències,
              presentacions, contactar amb artistes…</p>
            <br />
            <h2>CONFIRMACIÓ DE REGISTRE</h2>
            <br />

            <form id="login_form" action="" method="post">
              Nom
              <br />
              <input type="text" name="name-1" size="40" autofocus="autofocus" />
              <br /><br />
              Cognoms
              <br />
              <input type="text" name="name-2" size="40" />
              <br /><br />
              Nom d'usuari
              <br />
              <input type="text" name="name-3" size="40" />
              <br /><br />
              Correu electrònic
              <br />
              <input type="email" name="email" size="50" />
              <br /><br />
              Contrasenya
              <br />
              <input type="password" name="password-1" size="10" />
              <br /><br />
              Repetir contrasenya
              <br />
              <input type="password" name="password-2" size="10" />
              <br /><br />
              <input type="submit" value="Entrar" />
            </form>

          </div>

        </div>

    )
  }
}
