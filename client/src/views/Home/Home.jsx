import React from 'react'


import Thumbnail from './../../components/Thumbnail/Thumbnail.jsx'
import Advertising from './../../components/Advertising/Advertising.jsx'
import Studio from './../../components/Studio/Studio.jsx'
import Calendar from './../../components/Calendar/Calendar.jsx'

import './home.sass'

export default class Home extends React.Component {
  render() {
    return (
      <div className="vb-home">

        <div className="vb-live">
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
        </div>

        <div className="vb-artist">
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
        </div>

        <div className="vb-control">
          <Advertising />
          <Studio />
          <Calendar />
        </div>

      </div>)
  }
}
