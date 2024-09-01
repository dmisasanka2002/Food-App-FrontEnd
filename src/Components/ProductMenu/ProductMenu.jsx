import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ProductMenu.css";

function ProductMenu(props) {
  const [select, setSelect] = useState("");

  return (
    <section className="menu">
      <div className="content-des">
        <h2>Our Restaurants Menu</h2>
        <br />
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          ullam voluptate sit aut veritatis assumenda voluptates fugiat
          consequatur sequi quasi, quod molestiae saepe laborum eaque magnam
          libero sapiente officiis harum.
        </p>
      </div>
      <div className="menu-list">
        {props.list.map((item, index) => {
          return (
            <div
              className={select == item.menu_name ? "item active" : "item"}
              key={index}
              onClick={() => setSelect((select) => item.menu_name)}
            >
              <img src={item.menu_image} alt={item.menu_name} />
              <h3>{item.menu_name}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}

ProductMenu.propTypes = { list: PropTypes.array };

export default ProductMenu;
