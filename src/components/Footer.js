import React from 'react'
import "./Footer.css"
function Footer() {
    return (
        <div>
            <div class="footer">
  <div class="inner-footer">

    <div class="footer-items">
      <h2>Proxi-transfer</h2>
      <p>Creating quick and efficient solutions.</p>
    </div>

    <div class="footer-items">
      <h3>Company</h3>
      <div class="border1"></div>
        <ul>
          <a href="#"><li>Home</li></a>
          <a href="#"><li>Search</li></a>
          <a href="#"><li>Contact</li></a>
          <a href="#"><li>About</li></a>
        </ul>
    </div>

    <div class="footer-items">
      <h3>Support</h3>
      <div class="border1"></div>
        <ul>
          <a href="#"><li>Terms and conditions</li></a>
          <a href="#"><li>Privacy policy</li></a>
          <a href="#"><li>Contact center</li></a>
          <a href="#"><li>Online chat</li></a>
        </ul>
    </div>

    <div class="footer-items">
      <h3>Contact us</h3>
      <div class="border1"></div>
        <ul>
          <li><i class="fa fa-map-marker" aria-hidden="true"></i>XYZ, abc</li>
          <li><i class="fa fa-phone" aria-hidden="true"></i>123456789</li>
          <li><i class="fa fa-envelope" aria-hidden="true"></i>xyz@gmail.com</li>
        </ul> 
      
        <div class="social-media">
          <a href="#"><img src={require('../images/ig.png')} style={{ width: 30, height: 30 }}/></a>
          <a href="#"><img src={require('../images/fb.png')} style={{ width: 30, height: 30 }}/></a>
          <a href="#"><img src={require('../images/gplus.png')} style={{ width: 30, height: 30 }}/></a>
        </div> 
    </div>
  </div>
  
  <div class="footer-bottom">
    Copyright &copy; Proxi-transfer 2023.
  </div>
</div>
        </div>
    )
}

export default Footer
