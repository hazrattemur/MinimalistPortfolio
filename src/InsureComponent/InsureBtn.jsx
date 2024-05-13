import React from 'react'
import'../insurestyle/Insurebtn.css'
import ol from '../image/fylo.svg'
import lo from '../image/bookmark.svg'
import { NavLink } from 'react-router-dom'
function InsureBtn() {
  return (
    <section className='insurebtn'>
      <div className="container">
        <div className="insurebtn_wrapper">
            <div className="insurebtn_fylo">
            <img src= {ol} alt="" />
            <div className="insurebtn_text">
          <NavLink to={"/PortfolioBookmark"}><h1>Boomark</h1></NavLink> 
                <h5>Previous Project</h5>
            </div>
            </div>
            <div className="hr"></div>
            <div className="insurebtn_nextbookmark">
                <div className="insurebtn_text1">
               <NavLink to={"/PortfolioFylo"}> <h1>Fylo</h1></NavLink>
            <h5>Next Project</h5>
                </div>
         <img src={lo} alt="" />


            </div>
        </div>
      </div>
    </section>
  )
}

export default InsureBtn
