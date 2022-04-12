import React, { useState } from "react";

let customStyle = { width: "100px", height: "100px" };

function Card(props) {
  const [count, updateBuy] = useState(0);
  function increase() {
    updateBuy(count + 1);
  }
  function decrease() {
    updateBuy(count - 1);
  }
  function cart() {
    window.alert("Purchased " + count + " " + props.name + "(s)");
  }

  return (
    <section className="col-sm-4 media">
      <div className="media-left">
        <img src="{props.img}" className="media-object" style={customStyle} />
      </div>
      <div className="media-body">
        <h4 className="media-heading">{props.name}</h4>
        <p>
          {props.price}
          <button className="btn sign" onClick={decrease}>
            -
          </button>
          <span className="badge">{count}</span>
          <button className="btn sign" onClick={increase}>
            +
          </button>
        </p>
        <button className="btn btn-primary" onClick={cart}>
          Add to Cart
        </button>
      </div>
    </section>
  );
}

export default Card;
