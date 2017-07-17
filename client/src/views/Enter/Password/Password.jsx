import React from 'react'

import './password.sass'

export default class Password extends React.Component {

  render() {
    return (

        <div className="vb-password">
          <br /><br /><br />
          Espai per posar el formulari de registre
          <div className="vb-password-2">
            <p>Rebràs un email un formulari per canviar la seva contrasenya</p>
            <br />
            <h2>DADES DE REGISTRE</h2>
            <br />

            <form id="login_form" action="" method="post">
              Correu electrònic
              <br />
              <input type="text" name="email" size="60" autofocus="autofocus" />
              <br /><br />
              <input type="submit" value="Entrar" />
            </form>
            
          </div>
        </div>

    )
  }
}
