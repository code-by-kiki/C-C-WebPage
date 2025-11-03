import React, { useState } from 'react';

const LivingRoomFilter = ({ onFilterChange }) => {
  const [Filter, setFilter] = useState({
    Product: '',
    price: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...Filter, [name]: value };
    setFilter(updated);
    onFilterChange(updated);
  };

  return (
    <div className="p-3 border rounded bg-light">
      <h5>Filter Products</h5>

      <div className="mb-3">
        <label>Product</label>
        <select name="Product" className="form-select" onChange={handleChange} value={Filter.Product}>
          <option value="">All</option>
          <option value="Decor & Accessorie">Decor & Accessorie</option>
          <option value="Storage & Display">Storage & Display</option>
          <option value="Tables">Tables</option>
          <option value="Seating">Seating</option>
        </select>
      </div>

      <div className="mb-3">
        <label>Price</label>
        <select name="price" className="form-select" onChange={handleChange} value={Filter.price}>
          <option value="">All</option>
          <option value="0-10000">₹0–₹10,000</option>
          <option value="10000-20000">₹10,000–₹20,000</option>
          <option value="20000-30000">₹20,000–₹30,000</option>
          <option value="30000-40000">₹30,000–₹40,000</option>
          <option value="40000-50000">₹40,000–₹50,000</option>
          <option value="50000+">₹50,000+</option>
        </select>
      </div>
    </div>
  );
};

export default LivingRoomFilter;