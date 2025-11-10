import React from "react";
import '../Page/Product.css'
import gym from '../assets/gym.jpg';
import tent from '../assets/sport.png';
import { Link } from "react-router-dom";


export default function Sports()
{
  const Sport =[
    {img:gym,link:'/ProductComponents/Sport/GymProduct'},
    {img:tent,link:'/ProductComponents/Sport/SportProduct'}
  ]

    return(
        <div className="container-fluid ProductPage">
            <div className="row">
                {Sport.map((sportData)=>
                (
                   <div  className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex align-items-stretch" >
                        <Link to={sportData.link}>
                        <div className="card product-card " style={{ width: 450, height: 400 }} >
                           <img src={sportData.img} alt="Image" className="img-fluid"  />
                        </div>
                        
                        </Link>
                    </div>
                ))}
            </div>
          
        </div>
    )
}
