import React from 'react'

function Features1() {
    return (
        <div className='features1'>
            <h3>Experience Unmatched Excellence in Money Transfers</h3>
            <h2>Why Choose Us as Your Trusted Money Transfer Partner</h2>
            <div className='features1-cards'>
                <div className='features1-card'>
                    <img src={require('../images/secure.png')}></img>
                    <h4>Secure</h4>
                    <p>Our money transfer service prioritizes the security of your funds. </p>
                </div>
                <div className='features1-card'>
                    <img src={require('../images/world.png')}></img>
                    <h4>Worldwide</h4>
                    <p>We offer a worldwide network of transfer partners, enabling you to send and receive money to and from any corner of the globe. </p>
                </div>
                <div className='features1-card'>
                    <img src={require('../images/fee.png')}></img>
                    <h4>Competitive</h4>
                    <p>We offer highly competitive exchange rates and transparent fees.</p>
                </div>
            </div>
        </div>
    )
}

export default Features1
