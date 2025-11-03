import React, { useState } from "react";

const LaptopProductFilter = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    RAM: "",
    brand: "",
    storage: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...filters, [name]: value };
    setFilters(updated);
    onFilterChange(updated);
  };

  return (
    <div className="p-3 border rounded bg-light">
      <h3 className="mb-3">Product Filters</h3>

      <div className="mb-3">
        <label>Brand</label>
        <select name="brand" className="form-select" onChange={handleChange} value={filters.brand}>
          <option value="">All</option>
          <option value="Lenovo">Lenovo</option>
          <option value="Samsung">Samsung</option>
          <option value="I Kall">I Kall</option>
          <option value="ASUS">ASUS</option>
          <option value="HP">HP</option>
        </select>
      </div>

      <div className="mb-3">
        <label>RAM Sizes</label>
        <select name="RAM" className="form-select" onChange={handleChange} value={filters.RAM}>
          <option value="">All</option>
          <option value="3 GB">3GB</option>
          <option value="6 GB">6GB</option>
          <option value="8 GB">8GB</option>
          <option value="16 GB">16GB</option>
        </select>
      </div>

      <div className="mb-3">
        <label>Storage Capacity</label>
        <select name="storage" className="form-select" onChange={handleChange} value={filters.storage}>
          <option value="">All</option>
          <option value="32GB">32GB</option>
          <option value="64GB">64GB</option>
          <option value="128GB">128GB</option>
          <option value="512GB">512GB</option>
          <option value="512 GB SSD">512 GB SSD</option>
          <option value="1 TB SSD">1 TB SSD</option>
        </select>
      </div>

      <div className="mb-3">
        <label>Price</label>
        <select name="price" className="form-select" onChange={handleChange} value={filters.price}>
          <option value="">All</option>
          <option value="0-10000">₹0–₹10,000</option>
          <option value="10000-20000">₹10,000–₹20,000</option>
          <option value="20000-30000">₹20,000–₹30,000</option>
          <option value="30000-50000">₹30,000–₹50,000</option>
          <option value="50000">₹50,000+</option>
        </select>
      </div>
    </div>
  );
};

export default LaptopProductFilter;