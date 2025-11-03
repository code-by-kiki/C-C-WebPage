import React from "react";
import './Seller.css';
import furniture from '../assets/SellerIcons.png';
import vehicle from '../assets/vehicleicons.png';
import electronic from '../assets/electronic.png';
import sport from '../assets/sport.png'

export default function SellerCategories() {
  const categories = [
    { img: furniture, name: "Furniture" },
    { img: vehicle, name: "Vehicle" },
    {img: electronic, name: "OutDoor Furniture"},
    {img:sport,name:"Sport Product"},
  ];

  return (
    <div className="mt-5 SellerCategories">
      <div className="card sellercard">
        <h1 className="title mb-5">Select the Categories</h1>
        <div className="row">
          {categories.map((categoryData, index) => (
            <div className="col-3 p-5" key={index}>
              <div className="product-card " >
                <img src={categoryData.img} className="img-fluid" alt={categoryData.name} width={360} height={360} />
              </div>
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}