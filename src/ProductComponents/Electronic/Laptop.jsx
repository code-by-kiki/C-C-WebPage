import React, { useState } from "react";
import LaptopProductFilter from "../Fiter/LaptopProductFliter";
import laptopproduct from "../../Product/Data/LaptopproductData";

export default function LaptopPage() {
  const [filtered, setFiltered] = useState(laptopproduct);

  const applyFilter = (filter) => {
    let result = laptopproduct;

    if (filter.brand) {
      result = result.filter(
        (p) => p.brand.trim().toLowerCase() === filter.brand.trim().toLowerCase()
      );
    }

    if (filter.RAM) {
      result = result.filter(
        (p) => p.RAM.trim().toLowerCase() === filter.RAM.trim().toLowerCase()
      );
    }

    if (filter.storage) {
      result = result.filter(
        (p) => p.storage.trim().toLowerCase() === filter.storage.trim().toLowerCase()
      );
    }

    if (filter.price) {
      const [min, max] = filter.price.split("-");
      result = result.filter((p) => {
        const price = parseInt(p.price);
        if (max) return price >= parseInt(min) && price <= parseInt(max);
        return price >= parseInt(min);
      });
    }

    setFiltered(result);
  };

  return (
    <div className="container" style={{ marginTop: 150 }}>
      <div className="row">
        <div className="col-md-3">
          <LaptopProductFilter onFilterChange={applyFilter} />
        </div>
        <div className="col-md-9">
          <div className="row">
            {filtered.map((laptop, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card h-100">
                  <img src={laptop.img} className="card-img-top" alt={laptop.name} />
                  <div className="card-body">
                    <h6>{laptop.name}</h6>
                    <p>₹{laptop.price}</p>
                    <small>{laptop.brand} | {laptop.RAM} | {laptop.storage}</small>
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