import React from 'react';

import {Link} from 'react-router-dom'


export default class MainNav extends React.Component {
  render() {
    return (
      <nav>

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/videos">Videos</Link></li>
          <li><Link to="/creators">Creators</Link></li>
        </ul>


      </nav>
     )
  }
}
