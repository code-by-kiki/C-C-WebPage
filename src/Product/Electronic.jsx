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
    <div className="container-fluid " style={{marginTop:150,marginBottom:100}}>
        <div className="row">
            {Electronic.map((data=>(
                <div className="col-md-4 co-sm-6 mb-4" style={{ display: "grid" }}>
                    <div className="card product-card h-100">
                        <Link to={data.link}>
                         <img src={data.img} alt="Image" className="img-fluid" width={600} height={300}/>
                        </Link>
                    </div>
                </div>
            )))}
        </div>
        
    </div>
    )

} 

