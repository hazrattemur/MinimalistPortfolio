import React from 'react'
import '../insurestyle/insuretext.css'
import { NavLink } from 'react-router-dom'
function InsureText() {
  return (
    <section className='insuretexts'>
      <div className="container">
        <div className="insuretext_wrapper">
            <h1>Interested in doing a project together?</h1><hr />
            <div className="insuretext_btn">
           <NavLink to={"/ContactMe"}><button type="submit">CONTACT ME</button></NavLink> 

            </div>
        </div>
      </div>
    </section>
  )
}

export default InsureText
