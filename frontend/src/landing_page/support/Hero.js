import React from "react";

function Hero() {
  return (
    <section className="container-fluid " id="supportHero">
      <div className=" p-3" id="supportWrapper">
        <h3>Support Portal</h3>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-5">
        <div className="col-6  p-5">
          <h2>Search for answer or browse help topics to create a ticket.</h2>
          <input
            placeholder="Eg: How do I open my account, How do i activate F&O...
"
          />
          <br/>
          <br/>
         <ul>
          <li> <a href="">Track Acoount Opening</a>
         </li>
           <li> <a href="">Track segment Activation</a>
          
          
            <li><a href="">Intraday margins</a></li>
             <li><a href="">Kite user manual</a></li></li>
              
         </ul>
        </div>
        <div className="col-6 p-5">
          <h2>Featured</h2>
          <ul>
            <li>
              {" "}
              <a href="">Current Takeovers and Delisting-January 2026</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages-MIS & CO</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hero;
