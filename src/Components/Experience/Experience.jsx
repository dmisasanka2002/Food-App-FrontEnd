import React from "react";
import "./Experience.css";

function Experience(props) {
  return (
    <section className="experiance">
      <div className="container">
        <div className="row">
          <div className="left">
            <div className="images">
              <div>
                <img src={props.img1} alt="" />
              </div>
              <div className="abs">
                <img src={props.img2} alt="" />
              </div>
            </div>
          </div>
          <div className="right">
            <h2>We Have 10+ Years of Experience</h2>
            <br />
            <br />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
              odit quos totam dolorum consequatur earum optio modi sapiente quia
              commodi architecto, cumque voluptatum sint debitis minus tempora
              quo quibusdam, qui adipisci vitae. Vero doloribus quia similique
              nam, delectus minus ipsum vitae dolorem praesentium nisi maiores
              nihil est, dolorum ad beatae!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
