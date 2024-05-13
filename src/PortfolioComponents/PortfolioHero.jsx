import React from 'react'
import'../PortfolioStyle/portfoliohero.css'
import port from'../image/smallhero.jpg'
import second from '../image/secondhero.jpg'
import { NavLink } from 'react-router-dom'
function PortfolioHero() {
  return (
    <section className='portfoliohero'>
      <div className="container">
        <div className="portfolihero_wrapper">
            <div className="porthero_img">
                <img src={second} alt="" />
                <img src={port} alt="" />
            </div>
            <div className="porthero_text">
               <hr /> 
               <h1>Manage</h1>
                <p>This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.</p>
                <h6>Interaction Design / Front End Development</h6>
                <h6>HTML / CSS / JS</h6>
               <NavLink to={"/PortfoliManage"}> <button>VIEW PROJECT</button></NavLink>
               <hr />
            </div>

        </div>
      </div>
    </section>
  )
}

export default PortfolioHero
