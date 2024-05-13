import React from 'react'
import'../style/about.css'
import human from'../image/about1.jpg'
import { NavLink } from 'react-router-dom'
function AboutMe() {
  return (
    <div className='about'>
     <div className="container">
        <div className="about_wrapper">
            <img src={human} alt="" />
            <div className="About_text">
              <hr />
              <h1>About Me</h1>
             <p>I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based in London, UK, but I’m happy working remotely and have experience in remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d love you to check out my work.</p>
            <NavLink to={"/PortfolioPage"}><button type="submit">GO TO PORTFOLIO</button><hr /></NavLink>
           </div>
        </div>
        </div> 
    </div>
  )
}

export default AboutMe
