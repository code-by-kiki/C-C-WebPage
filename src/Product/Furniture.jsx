import React from "react";
import living from '../assets/Living.webp';
import bedroom from '../assets/bed.webp';
import outdoor from '../assets/Outdoor.webp';
import office from '../assets/Office.webp';
import { Link } from "react-router-dom";

export default function Furniture()
{
   const furniture=[
    {img:living ,link:'/ProductComponents/Furniture/LivingRoomProduct'},
    {img:bedroom ,link:'/ProductComponents/Furniture/BedRoomProduct'},
    {img:outdoor ,link:'/ProductComponents/Furniture/OutDoorProduct'},
    {img:office ,link:'/ProductComponents/Furniture/OfficeProduct'},
  
   ]

    return(
    <div className="container-fluid mb-4 " style={{marginTop:150,marginBottom:100}}>
        <div className="row">
      {furniture.map((FunitureData, index) => (
  <div key={index} className="col-md-4 mb-4" style={{display:"grid"}}>
    <div className="card product-card">
      <Link to={FunitureData.link}>
        <img src={FunitureData.img} alt="Image" className="img-fluid"  width={600} height={300}/>
      </Link>
    </div>
  </div>
))}


        </div>
       
    </div>
    )

} 
