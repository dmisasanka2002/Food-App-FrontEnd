import React from "react";
import ProductsDisplay from "../../Components/ProductsDisplay/ProductsDisplay";
import PageHeader from "../../Components/PageHeader/PageHeader";

function Products() {
  return (
    <div>
      <PageHeader name="Our Products" pageName="Products" />
      <ProductsDisplay />
    </div>
  );
}

export default Products;
