import React from 'react'
import '../PortfolioStyle/fylo.css'
import fylo from '../image/Fyloimg.jpg'
import { NavLink } from 'react-router-dom'
function Fylo() {
  return (
    <section className='fylo'>
    <div className="container">
      <div className="fylo_wrapper">
      <div className="fylo_text">
             <hr /> 
             <h1>Fylo</h1>
              <p>This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.</p>
              <h6>Interaction Design / Front End Development</h6>
              <h6>HTML / CSS / JS</h6>
             <NavLink to={"/PortfolioFylo"}> <button>VIEW PROJECT</button></NavLink>
             <hr />
          </div>
          <div className="bookmark_img">
              <img src={fylo} alt="" />
          </div>
      </div>
    </div>
  </section>
  )
}

export default Fylo
