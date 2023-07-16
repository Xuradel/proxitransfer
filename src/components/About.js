import React from 'react'

function About() {
    return (
        <div className='about-section'>
            <div className='about-background'>
                <div className='about-text'>
                    <h3>ABOUT US</h3>
                    <h2>Your Secure and Caring Money Transfer Partner</h2>
                    <p>Choose proxi-transfer for your money transfer needs, and experience the perfect blend of top-notch security and caring customer service. Join our community of satisfied clients who have entrusted us with their financial transactions, knowing that we are dedicated to their security and well-being.</p>
                </div>
                <div className='about-image'>
                    <img src={require('../images/about.png')}></img>
                </div>
            </div>
        </div>
    )
}

export default About
