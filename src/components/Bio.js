import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div className="media" style={{marginBottom: 40}}>
        <img className="mr-3 align-self-center rounded-circle" src={profilePic} alt="Generic placeholder image"/>
        <div className="media-body">
          <h5 className="mt-0">Mark Jefft</h5>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </div>
      </div>
    )
  }
}

export default Bio
