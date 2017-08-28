import React from 'react'

import {Link} from 'react-router-dom'

import './enter.sass'

export default class Enter extends React.Component {

  render() {
    return (

        <div className="vb-enter">
          <div className="vb-enter-2">
            <p>Text explicatiu sobre les ventatges d’estar registrat: rebre notificacions, mailing, fer videoconferències,
              presentacions, contactar amb artistes…</p>
            <p>Text explicatiu sobre les ventatges d’estar registrat: rebre notificacions, mailing, fer videoconferències,
              presentacions, contactar amb artistes…</p>
            <br />
            <h2>DADES DE REGISTRE</h2>
            <br />

            <form id="login_form" action="" method="post">
              Correu electrònic
              <br />
              <input type="text" name="email" size="60" autofocus="autofocus" />
              <br /><br />
              Contrasenya
              <br />
              <input type="password" name="password" size="20" />
              <br /><br />
              <input type="checkbox" name="vb_remember" value="1" />
              Recordar-me
              <br /><br />
              <input type="submit" value="Entrar" />
            </form>

            <Link to="/password">
              <p className="vb-link">
                He oblidat la contrasenya
              </p>
            </Link>
            <Link to="/register">
              <p className="vb-link">
                Vull registrar-me
              </p>
            </Link>

          </div>

        </div>

    )
  }
}
