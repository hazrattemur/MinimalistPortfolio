import React from 'react'
import '../ContactStyle/contacthero.css'
import cat from '../image/misssssa.png'
import bird from '../image/twitter.png'
import linc from '../image/linkledin.png'

function ContactHero() {
  
  return (
    <section className='contacthero'>
      <div className="container">
        <div className="contact_wrapper">
            <div className="contact_text">
                <h1>Get in Touch</h1>
            </div>
            <div className="contact_img">
                <p>I’d love to hear about what you’re working on and how I could help. I’m currently looking for a new role and am open to a wide range of opportunities. My preference would be to find a position in a company in London. But I’m also happy to hear about opportunites that don’t fit that description. I’m a hard-working and positive person who will always approach each task with a sense of purpose and attention to detail. Please do feel free to check out my online profiles below and get in touch using the form.</p>
                <img src={cat} alt="" />
                <img src={bird} alt="" />
                <img src={linc} alt="" />
            </div>
        </div>
      </div>
    </section>
  )
}

export default ContactHero
