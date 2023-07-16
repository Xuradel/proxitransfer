import React, { useState, useEffect } from 'react'
import { Fade, Zoom } from "react-awesome-reveal";

function Features2() {
    const [toggle, setToggle] = useState(true);
    const toggler = document.getElementById('togglerClass')
    const toggler2 = document.getElementById('togglerClass2')

    useEffect(() => {

    })
    toggler?.addEventListener('click', function () {
        if (!toggle) { setToggle(true) }
    })

    toggler2?.addEventListener('click', function () {
        if (toggle) { setToggle(false) }
    })


    return (
        <div className='features2'>
            <h2>How it works</h2>
            <div className='toggler-buttons'>
                <h4 className={`option ${toggle ? 'clicked' : 'notClicked'}`} id='togglerClass'>Ways to receive money</h4>
                <h4 className={`option ${toggle ? 'notClicked' : 'clicked'}`} id='togglerClass2'>Ways to send money</h4>
            </div>


            {toggle ? <div className='features1'>
                <Fade duration={2000}>
                    <div className='features1-cards'>
                        <div className='features1-card'>
                            <img src={require('../images/transfer.png')}></img>
                            <h4>Bank Transfers</h4>
                            <p>Bank transfers are a widely used method for sending money. Customers provide their bank account details and initiate transfers either online or through a physical branch.  </p>
                        </div>
                        <div className='features1-card'>
                            <img src={require('../images/platform.png')}></img>
                            <h4>Online Payment Platforms</h4>
                            <p>Money transfer businesses often integrate with online payment platforms such as PayPal, Stripe, or Skrill. </p>
                        </div>
                        <div className='features1-card'>
                            <img src={require('../images/mobile.png')}></img>
                            <h4>Mobile Money Transfer</h4>
                            <p>Mobile money transfer services are gaining popularity, particularly in regions with limited banking infrastructure.</p>
                        </div>
                    </div>
                </Fade>

            </div> : <div className='features1'>
                <Fade duration={2000}>                <div className='features1-cards'>
                    <div className='features1-card'>
                        <img src={require('../images/bank.png')}></img>
                        <h4>Bank Deposits</h4>
                        <p>Money transfer businesses facilitate direct bank deposits, allowing customers to receive funds directly into their bank accounts. </p>
                    </div>
                    <div className='features1-card'>
                        <img src={require('../images/cash.png')}></img>
                        <h4>Cash Pickup</h4>
                        <p>Money transfer businesses offer cash pickup services where recipients can collect funds in person from designated locations.  </p>
                    </div>
                    <div className='features1-card'>
                        <img src={require('../images/wallet.png')}></img>
                        <h4>Mobile Wallets</h4>
                        <p>Money transfer businesses collaborate with mobile network operators to enable recipients to receive funds directly into their mobile wallets. </p>
                    </div>
                </div></Fade>

            </div>}

        </div>
    )
}

export default Features2
