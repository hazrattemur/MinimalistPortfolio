import React from 'react'
import '../fylostyle/fylobtn.css'
import ik from '../image/fylo.svg'
import ki from '../image/bookmark.svg'
import { NavLink } from 'react-router-dom'
function FyloBtn() {
  return (
    <section className='fylobtn'>
      <div className="container">
        <div className="fylobtn_wrapper">
            <div className="fylobtn_fylo">
              <img src= {ik} alt="" />
              <div className="fylobtn_text">
                <NavLink to={"/PortfolioInsure"}><h1>Insure</h1></NavLink> 
                <h5>Previous Project</h5>
              </div>
            </div>
            <div className="hr"></div>
            <div className="fylobtn_nextbookmark">
                <div className="fylobtn_text1">
                  <NavLink to={"/PortfoliManage"}> <h1>Manage</h1></NavLink>
                  <h5>Next Project</h5>
                </div>
                <img src={ki} alt="" />
            </div>
        </div>
      </div>
    </section>
  )
}

export default FyloBtn
