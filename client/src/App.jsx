import React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom'

import MainNav from './components/MainNav/MainNav.jsx'

import Home from './views/Home/Home.jsx'
import Videos from './views/Videos/Videos.jsx'
import Creators from './views/Creators/Creators.jsx'

import './app.sass'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="vb-app">

          <MainNav />

          <div className="vb-view">

            <Route exact path='/' component={Home} />
            <Route path='/videos' component={Videos} />
            <Route path='/creators' component={Creators} />

          </div>

        </div>
       </Router>
     )
  }
}
