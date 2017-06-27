import React from 'react';

import {Link} from 'react-router-dom'

import './mainNav.sass'


export default class MainNav extends React.Component {
  render() {
    return (
      <nav className="vb-main-nav">

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/videos">Videos</Link></li>
          <li><Link to="/creators">Creators</Link></li>
        </ul>

      </nav>
     )
  }
}
