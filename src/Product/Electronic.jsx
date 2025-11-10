import React from "react";
import smart from '../assets/Smart.jpg';
import tv from '../assets/Tv.jpg';
import phone from '../assets/smartphones.jpg';
import laptop from '../assets/Laptops.webp';
import watches from '../assets/Watches.webp';
import { Link } from "react-router-dom";

export default function Electronics()
{

    const Electronic=[
        {img:phone,link:'/ProductComponents/Electronic/Phone'},
        {img:laptop,link:'/ProductComponents/Electronic/Laptop'},
        {img:watches,link:'/ProductComponents/Electronic/Watches'},
        {img:smart,link:'/ProductComponents/Electronic/HomeGadgets'},
        {img:tv , link:'/ProductComponents/Electronic/Display'}
    ]
    return(

   <div className="container-fluid ProductPage mt-5 mb-5">
  <div className="row">
    {Electronic.map((data, index) => (
      <div  key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex align-items-stretch" >
        <div className="card product-card w-100">
          <Link to={data.link}>
            <img
              src={data.img}
              alt="Product"
              className="img-fluid"
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </Link>
        </div>
      </div>
    ))}
  </div>
</div>

    )

} 

