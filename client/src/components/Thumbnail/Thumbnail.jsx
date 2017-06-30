import React from 'react';


import './thumbnail.sass'


export default class Thumbnail extends React.Component {
  render() {
    return (
      <div className="vb-thumbnail">

        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/FhKJgqxNDD8"
          frameborder="0"
          allowfullscreen>
        </iframe>

      </div>

     )
  }
}
