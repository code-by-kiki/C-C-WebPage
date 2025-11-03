import React, { useState } from "react";
import BikeProductFliter from "../../ProductComponents/Fiter/bikeproductfliter";
import bikeproduct from '../../Product/Data/bikeproductData';

export default function BikePage() 
{
  const [filtered, setFiltered] = useState(bikeproduct);

  const applyFilters = (filters) => 
    {
    let result = bikeproduct;

    if (filters.category) {
      result = result.filter(p => p.category === filters.category);
    }

    if (filters.brand) {
      result = result.filter(p => p.brand === filters.brand);
    }

    if (filters.price) {
      const [min, max] = filters.price.split('-');
      result = result.filter(p => {
        if (max) return p.price >= parseInt(min) && p.price <= parseInt(max);
        return p.price >= parseInt(min);
      });
    }

    setFiltered(result);
  };

  return (
    <div className="container" style={{ marginTop: 150 }}>
      <div className="row">
        <div className="col-md-3">
          <BikeProductFliter onFilterChange={applyFilters} />
        </div>
        <div className="col-md-9">
          <div className="row">
            {filtered.map((bike, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card h-100">
                  <img src={bike.img} className="card-img-top" alt={bike.name} />
                  <div className="card-body">
                    <h6>{bike.name}</h6>
                    <p>₹{bike.price}</p>
                    <small>{bike.brand} | {bike.category}</small>
                  </div>
                </div>
              </div>
            ))}
            {filtered.length === 0 && <p>No products found.</p>}
          </div>
        </div>
      </div>
    </div>
  );
}