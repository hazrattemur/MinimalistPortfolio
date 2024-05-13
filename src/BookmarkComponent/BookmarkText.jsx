import React from 'react'
import '../bookmarkstyle/bookmarktext.css'
import { NavLink } from 'react-router-dom'
function BookmarkText() {
  return (
    <section className='bookmarktexts'>
      <div className="container">
        <div className="bookmarktext_wrapper">
            <h1>Interested in doing a project together?</h1><hr />
            <div className="bookmarktext_btn">
           <NavLink to={"/ContactMe"}><button type="submit">CONTACT ME</button></NavLink> 

            </div>
        </div>
      </div>
    </section>
  )
}

export default BookmarkText
