import React from 'react'
import '../PortfolioStyle/insure.css'
import second from '../image/insureimg.jpg'
import { NavLink } from 'react-router-dom'
function Insure() {
  return (
    <section className='insure'>
    <div className="container">
      <div className="insure_wrapper">
          <div className="insure_img">
              <img src={second} alt="" />
          </div>
          <div className="insure_text">
             <hr /> 
             <h1>Insure</h1>
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

export default Insure
