import React from 'react';

function Education() {
    return (  
    <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 '>
                    <img src='media/images/education.svg' style={{width:"70%"}}/>
                </div>
                <div className='col-6  '>
                    <h1 className='mb-3 fs-2'>Free and open market education</h1>
                    <p>Varasity, the largest online stock market education bbok from basics to advanced traiding.</p>
                    <a href='' style={{textDecoration:"none"}}>Versity<i class="fa fa-long-arrow-right" aria-hidden=""true/></a>
                    <p className='mt-5'>Trading Q&A, the most active trading and investement community in India for all market releated queries. </p>
                     <a href='' style={{textDecoration:"none"}}>Trading Q&A<i class="fa fa-long-arrow-right" aria-hidden=""true/></a>
                  
                       
                   
                    
                </div>
            </div>
        </div>
    );
}

export default Education;