import React from "react";
import "./CheckoutProduct.css";

function CheckoutProduct() {
  return (
    <div>
      <div className="checkoutProduct">
        <img
          src="https://m.media-amazon.com/images/I/61UBl9gTuNL._AC_UL320_.jpg"
          alt=""
          className="checkoutProduct__image"
        />

        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">
            BAGSMART Toiletry Bag, Travel Toiletry Organizer with hanging hook,
            Water-resistant Cosmetic Makeup Bag Travel Organizer for Shampoo,
            Full Sized Container, Toiletries, Pink
          </p>
          <p className="checkoutProduct__price">
            <i>Price: </i>
            <small>$</small>
            <strong>40</strong>
          </p>
          <div className="checkoutProduct__rating">⭐⭐</div>
          <button>Remove from Basket</button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
