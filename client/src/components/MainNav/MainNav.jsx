import React from 'react';

import {Link} from 'react-router-dom'

import './mainNav.sass'


export default class MainNav extends React.Component {
  render() {
    return (

      <nav className="vb-main-nav">

        <ul className="vb-list-menu">
          <li className="vb-menu"><Link to="/">Inici</Link></li>
          <li className="vb-menu"><Link to="/live">En viu</Link></li>
          <li className="vb-menu"><Link to="/creators">Artistes/Creatius</Link></li>
          <li className="vb-menu"><Link to="/videos">Videos</Link></li>
          <li className="vb-menu"><Link to="/messages">Missatges</Link></li>
        </ul>

        <ul className="vb-list-menu-2">
          <li className="vb-menu-2"><Link to="/enter">Entrar</Link></li>
          <li className="vb-menu-2"><Link to="/we">Nosaltres</Link></li>
          <li className="vb-menu-2"><Link to="/regulations">Normatives</Link></li>
          <li className="vb-menu-2"><Link to="/language">Idioma</Link></li>
        </ul>

      </nav>
     )
  }
}
