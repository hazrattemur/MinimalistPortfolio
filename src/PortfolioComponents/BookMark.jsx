import React from 'react'
import '../PortfolioStyle/bookmark.css'
import third from'../image/biiiiiig.jpg'
import { NavLink } from 'react-router-dom'
function BookMark() {
  return (
    <section className='bookmark'>
      <div className="container">
        <div className="bookmark_wrapper">
        <div className="bookmark_text">
               <hr />
                <h1>Bookmark</h1>
                <p>This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.</p>
                <h6>Interaction Design / Front End Development</h6>
                <h6>HTML / CSS / JS</h6>
               <NavLink to={"/PortfolioBookmark"}> <button>VIEW PROJECT</button></NavLink>
               <hr />
            </div>
            <div className="bookmark_img">
                <img src={third} alt="" />
            </div>
        </div>
      </div>
    </section>
  )

}

export default BookMark
