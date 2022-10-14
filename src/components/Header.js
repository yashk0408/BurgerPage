import React from 'react';
import hamburger from './include/hamburger.png';
import imgmeal from './include/imgmeal.png'
import './include/header.css'

export default function Header() {
  return (
    <div id='main-div'>
    <nav class="navbar navbar-expand-lg  ">
    <div class="container-fluid m-4 pb-2">
  
      <img id='header-logo' src={hamburger} alt="" srcset="" />
      <a class="navbar-brand pl-3" href="#">
        BURGER HOUSE</a></div>
      <button class="navbar-toggler me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarSupportedContent">
  
        <div className='container-fluid-main'id='delivery'>
        <img id='del-logo' src="https://img.icons8.com/external-victoruler-outline-victoruler/64/000000/external-delivery-logistics-victoruler-outline-victoruler-1.png"/>
        Express Delivery +1 234 567 890</div>
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 pe-1 ">
          <li class="nav-item pe-4">
            <a class="nav-link active" aria-current="page" href="#">HOME</a>
          </li>
          <li class="nav-item pe-4">
            <a class="nav-link active" aria-current="page" href="#">MENU</a>
          </li>
          <li class="nav-item pe-4">
            <a class="nav-link active" aria-current="page" href="#">OUR STORY</a>
          </li>
          <li class="nav-item pe-4">
            <a class="nav-link active" aria-current="page" href="#">CONTACT US</a>
          </li>
          </ul>
      </div>
  </nav> 
  
   <div className="co">
    <span id="above-text">IT IS A GOOD TIME FOR THE GREAT TASTE OF BURGERS</span><br/>
    <span class="display-1"id='mid-text' >BURGER</span><br/>
    <span id='down-text'>WEEK</span></div>
    <div className="container-fluid">
        <img id="bur-img" class ="img-fluid float-end"src={imgmeal} alt="" />
     </div>
 </div>
  )
}


