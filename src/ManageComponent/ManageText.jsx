import React from 'react'
import '../Managestyle/managetext.css'
import { NavLink } from 'react-router-dom'
function ManageText() {
  return (
    <section className='managetexts'>
      <div className="container">
        <div className="managetext_wrapper">
            <h1>Interested in doing a project together?</h1><hr />
            <div className="managetext_btn">
           <NavLink to={"/ContactMe"}><button type="submit">CONTACT ME</button></NavLink> 

            </div>
        </div>
      </div>
    </section>
  )
}

export default ManageText
