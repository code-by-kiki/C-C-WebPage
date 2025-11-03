import React, { useState } from 'react';

const ProductFilter = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    category: '',
    brand: '',
    price: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...filters, [name]: value };
    setFilters(updated);
    onFilterChange(updated);
  };

  return (
    <div className="p-3 border rounded bg-light">
      <h5 className="mb-3">Filter Products</h5>

      <div className="mb-3">
        <label>Category</label>
        <select name="category" className="form-select" onChange={handleChange}>
          <option value="">All</option>
          <option value="Ladies Cycle">Ladies’ Cycles</option>
          <option value="Kid Cycle">Kids’ Cycles</option>
          <option value="Electric Cycle">Electric Cycles</option>
        </select>
      </div>

      <div className="mb-3">
        <label>Brand</label>
        <select name="brand" className="form-select" onChange={handleChange}>
          <option value="">All</option>
          <option value="BS Ladybird">BS Ladybird</option>
          <option value="Fire Fox">Fire Fox</option>
          <option value="Hercules">Hercules</option>
        </select>
      </div>

      <div className="mb-3">
        <label>Price Range</label>
        <select name="price" className="form-select" onChange={handleChange}>
          <option value="">All</option>
          <option value="0-2000">₹0 - ₹2000</option>
          <option value="2000-10000">₹2000 - ₹10000</option>
          <option value="10000+">₹10000+</option>
        </select>
      </div>
    </div>
  );
};

export default ProductFilter;