import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div>
      <div className="home">
        <div className="home__container">
          <img
            src="https://media.istockphoto.com/id/1429456277/photo/online-shopping-with-credit-car-or-cash-money.jpg?b=1&s=170667a&w=0&k=20&c=ag_iAVhF9G24GHgRIXdwt50NUn7xvmz3ORGTlFPHv7Q="
            alt=""
            className="home__image"
          />

          <div className="home__row">
            <Product
              key="001"
              title="BAGSMART Toiletry Bag, Travel Toiletry Organizer with hanging hook, Water-resistant Cosmetic Makeup Bag Travel Organizer for Shampoo, Full Sized Container, Toiletries, Pink"
              price={67.96}
              rating={5}
              image="https://m.media-amazon.com/images/I/61UBl9gTuNL._AC_UL320_.jpg"
            />
            <Product
              key="002"
              title="OontZ Angle 3 Pro - Premium Waterproof Bluetooth Speaker, 21-Watts Louder Volume, Exceptional Sound & Bass, 100ft Wireless Range, Play Two Together for Dual Stereo, Bluetooth Speakers (Black)"
              price={120.96}
              rating={3}
              image="https://m.media-amazon.com/images/I/61OE3I7lkhL._AC_UY218_.jpg"
            />
          </div>

          <div className="home__row">
            <Product
              key="003"
              title="Apple iPhone 12 Pro 5G, US Version, 512GB, Graphite - Unlocked (Renewed)"
              price={672.96}
              rating={4}
              image="https://m.media-amazon.com/images/I/71enjEBiqfL._AC_SX679_.jpg"
            />
            <Product
              key="004"
              title="Onlyeasy Sturdy Under Bed Shoe Storage Organizer, Set of 2, Fits Total 24 Pairs, Underbed Shoes Closet Storage Solution with Clear Window, Breathable,, Linen-like Black, MXAUBSB2P"
              price={28.96}
              rating={2}
              image="https://m.media-amazon.com/images/I/81JtkLOVd+L._AC_UL320_.jpg"
            />
            <Product
              key="005"
              title="Head Strap for Oculus Quest 2: NIUCOO Adjustable Headstrap for Oculus Quest Weight Balance, Enhanced Support and Comfort in VR"
              price={45}
              rating={5}
              image="https://m.media-amazon.com/images/I/617koVMAMgL._AC_UY218_.jpg"
            />
          </div>

          <div className="home__row">
            <Product
              key="006"
              title="Furuian Steel Toe Shoes for Men Women Lightweight Safety Shoes Comfortable Steel Toe Sneakers Warehouse Industry special"
              price={67}
              rating={3}
              image="https://m.media-amazon.com/images/I/8151PI3RlqL._AC_UL320_.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
