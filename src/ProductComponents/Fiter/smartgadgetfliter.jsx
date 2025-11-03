import React, { useState } from 'react';

const SmartGadgetsFilter = ({ onFilterChange }) => {
  const [filter, setFilter] = useState({
    price: '',
    type: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...filter, [name]: value };
    setFilter(updated);
    onFilterChange(updated);
  };

  return (
    <div className="p-3 border rounded bg-light">
      <h5>Filter Products</h5>

      <div className="mb-3">
        <label>Price</label>
        <select name="price" className="form-select" onChange={handleChange} value={filter.price}>
          <option value="">All</option>
          <option value="0-10000">₹0–₹10,000</option>
          <option value="10000-20000">₹10,000–₹20,000</option>
          <option value="20000-30000">₹20,000–₹30,000</option>
          <option value="30000-40000">₹30,000–₹40,000</option>
          <option value="40000-50000">₹40,000–₹50,000</option>
          <option value="50000">₹50,000+</option>
        </select>
      </div>

      <div className="mb-3">
        <label>Gadget Type</label>
        <select name="type" className="form-select" onChange={handleChange} value={filter.type}>
          <option value="">All</option>
          <option value="Mixer Grinder">Mixer Grinder</option>
          <option value="Water Purifier">Water Purifier</option>
          <option value="Induction Cooktop">Induction Cooktop</option>
          <option value="Air Conditioner">Air Conditioner</option>
          <option value="Washing Machine">Washing Machine</option>
          <option value="Refrigerator">Refrigerator</option>
          <option value="Vacuum Cleaner">Vacuum Cleaner</option>
          <option value="Stabilizer">Stabilizer</option>
        </select>
      </div>
    </div>
  );
};

export default SmartGadgetsFilter;