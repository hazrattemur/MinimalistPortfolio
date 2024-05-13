import React from 'react'
import '../insurestyle/insureimg.css'
import bigg from '../image/insurebig.jpg'
function InsureImg() {
  return (
    <section className='insureimg'>
      <div className="container">
        <img src={bigg} alt="" />
      </div>
    </section>
  )
}

export default InsureImg
