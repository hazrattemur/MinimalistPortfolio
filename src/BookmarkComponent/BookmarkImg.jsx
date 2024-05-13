import React from 'react'
import '../bookmarkstyle/bookmarkimg.css'
import big from '../image/bookmarkimg.jpg'
function BookmarkImg() {
  return (
    <section className='bookmarkimg'>
      <div className="container">
        <img src={big} alt="" />
      </div>
    </section>
  )
}

export default BookmarkImg
