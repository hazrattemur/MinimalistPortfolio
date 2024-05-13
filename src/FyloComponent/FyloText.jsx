import React from 'react'
import '../fylostyle/fylo.css'
import { NavLink } from 'react-router-dom'
function FyloText() {
  return (
    <section className='fylotexts'>
      <div className="container">
        <div className="fylotext_wrapper">
            <h1>Interested in doing a project together?</h1><hr />
            <div className="fylotext_btn">
           <NavLink to={"/ContactMe"}><button type="submit">CONTACT ME</button></NavLink> 

            </div>
        </div>
      </div>
    </section>
  )
}

export default FyloText
