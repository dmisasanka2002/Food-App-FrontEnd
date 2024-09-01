import React, { useContext } from "react";
import Product from "../Product/Product";
import "./ProductsDisplay.css";
import { StoreContext } from "../Contexts/StoreContext";

// display all products
function ProductsDisplay() {
  const { foodList } = useContext(StoreContext);
  const backendURL = import.meta.env.APP_BACK_URL;

  return (
    <>
      <div className="food-list-display">
        {console.log(foodList)}
        {foodList.map((item, index) => {
          return (
            <div key={index} className="food">
              <Product
                id={item._id}
                name={item.name}
                img={`${backendURL}/${item.image}`}
                des={item.description}
                price={item.price}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProductsDisplay;
