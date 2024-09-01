import React from "react";
import "./ContactUs.css";
import PageHeader from "../../Components/PageHeader/PageHeader";
import ContactCards from "../../Components/ContactCards/ContactCards";

function ContactUs() {
  return (
    <>
      <PageHeader name="Contact Us" pageName="Contact" />
      <section className="contacts">
        <div className="row">
          <ContactCards />
        </div>
      </section>
    </>
  );
}

export default ContactUs;
