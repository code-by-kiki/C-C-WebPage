import React, { useState } from "react";
import outdoorproduct from "../../Product/Data/OutdoorData";
import OutDoorProductFilter from "../Fiter/OutdoorFliter";

const OutDoorPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(outdoorproduct);

  const applyFilter = (FilterData) => {
    let result = outdoorproduct;

    if (FilterData.category) {
      result = result.filter((p) => p.category === FilterData.category);
    }

    if (FilterData.price) {
      const { min, max } = FilterData.price;
      result = result.filter((p) => {
        const price = parseInt(p.price);
        if (max) {
          return price >= min && price <= max;
        }
        return price >= min;
      });
    }

    setFilteredProducts(result);
  };

  return (
    <div className="container" style={{ marginTop: 150 }}>
      <div className="row">
        <div className="col-md-3">
          <OutDoorProductFilter onFilterChange={applyFilter} />
        </div>

        <div className="col-md-9">
          <div className="row">
            {filteredProducts.map((product, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card h-100">
                  <img src={product.img} alt={product.name} className="card-img-top" />
                  <div className="card-body">
                    <h6>{product.name}</h6>
                    <p>₹{product.price}</p>
                    <small>{product.brand} | {product.category} | {product.type}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutDoorPage;