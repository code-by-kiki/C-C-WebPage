import React, { useState } from "react";
import gymproduct from "../../Product/Data/GymProductData";
import GymProductFilter from "../Fiter/GymProductFilter";
import '../../Page/Product.css';
const GymProductPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(gymproduct);

  const applyFilter = (filterData) => {
    let result = [...gymproduct];

    if (filterData.category) {
      result = result.filter((p) => p.category === filterData.category);
    }

    if (filterData.price) {
      let min = 0;
      let max = Infinity;

      if (filterData.price.includes("+")) {
        min = parseInt(filterData.price.replace("+", ""));
      } else {
        [min, max] = filterData.price.split("-").map(Number);
      }

      result = result.filter((p) => {
        const price = parseInt(p.price);
        return price >= min && price <= max;
      });
    }

    setFilteredProducts(result);
  };

  return (
    <div className="container" style={{ marginTop: 200 }}>
      <div className="row">
        <div className="col-md-3">
          <GymProductFilter onFilterChange={applyFilter} />
        </div>

        <div className="col-md-9">
          <div className="row">
            {filteredProducts.map((product, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card h-100">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h6>{product.name}</h6>
                    <p>{product.description} </p>
                    <pre>₹{product.price}</pre>
                    <small>
                      {product.brand} | {product.category} | {product.material}
                    </small>
                  </div>
                </div>
              </div>
            ))}
            {filteredProducts.length === 0 && (
              <p className="text-muted">No products match your filter.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GymProductPage;