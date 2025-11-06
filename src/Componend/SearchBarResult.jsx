import React from 'react';
import { useLocation } from 'react-router-dom';

export default function SearchResults() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');

  return (
    <div className="container mt-5 pt-5">
         {query}
    </div>
  );
}

