import React from "react";
import "./Specialists.css";
import { team } from "../../assets/frontend_assets/assets";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Specialists() {
  const specialists = [
    { image: team.cheff1, name: "John Doe", des: "Owner" },
    { image: team.cheff2, name: "Alexander", des: "Chef" },
    { image: team.cheff3, name: "Martin ker", des: "Co-founder" },
    { image: team.cheff4, name: "Elizabeth", des: "Specialist" },
  ];

  return (
    <div className="container">
      <div>
        <h2>Our Specialists</h2>
      </div>
      <div className="row">
        {specialists.map((item, index) => {
          return (
            <div className="member" key={index}>
              <div className="img-container">
                <img src={item.image} alt="" />
              </div>
              <div className="description">
                <h3>{item.name}</h3>
                <p>{item.des}</p>
              </div>
              <div className="team-contacts">
                <FaFacebook />
                <FaTwitter />
                <FaInstagram />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Specialists;
