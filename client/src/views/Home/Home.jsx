import React from 'react'

import Thumbnail from './../../components/Thumbnail/Thumbnail.jsx'
import Advertising from './../../components/Advertising/Advertising.jsx'
import Studio from './../../components/Studio/Studio.jsx'
import Calendar from './../../components/Calendar/Calendar.jsx'

import proves1 from 'assets/img/proves1.jpg'
import logoVB from 'assets/img/logo-vb-30px.gif'

import './home.sass'

export default class Home extends React.Component {
  render() {
    return (
      <div className="vb-home">

        <div className="vb-live">
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
        </div>

        <div className="vb-artist">
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
        </div>

        <div className="vb-video">
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
        </div>

      </div>)
  }
}
