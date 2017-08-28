import React from 'react'

import './thumbnail.sass'

import proves1 from 'assets/img/proves1.jpg'


export default class Thumbnail extends React.Component {
  render() {
    return (
      <div className="vb-thumbnail">

          <img className="proves1" src={proves1} />

      </div>

     )
  }
}
