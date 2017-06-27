import React from 'react';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Home from './views/Home/Home.jsx'
import Videos from './views/Videos/Videos.jsx'
import Creators from './views/Creators/Creators.jsx'

import MainNav from './MainNav/MainNav.jsx'


export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>

          <MainNav />


          <Route exact path='/' component={Home} />
          <Route path='/videos' component={Videos} />
          <Route path='/creators' component={Creators} />

        </div>
       </Router>
     )
  }
}
