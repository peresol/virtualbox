import React from 'react';

import {Link} from 'react-router-dom'

import './mainNav.sass'

import logoVB from 'assets/img/logo-vb-30px.gif'
import iconInfo from 'assets/img/icon-info.gif'

export default class MainNav extends React.Component {

  render() {

    return (

      <nav className="vb-main-nav">

        <div className="menu-item-1">
          <Link to="/">
            <img className="logoVB" src={logoVB} />
          </Link>
        </div>

        <div className="menu-item-2">
          <Link to="/live">
            <span>Directes</span>
            <img className="iconInfo" src={iconInfo} />
          </Link>
        </div>

        <div className="menu-item-3">
          <Link to="/creators">
            <span>Creatius</span>
            <img className="iconInfo" src={iconInfo} />
          </Link>
        </div>

        <div className="menu-item-4">
          <Link to="/videos">
            <span>Històric</span>
            <img className="iconInfo" src={iconInfo} />
          </Link>
        </div>

        <div className="menu-item-5">
          <Link to="/enter">
            <span>Entrar</span>
            <img className="iconInfo" src={iconInfo} />
          </Link>
        </div>

        <div className="menu-item-6">
          <Link to="/info">
            <span>Info</span>
            <img className="iconInfo" src={iconInfo} />
          </Link>
        </div>

      </nav>
     )
  }
}
