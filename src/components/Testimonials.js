import React from 'react'
import "./Testimonials.css"

function Testimonials() {
    return (
        <div className='testimonials'>
            <h3>What our clients say about us</h3>
            <h2>4.5 stars in IOS and 4.6 in Android devices</h2>
            <div className='testimonials-section'>
                <figure class="snip1192">
                    <blockquote>Calvin: Fast and secure money transfers! The best service I've used. Highly recommended! </blockquote>
                    <div class="author">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg" alt="sq-sample1" />
                        <h5>Sarah M.<span> LittleSnippets</span></h5>
                    </div>
                </figure>
                <figure class="snip1192 hover">
                    <blockquote>Fast and secure money transfers! The best service I've used. Highly recommended!</blockquote>
                    <div class="author">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample24.jpg" alt="sq-sample24" />
                        <h5>Carla D.<span> LittleSnippets</span></h5>
                    </div>
                </figure>
                <figure class="snip1192">
                    <blockquote>Effortless international transfers with competitive rates. Trustworthy and reliable money transfer service.</blockquote>
                    <div class="author">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample29.jpg" alt="sq-sample29" />
                        <h5>Lisa T.<span> LittleSnippets</span></h5>
                    </div>
                </figure>
            </div>
        </div>
    )
}

export default Testimonials
