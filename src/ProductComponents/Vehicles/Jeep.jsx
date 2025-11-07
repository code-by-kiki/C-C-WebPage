import React, { useState } from "react";
import JeepProductFliter from '../../ProductComponents/Fiter/jeepproductfliter';
import jeepproduct from "../../Product/Data/jeepproductData";
import '../../Page/Product.css';
export default function JeepPage()
{
    const [fliter, setfliter] = useState(jeepproduct);
     
    const applyFliters = (fliter) =>
    {
        let result =jeepproduct;

        if(fliter.category)
        {
            result =result.filter(p => p.category === fliter.category);
        }

        if(fliter.brand)
        {
            result = result.filter(p => p.brand === fliter.brand);
        }

        if(fliter.price)
        {
            const [min,max] =fliter.price.split('-');
            result = result.filter(p=> { 
                if (max) return p.price >= parseInt(min) && p.price <= parseInt(max);
               return p.price >= parseInt(min); 
            });
        }

        setfliter(result);
    };

    return(
        <div className="container" style={{ marginTop: 150 }}>
      <div className="row">

        <div className="col-md-3">
          <JeepProductFliter onFilterChange={applyFliters} />
        </div>

        <div className="col-md-9">
          <div className="row">
            {fliter.map((jeep, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card h-100">
                  <img src={jeep.img} className="card-img-top" alt={jeep.name} />
                  <div className="card-body">
                    <h6>{jeep.name}</h6>
                    <p>{jeep.description}</p>
                    <pre>₹{jeep.price}</pre>
                    <small>{jeep.brand} | {jeep.category}</small>
                  </div>
                </div>
              </div>
            ))}
            {fliter.length === 0 && <p>No products found.</p>}
          </div>
        </div>
      </div>
    </div>
    )
}