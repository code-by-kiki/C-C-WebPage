import React, { useState } from "react";
import WatchProductFilter from '../../ProductComponents/Fiter/watchproductfliter';
import watchproduct from "../../Product/Data/watchproductData";

const WatchesPage = () => {
  const [filtered, setFiltered] = useState(watchproduct);

  const applyFilter = (filter) => {
    let result = watchproduct;

    if (filter.brand) {
      result = result.filter(p => p.brand === filter.brand);
    }

    if (filter.watch) {
      result = result.filter(p => p.watch === filter.watch);
    }

    if (filter.gender) {
      result = result.filter(p => p.gender === filter.gender);
    }

    if (filter.price) {
      const [min, max] = filter.price.split('-');
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
          <WatchProductFilter onFilterChange={applyFilter} />
        </div>
        <div className="col-md-9">
          <div className="row">
            {filtered.map((watch, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card h-100">
                  <img src={watch.img} className="card-img-top" alt={watch.name} />
                  <div className="card-body">
                    <h6>{watch.name}</h6>
                    <p>₹{watch.price}</p>
                    <small>{watch.brand} | {watch.watch} | {watch.gender}</small>
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

export default WatchesPage;