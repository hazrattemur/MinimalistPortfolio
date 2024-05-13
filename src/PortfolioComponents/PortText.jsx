import React from 'react'
import '../PortfolioStyle/porttext.css'
import { NavLink } from 'react-router-dom'
function PortText() {
  return (
    <section className='porttexts'>
      <div className="container">
        <div className="porttext_wrapper">
            <h1>Interested in doing a project together?</h1>
            <div className="porttext_btn">
           <NavLink to={"/ContactMe"}><button type="submit">CONTACT ME</button></NavLink> 

            </div>
        </div>
      </div>
    </section>
  )
}

export default PortText
