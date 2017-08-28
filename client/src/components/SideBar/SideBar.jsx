import React from 'react'

import proves2 from 'assets/img/proves2.jpg'

import './sidebar.sass'


export default class SideBar extends React.Component {
  render() {

    const {st} = this.props
    return (
      <div className="vb-sidebar-2">
        <img className="logoVB" src={proves2} />
        <img className="logoVB" src={proves2} />
        <img className="logoVB" src={proves2} />
      </div>

    )
  }
}
