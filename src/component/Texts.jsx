import React from 'react'
import '../style/texts.css'
import { NavLink } from 'react-router-dom'
function Texts() {
  return (
    <section className='texts'>
      <div className="container">
        <div className="text_wrapper">
            <h1>Interested in doing a project together?</h1>
            <div className="hr"></div>
            <div className="text_btn">
           <NavLink to={"/ContactMe"}><button type="submit">CONTACT ME</button></NavLink> 
            </div>
        </div>
      </div>
    </section>
  )
}

export default Texts
