import React, { useState } from "react";

const WatchProductFilter = ({ onFilterChange }) => {
  const [filter, setFilter] = useState({
    brand: '',
    watch: '',
    gender: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...filter, [name]: value };
    setFilter(updated);
    onFilterChange(updated);
  };

  return (
    <div className="p-3 border rounded bg-light">
      <h5>Filter Product</h5>

      {/* Brand Filter */}
      <div className="mb-3">
        <label>Brand</label>
        <select name="brand" className="form-select" onChange={handleChange}>
          <option value="">All</option>
          <option value="Revogue">Revogue</option>
          <option value="AMERICANVIBER">AMERICANVIBER</option>
          <option value="BESTKANG">BESTKANG</option>
          <option value="Titan">Titan</option>
        </select>
      </div>

      {/* Watch Type Filter */}
      <div className="mb-3">
        <label>Watch Type</label>
        <select name="watch" className="form-select" onChange={handleChange}>
          <option value="">All</option>
          <option value="Chronograph">Chronograph</option>
          <option value="Analog">Analog</option>
          <option value="Square Dial">Square Dial</option>
          <option value="Stainless Steel">Stainless Steel</option>
        </select>
      </div>

      {/* Gender Filter */}
      <div className="mb-3">
        <label>Gender</label>
        <select name="gender" className="form-select" onChange={handleChange}>
          <option value="">All</option>
          <option value="men">Men's</option>
          <option value="Ladies">Ladies</option>
        </select>
      </div>

      {/* Price Filter */}
      <div className="mb-3">
        <label>Price</label>
        <select name="price" className="form-select" onChange={handleChange}>
          <option value="">All</option>
          <option value="0-1000">₹0–₹1000</option>
          <option value="1000-2000">₹1000–₹2000</option>
          <option value="2000-3000">₹2000–₹3000</option>
          <option value="3000-4000">₹3000–₹4000</option>
          <option value="5000">₹5000+</option>
        </select>
      </div>
    </div>
  );
};

export default WatchProductFilter;