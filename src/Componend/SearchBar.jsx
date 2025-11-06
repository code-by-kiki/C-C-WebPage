// components/SearchBar.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="d-flex align-items-center">
      <input
        type="text"
        placeholder="Search"
        className="form-control rounded-pill px-3"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="btn btn-link ">
        <i className="bi bi-search"></i>
      </button>
    </form>
  );
}

