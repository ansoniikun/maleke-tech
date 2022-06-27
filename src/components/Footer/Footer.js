import React from 'react'
import './FooterStyles.css'
import { SiDatabricks } from 'react-icons/si'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'
import { FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='top'>
            <div className='logo-footer'>
                <SiDatabricks className='icon'/>
                <h2>Maleke Tech</h2>
            </div>
            <Link activeClass="active" to="top" spy={true} smooth={true} duration={1000} >
                <BsFillArrowUpCircleFill className='icon' />
            </Link>
        </div>
        <div className='col-container'>
            <div className='col'>
                <h3>Navigation</h3>
                <p>Home</p>
                <p>Services</p>
                <p>Contact</p>
            </div>
            <div className='col'>
                <h3>Legal</h3>
                <p>Home</p>
                <p>Services</p>
                <p>Skills</p>
            </div>
            <form>
                <h3>Subscribe to Our Newsletter</h3>
                <input name='emailSub' type='email' placeholder='Enter your email' formAction='https://formsubmit.co/fxmaleke@yahoo.com' method='POST'/>
                <FiMail  className='mail-icon' />
                   <div className='social-group'>
                        <a href='https://twitter.com/MalekeTech'><FaTwitter className='social-icon' /></a>
                        <a href='#'><FaYoutube className='social-icon' /></a>
                        <a href='#'><FaGithub className='social-icon' /></a>                
                    </div>
            </form>
        </div>
         <p>&copy; Maleke Technologies. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
