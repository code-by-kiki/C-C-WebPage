import React, { useState } from "react";
import SmartGadgetsFilter from '../../ProductComponents/Fiter/smartgadgetfliter';
import smartproduct from "../../Product/Data/smartgadgetData";

const SmartGadget = () => {
  const [filteredProducts, setFilteredProducts] = useState(smartproduct);

  const applyFilter = (filterData) => {
    let result = smartproduct;
 
    if (filterData.price) {
      const [min, max] = filterData.price.split("-");
      result = result.filter((p) => {
        const price = parseInt(p.price);
        if (max) {
          return price >= parseInt(min) && price <= parseInt(max);
        }
        return price >= parseInt(min);
      });
    }

    if (filterData.type) {
      result = result.filter((p) => p.type === filterData.type);
    }

    setFilteredProducts(result);
  };

  return (
    <div className="container" style={{ marginTop: 150 }}>
      <div className="row">
        <div className="col-md-3">
          <SmartGadgetsFilter onFilterChange={applyFilter} />
        </div>

        <div className="col-md-9">
          <div className="row">
            {filteredProducts.map((gadget, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card h-100">
                  <img src={gadget.img} alt={gadget.name} className="card-img-top" />
                  <div className="card-body">
                    <h6>{gadget.name}</h6>
                    <p>₹{gadget.price}</p>
                    <small>{gadget.type} | {gadget.brand}</small>
                  </div>
                </div>
              </div>
            ))}
            {filteredProducts.length === 0 && <p>No Products Found</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartGadget;