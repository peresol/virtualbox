import React from 'react';

import {Link} from 'react-router-dom'

import './mainNav.sass'


export default class MainNav extends React.Component {
  render() {
    return (

      <nav className="vb-main-nav">

        <ul className="vb-list-menu">
          <li className="vb-menu"><Link to="/">Home</Link></li>
          <li className="vb-menu"><Link to="/videos">Videos</Link></li>
          <li className="vb-menu"><Link to="/creators">Creators</Link></li>
        </ul>

      </nav>
     )
  }
}
