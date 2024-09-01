import React from "react";
import "./ContactCards.css";
import { HiClock, HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";

function ContactCards() {
  return (
    <>
      <div className="box">
        <div className=" contact-info">
          <i className="icon map">
            <HiLocationMarker />
          </i>
          <h4>Location</h4>
          <p>Dolor sit, #PTH,8800 Honey Street SL.</p>
        </div>
      </div>
      <div className="box">
        <div className=" contact-info">
          <i className="icon phone">
            <HiPhone />
          </i>
          <h4>Phone</h4>
          <p>
            <a href="tel:+94 123 456 789">+94 123 456 789</a>
          </p>
          <p>
            <a href="tel:+94 123 789 456">+94 123 789 456</a>
          </p>
        </div>
      </div>
      <div className="box">
        <div className=" contact-info">
          <i className="icon mail">
            <HiMail />
          </i>
          <h4>Email</h4>
          <p>
            <a href="mailto:mail@example.com" className="email">
              mail@example.com
            </a>
          </p>
          <p>
            <a href="mailto:mail@example1.com" className="email">
              mail@example1.com
            </a>
          </p>
        </div>
      </div>
      <div className="box">
        <div className=" contact-info">
          <i className="icon clock">
            <HiClock />
          </i>
          <h4>Working Hours</h4>
          <p>Wednesday - Sunday</p>
          <p>7:00 AM - 9:00 PM</p>
        </div>
      </div>
    </>
  );
}

export default ContactCards;
