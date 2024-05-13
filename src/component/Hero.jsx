import React from 'react'
import '../style/hero.css'
function Hero() {
  return (
    <div className='hero'>
      <div className="container">
        <div className="hero_text">
            <h1>Hey, I’m Alex Spencer and I love building beautiful websites  <button type="submit">ABOUT ME</button></h1>
        </div>
      </div>
      {/* <img src={logos} alt="" /> */}
    </div>
  )
}

export default Hero
