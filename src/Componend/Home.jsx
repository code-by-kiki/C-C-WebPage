import React from "react";

export default function Home({Name,Img,Id,Price,Brand})
{
  return(
  <div >
  <div className="col-md-4  col-sm-6 mt-5 mb-4 ProductCard" key={Id}>
    <div className="card justify-content-end" style={{width:350, height:350,backgroundColor:"none"}}>
       <img src={Img} alt="Pic" />
      <h4 className="card-title fw-bold">Name : {Name}</h4>
      <h5>Price : {Price}</h5>
      <h5>Brand :{Brand} </h5>
    </div>
  </div>
  </div>
  )
}