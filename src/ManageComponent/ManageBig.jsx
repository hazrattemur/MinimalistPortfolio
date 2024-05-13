import React from 'react'
import '../Managestyle/managebig.css'
import one from '../image/manageimg1.jpg'
import two from '../image/manageimg2.jpg'
function ManageBig() {
  return (
    <section className='managebig'>
      <div className="container">
        <div className="managebig_wrapper">
            <div className="manage_btn">
               <hr /> <h1>Manage</h1>
                <p>This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.</p>
                <h5>Interaction Design / Front End Development</h5>
                <h5>HTML / CSS / JS</h5>
                <button>VISIT WEBSITE</button>
            </div>
            <div className="manage_img">
                <h1>Project Background</h1>
                <p>This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.</p>
                <h2>Static Previews</h2>
                <img src={one} alt="" />
                <img src={two} alt="" />
            </div>

        </div>
      </div>
    </section>
  )
}

export default ManageBig
