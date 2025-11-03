import React, { useState } from 'react';

const OutDoorProductFilter = ({ onFilterChange }) => {
  const [filter, setFilter] = useState({
    category: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updated = { ...filter, [name]: value };

    // Convert price string to object {min, max}
    if (name === "price" && value) {
      if (value.includes("+")) {
        updated.price = { min: parseInt(value), max: null };
      } else {
        const [min, max] = value.split("-").map((v) => parseInt(v));
        updated.price = { min, max };
      }
    }

    setFilter(updated);
    onFilterChange(updated);
  };

  return (
    <div className="p-3 border rounded bg-light">
      <h3>Filter Options</h3>

      <div className="mb-3">
        <label>Category</label>
        <select
          name="category"
          className="form-select"
          onChange={handleChange}
          value={filter.category}
        >
          <option value="">All</option>
          <option value="Camping & Hiking Gear">Camping & Hiking Gear</option>
          <option value="Outdoor Furniture & Living">Outdoor Furniture & Living</option>
          <option value="Outdoor Apparel & Footwear">Outdoor Apparel & Footwear</option>
          <option value="Gardening & Landscaping">Gardening & Landscaping</option>
        </select>
      </div>

      <div className="mb-3">
        <label>Price</label>
        <select
          name="price"
          className="form-select"
          onChange={handleChange}
          value={filter.price.min ? `${filter.price.min}-${filter.price.max || '+'}` : ''}
        >
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

export default OutDoorProductFilter;
