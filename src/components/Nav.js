import React from 'react'
import './Nav.css'
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");



hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});

function Nav() {
    return (
        <nav>
            <div class="logo">
                <img src={require('../images/proxi.png')} alt="Logo Image" />
            </div>
            <div class="hamburger">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
            <ul class="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Track Order</a></li>
                <li><a href="#">Locations</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><button class="login-button" href="#">Login</button></li>
                <li><button class="join-button" href="#">Sign Up</button></li>
            </ul>
        </nav>
    )
}

export default Nav
