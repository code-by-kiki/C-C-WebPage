import React from "react";
import bike from "../assets/bike.jpg";
import Car from "../assets/Car.jpg";
import jeep from "../assets/Jeep.jpg";
import bicycle from "../assets/Bicycle.webp";
import { Link } from "react-router-dom";

export default function Vehicles() {
  const vehicles = [
    { img: bike, link: "/ProductComponents/Bike" },
    { img: Car, link: "/ProductComponents/Car" },
    { img: jeep, link: "/ProductComponents/Jeep" },
    { img: bicycle, link: "/ProductComponents/Bicycle" },
  ];

  return (
    <div className="container-fluid" style={{ marginTop: 150, marginBottom: 100 }}>
      <div className="row">
        {vehicles.map((Data, index) => (
          <div className="col-md-4 mb-4 col-sm-6" key={index} style={{ display: "grid" }}>
            <div className="card product-card ">
              <Link to={Data.link}>
                <img
                  src={Data.img}
                  alt={`Vehicle ${index + 1}`}
                  className="img-fluid"
                  style={{ maxHeight: "300px", objectFit: "contain" }}
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}