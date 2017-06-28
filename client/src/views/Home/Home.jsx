import React from 'react';

import './home.sass';

export default class Home extends React.Component {
  render() {
    return (
      <div className="vb-home">

        <div className="vb-live">
          Espai per posar els videos dels directes
        </div>

        <div className="vb-artist">
          Aquí hi aniran els dossiers i videos dels artistes
        </div>

        <div className="vb-video">
          Aquí hi ha tot el historial de videos
        </div>

      </div>)
  }
}
