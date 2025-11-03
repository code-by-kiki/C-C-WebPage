import React, { useState } from "react";
import CarProductFilter from "../../ProductComponents/Fiter/carproductfilter";
import carproduct from "../../Product/Data/carproductData";   

export default function CarPage() {
  const [filteredCars, setFilteredCars] = useState(carproduct);

  const applyFilters = (filters) => {
    let result = carproduct;

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

    setFilteredCars(result);
  };

  return (
    <div className="container" style={{ marginTop: 150 }}>
      <div className="row">
        
        <div className="col-md-3">
          <CarProductFilter onFilterChange={applyFilters} />
        </div>

        <div className="col-md-9">
          <div className="row">
            {filteredCars.map((car, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card h-100">
                  <img src={car.img} className="card-img-top" alt={car.name} />
                  <div className="card-body">
                    <h6>{car.name}</h6>
                    <p>₹{car.price}</p>
                    <small>{car.brand} | {car.category}</small>
                  </div>
                </div>
              </div>
            ))}
            {filteredCars.length === 0 && <p>No products found.</p>}
          </div>
        </div>
      </div>
    </div>
  );
}