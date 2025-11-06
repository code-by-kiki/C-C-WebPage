import React, { useState } from "react";
import DisplayProductFliter from "../Fiter/Displayproductfliter";
import displayproduct from "../../Product/Data/DisplayproductData";
export default function DisplayPage()
{
   const [fliter ,setfliter] = useState(displayproduct);
   
   const applyFliter = (fliter) =>
   {
    let result = displayproduct;

    if(fliter.category)
    {
        result = result.filter(p => p.category === fliter.category);
    }

    if(fliter.brand)
    {
        result = result.filter(p => p.brand === fliter.brand);
    }

    if(fliter.price)
    {
        const [min,max] = fliter.price.split('-');
        result = result.filter(p =>{
            if (max) return p.price >= parseInt(min) && p.price <= parseInt(max);
            return p.price >= parseInt(min);
        });
    }

    setfliter(result);
   }

    return(
        <div className="container" style={{marginTop: 150 }}>
          <div className="row">
            <div className="col-md-3">
                <DisplayProductFliter onFilterchange={applyFliter}/>
            </div>
            <div className="col-md-9">
                <div className="row">
                    {fliter.map((display,index)=>(
                      <div className="col-md-4 col-sm-6 mb-4" key={index}>
                          <div className="card h-100">
                            <img src={display.img} className="card-img-top" alt={display.name} />
                            <div className="card-body">
                                <h6>{display.name}</h6>
                                <p> ₹ {display.price} </p>
                                <small> {display.brand} | {display.category} </small>
                            </div>
                          </div>
                      </div>
                    ))}
                </div>
            </div>
          </div>
        </div>
    )
}