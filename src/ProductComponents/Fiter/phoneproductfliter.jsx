import React, { useState } from 'react';

const PhoneproductFliter = ({ onFliterChange }) => {
  const [filters, setFilter] = useState({
    RAM: '',
    brand: '',
    storageCapacity: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...filters, [name]: value };
    setFilter(updated);
    onFliterChange(updated);
  };

  return (
    <div className="p-3 border rounded bg-light">
      <h3 className="mb-3">Filter Products</h3>

      <div className="mb-3">
        <label>Brand</label>
        <select name="brand" className="form-select" onChange={handleChange} value={filters.brand}>
          <option value="">All</option>
          <option value="Samsung">Samsung</option>
          <option value="Apple">Apple</option>
          <option value="Xiaomi">Xiaomi</option>
          <option value="Realme">Realme</option>
          <option value="Vivo">Vivo</option>
          <option value="Itel">Itel</option>
          <option value="Oppo">Oppo</option>
        </select>
      </div>

      <div className="mb-3">
        <label>RAM Sizes</label>
        <select name="RAM" className="form-select" onChange={handleChange} value={filters.RAM}>
          <option value="">All</option>
          <option value="4GB">4GB</option>
          <option value="6GB">6GB</option>
          <option value="8GB">8GB</option>
          <option value="12GB">12GB</option>
        </select>
      </div>

      <div className="mb-3">
        <label>Storage Capacity</label>
        <select name="storageCapacity" className="form-select" onChange={handleChange} value={filters.storageCapacity}>
          <option value="">All</option>
          <option value="64GB">64GB</option>
          <option value="128GB">128GB</option>
          <option value="256GB">256GB</option>
          <option value="512GB">512GB</option>
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
        </select>
      </div>
    </div>
  );
};

export default PhoneproductFliter;