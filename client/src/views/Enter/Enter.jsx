import React from 'react'

import Advertising from './../../components/Advertising/Advertising.jsx'

import './enter.sass'

export default class Enter extends React.Component {
  render() {
    return (

        <div className="vb-enter">
          // Solucionar alçada i que no hi hagi de posar salts de linea
          <br /><br /><br />
          Espai per posar el formulari d'entrada i el de registre
          <div className="vb-email">

            <form id="login_form" action="" method="post">
              Correu electrònic
              <br />
              <input type="text" name="email" size="60" autofocus="autofocus" autocomplete="off" />
              <br /><br />
              Contrasenya
              <br />
              <input type="password" name="password" size="20" />
              <br /><br />
              <input name="vb_remember" type="checkbox" value="1" />
              Recordar-me
              <br /><br />
              <input type="submit" value="Entrar" />
            </form>

            <p className="vb-link">
              He oblidat la contrasenya
            </p>
            <p className="vb-link">
              Vull registrar-me
            </p>

          </div>

        </div>

    )
  }
}
