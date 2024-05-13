import React from 'react'
import '../Managestyle/buttons.css'
import fylo from '../image/fylo.svg'
import book from '../image/bookmark.svg'
import { NavLink } from 'react-router-dom'
function Buttons() {
  return (
    <section className='buttons'>
      <div className="container">
        <div className="button_wrapper">
            <div className="button_fylo">
            <img src= {fylo} alt="" />
            <div className="button_text">
          <NavLink to={"/PortfolioFylo"}><h1>Fylo</h1></NavLink> 
                <h5>Previous Project</h5>
            </div>
            </div>
            <div className="hr"></div>
            <div className="button_nextbookmark">
                <div className="button_text1">
               <NavLink to={"/PortfolioBookmark"}> <h1>Bookmark</h1></NavLink>
            <h5>Next Project</h5>
                </div>
         <img src={book} alt="" />


            </div>
        </div>
      </div>
    </section>
  )
}

export default Buttons
