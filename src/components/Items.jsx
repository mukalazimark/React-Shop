import React from "react";
import products from "./products";
import Card from "./Card";

function showProduct(product) {
  return (
    <div className="row">
      <Card
        key={product.id}
        img={product.img}
        name={product.name}
        price={product.price}
      />
    </div>
  );
}

function Items() {
  return <div>{products.map(showProduct)}</div>;
}

export default Items;
