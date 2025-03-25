import React from "react";
import "./Offer.css";

const Offers = () => {
  return (
    <section className="offer-section">
      <div className="offer-content">
        <p>Deal of the Day</p>
        <span>Shop Your Flower Best Offer - $12</span>
        <button className="shop-now-btn">Shop Now</button>
      </div>
      <img 
        className="offer-image" 
        src="https://theflora.in/cdn/shop/articles/pexels-brett-sayles-992734_1.jpg?crop=center&height=1200&v=1738243273&width=1200" 
        alt="Flower Offer" 
      />
    </section>
  );
};

export default Offers;
