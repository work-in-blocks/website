import React from 'react'
import { Link } from 'gatsby'
import './bootstrap.min.css';
import './index.css'
import logo from '../assets/logo.png'
import logoWhite from '../assets/white.png'

import { rhythm, scale } from '../utils/typography'


class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
      <div className="jumbotron bg-white">
        <div className="container-fluid">
          <img
            style={{ display: 'block',
            margin: '0 auto',
            width: '44rem',}}
            src={logo}
            alt={`Work In Blocks`}
          />
        </div>
      </div>
      )
    } else {
      header = (
      <div className="jumbotron" style={{
        backgroundColor: '#333',
        padding: '2rem 1rem',
        borderRadius: 0,
      }}>
        <div className="container-fluid">
        <img
            style={{ display: 'block',
            margin: '0 auto',
            width: '25rem',}}
            src={logoWhite}
            alt={`Work In Blocks`}
          />
        </div>
      </div>
      )
    }
    return (
      <div className="container-fluid p-0">
      {header}
      <div className="container">
      {children}
      </div>
      </div>
    )
  }
}

export default Template
