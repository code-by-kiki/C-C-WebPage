import React from "react";
import Gif from '../assets/Gif.gif';
import '../Page/Product.css';
import bike from "../assets/bike.jpg";
import Car from "../assets/Cars.jpg";
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
     <div className="container-fluid ProductPage" style={style}>
      <div className="row">
        {vehicles.map((Data, index) => (
          <div className="col-md-4  " key={index} style={{ display: "grid" }}>
            <div className=" product-card bg-light">
              <Link to={Data.link}>
                <img
                  src={Data.img}
                  alt={`Vehicle ${index + 1}`}
                  className="img-fluid"
                  style={{ maxHeight: "300px", objectFit: "contain" }}
                   width={500} height={300}
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const style={
  backgroundImage: Gif,
  backgroundSize: 'cover',
  backgroundRepeat:'no-repeat',
  backgroundPosition:'center',
  
}