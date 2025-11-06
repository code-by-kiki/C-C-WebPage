import React from "react";
import { Link } from "react-router-dom";
import './Seller.css';

export default function Seller() {
  return (
    <div className="container-fluid postpage d-flex justify-content-center align-items-center">
      <div className="card seller-card text-center p-5">
        <h1 className="mb-4">Sell Your Product</h1>
        <div className="d-grid gap-4">
          <Link to="/SellerCategories" className="nav-link">
            <button className="btn  seller-btn">Create Post</button>
          </Link>
          <Link to="/OtherPost" className="nav-link">
            <button className="btn btn-outline-secondary seller-btn">Other Posts</button>
          </Link>
        </div>
      </div>
    </div>
  );
}