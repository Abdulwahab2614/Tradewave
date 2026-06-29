import React from 'react';

function Stats() {
    return ( 
        <div className='container p-3'>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h1 className='fs-2 mb-5'>
                        Trust with Confidence
                    </h1>
                    <h2 className='fs-4'>Customer-First Always</h2>
                    <p className='text-muted'>That's why 1.3+ crore customer trust Zerodha with 3.5+ lakh crores of equity investement </p>
                    <h2 className='fs-4'>No spam or gimmicks</h2>
                    <p className='text-muted'>No gimmicks,spam."gamification",or annoying push notification.High quality apps taht you use at your pace,the way you like</p>
                    <h2 className='fs-4'>The Zerodha universe</h2>
                    <p className='text-muted'>Not just an app,but whole ecosystem.Our investements in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h2 className='fs-4'>Do better with money</h2>
                    <p className='text-muted'>With inivaties like Nudge and Kill switch,we don't just facllitate transactions,but actively help you better with your money.</p>
                </div>
                <div className='col-6 p-5'>
                    <img src="media/images/ecosystem.png" style={{width:"90%"}}/>
                    <div className='text-center'>
                        <a className='mr-5' style={{textDecoration:"none"}}href=''>Explore our Product <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href='' style={{textDecoration:"none"}}>Try kite Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
        
     );
}

export default Stats;