import React from 'react';

function Pricing() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='mb-3 fs-2'>Unbeatable Price</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden Charges.</p>
                     <a className='mr-5' style={{textDecoration:"none"}}href=''/>See Pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </div>
                <div className='col-2'></div>
                <div className='col-6'>
                    <div className='row text-center'>
                        <div className='col p-2 border'>
                           <h1>₹0</h1>
                           <p>Free equity deleviery and direct mutual funds</p>

                        </div>
                        <div className='col p-2 border'>
                            <h1>₹20</h1>
                            <p>Intraday and F&O</p>
                            
                        </div>
   
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;