import React from "react";
import "./PageHeader.css";
import { banner } from "../../assets/frontend_assets/assets";

function PageHeader(props) {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="left">
            <h2>{props.name}</h2>
            <ul>
              <li>Home</li>
              <li>&gt;</li>
              <li>{props.pageName}</li>
            </ul>
          </div>
          <div className="right">
            <div className="image">
              <img src={banner.banner1} alt="banner" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default PageHeader;
