import React from 'react'
import '../fylostyle/fyloimg.css'
import fylo from '../image/fylobig.jpg'
function FyloImg() {
  return (
    <section className='fyloimg'>
      <div className="container">
        <img src={fylo} alt="" />
      </div>
    </section>
  )
}

export default FyloImg
