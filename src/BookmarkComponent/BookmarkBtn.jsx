import React from 'react'
import '../bookmarkstyle/bookmarkbtn.css'
import line1 from '../image/fylo.svg'
import line2 from '../image/bookmark.svg'
import { NavLink } from 'react-router-dom'
function BookmarkBtn() {
  return (
    <section className='bookmarkbtn'>
      <div className="container">
        <div className="bookmarkbtn_wrapper">
            <div className="bookmarkbtn_fylo">
            <img src= {line1} alt="" />
            <div className="bookmarkbtn_text">
          <NavLink to={"/PortfoliManage"}><h1>Manage</h1></NavLink> 
                <h5>Previous Project</h5>
            </div>
            </div>
            <div className="hr"></div>
            <div className="bookmarkbtn_nextbookmark">
                <div className="bookmarkbtn_text1">
               <NavLink to={"/PortfolioInsure"}> <h1>Insure</h1></NavLink>
            <h5>Next Project</h5>
                </div>
         <img src={line2} alt="" />


            </div>
        </div>
      </div>
    </section>
  )
}

export default BookmarkBtn
