import React from "react";
import { Link, useParams } from "react-router-dom";

export function Preview() {
  let { type } = useParams();

  return (
    <main className="preview-page">
      <section className="cart">
        <h2>Cart</h2>
        <div className="order-summary">
          <ul className="order-summary-list">
            <li className="order-summary-list-list-item">
              <img src="/images/sunglasses.png" className="order-summary-list-list-item-image" alt="" />
              <p className="order-summary-list-list-item-title">Sunglasses</p>
              <p className="order-summary-list-list-item-price">0.05</p>
            </li>
            <li className="order-summary-list-list-item">
              <img src="/images/headphones.png" className="order-summary-list-list-item-image" alt="" />
              <p className="order-summary-list-list-item-title">Headphones</p>
              <p className="order-summary-list-list-item-price">0.05</p>
            </li>
          </ul>
        </div>
        <div className="cart-footer">
          <span className="cart-footer-label">Total:</span>
          <span className="cart-footer-amount">0.10</span>
          <Link to={`/checkout/${type}`}>
            <p className="button">Continue to checkout</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
