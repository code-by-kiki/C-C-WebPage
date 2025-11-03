import React from "react";
import gym from '../assets/gym.jpg';
import tent from '../assets/Tent.png';
import { Link } from "react-router-dom";


export default function Sports()
{
  const Sport =[
    {img:gym,link:'/ProductComponents/Sport/GymProduct'},
    {img:tent,link:'/ProductComponents/Sport/Tent'}
  ]

    return(
        <div className="container-fluid " style={{marginTop:150,marginBottom:100}}>
            <div className="row">
                {Sport.map((sportData)=>
                (
                    <div className="col-md-4">
                        <Link to={sportData.link}>
                        <div className="card product-card h-100" >
                           <img src={sportData.img} alt="Image" className="img-fluid"/>
                        </div>
                        
                        </Link>
                    </div>
                ))}
            </div>
          
        </div>
    )
}
