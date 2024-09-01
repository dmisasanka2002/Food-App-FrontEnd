import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div>
          <h1>Fresh Healthy Delicious Foods</h1>
          <p>
            Healthy foods to eat everyday, Tasty and healthy vegetables salad
            with fresh tomatoes, coriander leaves and more.
          </p>
        </div>
        <div>
          <Link to="/products">Visit & Buy</Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
