import React from 'react'
import '../Managestyle/Manageimg.css'
import img from'../image/manageimg.jpg'
function MenegeImg() {
  return (
    <section className='manageimg'>
      <div className="container">
        <img src={img} alt="" />
      </div>
    </section>
  )
}

export default MenegeImg
