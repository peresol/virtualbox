import React from 'react'

import './confirm.sass'

export default class Confirm extends React.Component {

  render() {
    return (

        <div className="vb-confirm">
          <br /><br /><br />
          Espai per posar el formulari de registre
          <div className="vb-confirm-2">
            <p>El teu correu ha estat confirmat. Ara, si vols, t'agrairem que ens donis algunes dades del teu perfil.</p>

            <form id="login_form" action="" method="post">
              <h3>PERFIL</h3>
              <p>
                <b>Art</b><br />
                <input type="checkbox" name="artist" value="1" /> Artista
                <input type="checkbox" name="artist" value="1" /> Galerista
                <input type="checkbox" name="artist" value="1" /> Col·leccionista
                <input type="checkbox" name="artist" value="1" /> Museu
                <input type="checkbox" name="artist" value="1" /> Fundació
                <input type="checkbox" name="artist" value="1" /> Professor/a
                <input type="checkbox" name="artist" value="1" /> Alumne/a
                <input type="checkbox" name="artist" value="1" /> Crític d'art
                <br />
                <input type="text" name="artist" size="100" value="Espai pels comentaris"/>
              </p>
              <p>
                <b>Ciència</b><br />
                <input type="checkbox" name="artist" value="1" /> Investigador/a
                <input type="checkbox" name="artist" value="1" /> Professor/a
                <input type="checkbox" name="artist" value="1" /> Alumne/a
                <br />
                <input type="text" name="artist" size="100" value="Espai pels comentaris"/>
              </p>
              <p>
                <b>Empresa</b><br />
                <input type="text" name="artist" size="100" value="Espai pels comentaris"/>
              </p>
              <p>
                <b>Comunicació</b><br />
                <input type="checkbox" name="artist" value="1" /> Periodista
                <input type="checkbox" name="artist" value="1" /> Crític
                <input type="checkbox" name="artist" value="1" /> Producció audiovisual
                <br />
                <input type="text" name="artist" size="100" value="Espai pels comentaris"/>
              </p>
              <p>
                <b>Altres</b><br />
                <input type="checkbox" name="artist" value="1" /> Artista
                <br />
                <input type="text" name="artist" size="100" value="Espai pels comentaris"/>
              </p>

              <h3>IDIOMA</h3>
              <input type="checkbox" name="language" value="1" /> Català
              <input type="checkbox" name="language" value="1" /> Español
              <input type="checkbox" name="language" value="1" /> English

              <h3>VOLS REBRE INFORMACIÓ?</h3>
              <input type="checkbox" name="mailing" value="1" /> Si
              <input type="checkbox" name="mailing" value="1" /> No

              <h3>COMENTARIS</h3>
              <input type="text" name="artist" size="100" value="Espai pels comentaris"/>
              <br /><br />
              <input type="submit" value="OK" />
            </form>

          </div>

        </div>

    )
  }
}
