import React,{useState} from "react";

const JeepProductFliter=({onFilterChange})=>
{
    const [fliter, setfliter] =useState ({
        category : '',
        barnd : '',
        price :'',
    });

    const handleChange = (e) => {
        const {name, value} =e.target;
        const updated={...fliter,[name] : value};
        setfliter(updated);
        onFilterChange(updated);
    };

    return(
    <div className="p-3 border rounded bg-light">
      <h5>Fliter Products</h5>

      {/* Category Filter */}
      <div className="mb-3">
        <label>Category</label>
        <select name="category" className="form-select" onChange={handleChange}>
          <option value="">All</option>
          <option value="Utility Jeeps">EUtility Jeeps</option>
          <option value="SUV Jeeps">SUV Jeeps</option>
        </select>
      </div>

      {/* Brand Filter */}
      <div className="mb-3">
        <label>Brand</label>
        <select name="brand" className="form-select" onChange={handleChange}>
          <option value="">All</option>
          <option value="Mahindra">Mahindra</option>
          <option value="Jeep India">Jeep India</option>
        </select>
      </div>

      {/* Price Filter */}
      <div className="mb-3">
        <label>Price</label>
        <select name="price" className="form-select" onChange={handleChange}>
          <option value="">All</option>
          <option value="200000-350000">₹2,00,000 - ₹3,50,000</option>
          <option value="350000-500000">₹3,50,000 - ₹5,00,000</option>
          <option value="500000-700000">₹5,00,000 - ₹7,00,000</option>
          <option value="700000+">₹7,00,000+</option>
        </select>
      </div>
    </div>
  );
};

export default JeepProductFliter;