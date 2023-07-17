import React from 'react'
import { ReactComponent as ReactLogo } from '../images/hero-image.svg'

function Hero() {
    return (
        <header>
            <div className='hero-text'>
                <h1>Securely Send and Receive Money Anywhere with Ease</h1>
                <p>Welcome to our trusted money transfer platform, where you can effortlessly send and receive funds across the globe. Our service ensures the utmost security and convenience, allowing you to transfer money to your loved ones, pay bills, or manage business transactions without any hassle.</p>
                <button>Get Started Now!</button>
            </div>
            <div className='hero-image'>
                <img src={require('../images/mobilehero.png')}></img>
            </div>
        </header>
    )
}

export default Hero
