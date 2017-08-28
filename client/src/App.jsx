import React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom'

import MainNav from './components/MainNav/MainNav.jsx'
import SideBar from './components/SideBar/SideBar.jsx'

import Home from './views/Home/Home.jsx'
import Live from './views/Live/Live.jsx'
import Creators from './views/Creators/Creators.jsx'
import Videos from './views/Videos/Videos.jsx'
import Enter from './views/Enter/Enter.jsx'
import Register from './views/Enter/Register/Register.jsx'
import Password from './views/Enter/Password/Password.jsx'
import Confirm from './views/Enter/Confirm/Confirm.jsx'
import Info from './views/Info/Info.jsx'

import './app.sass'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="vb-app">

          <MainNav />

          <div className="vb-view">

            <Route exact path='/' component={Home} />
            <Route path='/live' component={Live} />
            <Route path='/creators' component={Creators} />
            <Route path='/videos' component={Videos} />
            <Route path='/enter' component={Enter} />
            <Route path='/register' component={Register} />
            <Route path='/password' component={Password} />
            <Route path='/confirm' component={Confirm} />
            <Route path='/info' component={Info} />

          </div>

          <div className="vb-sidebar">
            <SideBar />
          </div>

        </div>
       </Router>
     )
  }
}
