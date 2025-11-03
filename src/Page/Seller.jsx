import React from "react";
import { Link } from "react-router-dom";
import './Seller.css'
export default function Seller()
{
    return(
    <div className="container-fluid postpage  " style={{alignItems:"center",}}>    
        <div className="card p-4" style={{alignItems:"center", gap:50,}}>
           <h1> Sell your Product </h1>
            <Link to="/SellerCategories" className="nav-link Seller">
               <button className="Button"> Create Post  </button>
           </Link>
           <Link to="/OtherPost" className="nav-link OtherPost">
              <button className="Button">Other Post </button>
           </Link>
        </div>
       
    </div>
    )
} 
