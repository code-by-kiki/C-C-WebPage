import React from "react";
import { Link } from "react-router-dom";
import './Seller.css';
import furniture from '../assets/SellerIcons.png';
import vehicle from '../assets/vehicleicons.png';
import electronic from '../assets/electronic.png';
import sport from '../assets/sport.png';

export default function SellerCategories() {
  const categories = [
    { img: furniture, name: "Furniture" },
    { img: vehicle, name: "Vehicle" },
    { img: electronic, name: "Electronic" },
    { img: sport, name: "Sport Product" },
  ];

  return (
    <div className="container seller-categories-page py-5" style={{marginTop:110}}>
      <div className="card shadow-lg p-4 rounded-4">
        <h1 className="text-center mb-5 fw-bold">Select a Category</h1>
        <div className="row justify-content-center">
          {categories.map((category, index) => (
            <div className="col-6 col-md-3 mb-4" key={index}>
              <Link to={`/CreatePost/${category.name}`} className="text-decoration-none">
                <div className="category-card text-center p-3 h-100">
                  <img src={category.img} alt={category.name} className="img-fluid mb-3 rounded" />
                  <h5 className="category-name">{category.name}</h5>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}