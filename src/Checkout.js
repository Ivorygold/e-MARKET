import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal.js";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img src="/Images/ribon.PNG" alt="" className="checkout__ad" />
      </div>
      <div className="checkout__title">
        <h2>Your Shipping Basket</h2>
        <CheckoutProduct />
        <CheckoutProduct />
        <CheckoutProduct />
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
