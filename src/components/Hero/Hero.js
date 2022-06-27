import React from 'react'
import './HeroStyles.css'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='container'>
      <div className='content'>
      <h1>Development</h1>
      <h1 className='blue'>Management</h1>
      <h1>Maintenance</h1>
      <div><Link to ='/Cloud'><button>Learn more</button></Link></div>
      </div>
      </div>
    </div>
  )
}

export default Hero
