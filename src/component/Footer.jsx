import React from 'react'
import '../style/footer.css'
import logo1 from'../image/logo123.png'
import cat from'../image/misa.png'
import twit from'../image/twit.png'
import link from'../image/in.png'
import { NavLink } from 'react-router-dom'
function Footer() {
  return (
    <div className='footer'>
    <div className="container">
      <div className="footer_wrapper">
       <NavLink to={"/"}><img src={logo1} alt="" /></NavLink> 
        <div className="footer_text">
         <NavLink to={"/"}><h6>HOME</h6></NavLink>
          <NavLink to={"/PortfolioPage"}><h6>PORTFOLIO</h6></NavLink>
         <NavLink to={"/ContactMe"}><h6>CONTACT ME</h6></NavLink>
        </div>
        <div className="footer_img">
          <img src={cat} alt="" />
          <img src={twit} alt="" />
          <img src={link} alt="" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer
