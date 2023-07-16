import React from 'react'

function Mobile1() {
    return (
        <div className='mobile-section'>
            <div className='mobile-container'>
                <div className='mobile-text'>
                    <h3>Our mobile application</h3>
                    <h2>Introducing Our New Mobile App: Transfer Money Anytime, Anywhere!</h2>
                    <p>Our mobile app offers a seamless and secure experience, putting the control of your money transfers right at your fingertips. Whether you're on the go, traveling, or simply prefer the convenience of mobile banking, our app empowers you to initiate transfers, track transactions, and manage your account with ease.</p>
                </div>
                <div className='mobile-image'>
                    <img src={require('../images/mobile1.png')}></img>
                </div>
            </div>
        </div>
    )
}

export default Mobile1
