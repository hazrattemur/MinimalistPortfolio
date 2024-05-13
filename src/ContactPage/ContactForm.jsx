import React from 'react'
import '../ContactStyle/Contactform.css'
function ContactForm() {
  return (
    <section className='contactfrom'>
      <div className="container">
        <div className="contactfrom_wrapper">
            <div className="contactfrom_text">
                <h1>Contact Me</h1>
            </div>
            <div className="contactfrom_form">
                <h5>Name</h5>
                <form>
                    <input type="text" placeholder='Jane Appleseed'/>
                </form>
                <h5>Email Address</h5>
                <form>
                    <input type="email" placeholder='email@example.com'/>
                </form>
                <h5>Message</h5>
                <form>
                    <input type="text" placeholder='How can I help?'/>
                </form>
                <button type="submit">SEND MESSAGE</button>
            </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
