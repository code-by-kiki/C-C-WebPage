import React, { useState } from "react";
import phoneproduct from "../../Product/Data/phoneproductData";
import PhoneproductFliter from "../Fiter/phoneproductfliter";

const PhonePage = () => {
  const [filteredProducts, setFilteredProducts] = useState(phoneproduct);

  const applyFilters = (filters) => {
    let result = phoneproduct;

    if (filters.brand) {
      result = result.filter(p => p.brand.trim().toLowerCase() === filters.brand.trim().toLowerCase());
    }

    if (filters.RAM) {
      result = result.filter(p => p.RAM.trim().toLowerCase() === filters.RAM.trim().toLowerCase());
    }

    if (filters.storageCapacity) {
      result = result.filter(p => p.storageCapacity.trim().toLowerCase() === filters.storageCapacity.trim().toLowerCase());
    }

    if (filters.price) {
      const [min, max] = filters.price.split('-');
      result = result.filter(p => {
        const price = parseInt(p.price);
        if (max) return price >= parseInt(min) && price <= parseInt(max);
        return price >= parseInt(min);
      });
    }

    setFilteredProducts(result);
  };

  return (
    <div className="container" style={{ marginTop: 150 }}>
      <div className="row">
        <div className="col-md-3">
          <PhoneproductFliter onFliterChange={applyFilters} />
        </div>
        <div className="col-md-9">
          <div className="row">
            {filteredProducts.map((phone, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card h-100">
                  <img src={phone.img} className="card-img-top" alt={phone.name} />
                  <div className="card-body">
                    <h6>{phone.name}</h6>
                    <p>₹{phone.price}</p>
                    <small>{phone.brand} | {phone.RAM} | {phone.storageCapacity}</small>
                  </div>
                </div>
              </div>
            ))}
            {filteredProducts.length === 0 && <p>No products found.</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhonePage;