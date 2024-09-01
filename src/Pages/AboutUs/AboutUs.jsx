import React from "react";
import "./AboutUs.css";
import Experience from "../../Components/Experience/Experience";
import { menu_imgs } from "../../assets/frontend_assets/assets";
import PageHeader from "../../Components/PageHeader/PageHeader";
import Specialists from "../../Components/Specialists/Specialists";

function AboutUs() {
  return (
    <>
      <PageHeader name="About Us" pageName="About" />
      <Experience img1={menu_imgs.exp_img1} img2={menu_imgs.exp_img2} />

      <section className="team">
        <Specialists />
      </section>
      <section className="testimonials"></section>
    </>
  );
}

export default AboutUs;
