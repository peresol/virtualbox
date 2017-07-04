import React from 'react';

import {Link} from 'react-router-dom'

import './mainNav.sass'

import logoVB from 'assets/img/logo-vb-30px.gif'
import iconInfo from 'assets/img/icon-info.gif'


export default class MainNav extends React.Component {


  render() {


    return (

      <nav className="vb-main-nav">

        <Link to="/">
          <img className="logoVB" src={logoVB} />
        </Link>

        <ul className="vb-list-menu">
          <li className="vb-menu">
            <Link to="/live">Directes</Link>
          </li>
          <li className="vb-menu">
            <Link to="/creators">Creatius</Link>
          </li>
          <li className="vb-menu">
            <Link to="/videos">Històric</Link>
          </li>
        </ul>

        <ul className="vb-list-menu-2">
          <li className="vb-menu-2">
            <Link to="/enter">Entrar</Link>
          </li>
          <li className="vb-menu-2">
            <Link to="/regulations">
              <div className="proves">
                Info <img className="iconInfo" src={iconInfo} />
              </div>
            </Link>
          </li>
        </ul>

      </nav>
     )
  }
}
