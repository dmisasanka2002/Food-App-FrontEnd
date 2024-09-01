import React from "react";
import Hero from "../../Components/Hero/Hero";
import ProductMenu from "../../Components/ProductMenu/ProductMenu";
import { menu_imgs, menu_list } from "../../assets/frontend_assets/assets";
import ProductsDisplay from "../../Components/ProductsDisplay/ProductsDisplay";
import "./Home.css";
import Experience from "../../Components/Experience/Experience";

function Home() {
  return (
    <>
      <Hero />
      <Experience img1={menu_imgs.menuimg_1} img2={menu_imgs.menuimg_2} />
      <ProductMenu list={menu_list} />
      <section className="foods">
        <h2>Top Dishes for You</h2>
        <ProductsDisplay />
      </section>
      <section className="team-review"></section>
    </>
  );
}

export default Home;
