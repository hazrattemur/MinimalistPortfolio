import React, { useState } from 'react'
import '../style/header.css'
import logo from'../image/header_logo.svg'
import { NavLink } from 'react-router-dom'
function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className='header'>
     <div className="container">
        <div className="header_wrapper">
        <div className={`modal ${isModalOpen ? 'open_modal' : ''}`}>
        <span className="close_modal" onClick={closeModal}><i className="fa-solid fa-xmark"></i></span>
        <ul class="modal_list">
       <NavLink to={"/"}> <li><a href="#!">HOME</a></li></NavLink>
       <NavLink to={"/PortfolioPage"}> <li><a href="#!">PORTFOLIO</a></li></NavLink>
       <NavLink to={"/ContactMe"}> <li><a href="#!">CONTACT ME</a></li></NavLink>
    </ul>
      </div>
      <button className="burger" onClick={openModal}> <i className="fa-solid fa-bars"></i></button>

          <NavLink to= "/">  <img src={logo} alt="" /></NavLink>
            <div className="header_text">
          <NavLink to="/"><a href="#!">HOME</a></NavLink>
          <NavLink to={"/PortfolioPage"}> <a href="#!">PORTFOLIO</a></NavLink> 
           <NavLink to={"/ContactMe"}> <a href="#!">CONTACT ME</a></NavLink>
            </div>
        </div>
        </div> 
    </div>
  )
}

export default Header
