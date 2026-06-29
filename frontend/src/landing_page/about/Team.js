import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5  border-top ">
        <h1 className="text-center ">People</h1>
      </div>
      <div className="row p-5   text-muted fs-6">
        <div className="col-6 p-5 text-center">
          <img
            src="media\images\nithinKamath.png"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Abdul Wahab</h4>
          <h5>Founder,CEO</h5>
        </div>
        <div className="col-6 p-5">
          <p style={{fontSize:"1.5rem "}}>
            Abdul Wahab bootstrapped and founded Tradewave in 2026 to overcome
            the hurdles he faced during his decade long stint as a trader.
            Today, Tradewave has changed the landscape of the Indian broking
            industry.
          </p>
          <p>
            Focusing on web , renewable energy resources, and engineering
            coursework.{" "}
          </p>{" "}
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="">Homepage</a> / <a href="">GitHub </a>/
            <a href="">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
