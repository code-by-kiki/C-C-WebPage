import React,{useState} from 'react';

const DisplayProductFliter=({onFilterchange})=>
{const [fliter,setfliter]= useState(
    {
        category:'',
        brand:'',
        price:'',
    })

    const handleChange = (e) =>
    {
        const {name,value} = e.target;
        const updated = {...fliter,[name]: value}
        setfliter(updated);
        onFilterchange(updated);
    };

    return(
    <div className="p-3 border rounded bg-light">
      <h5>Filter Products</h5>

      {/* Category Filter */}
      <div className="mb-3">
        <label>Category</label>
        <select name="category" className="form-select" onChange={handleChange}>
          <option value="">All</option>
          <option value="LED TV">LED TV</option>
          <option value="QLED TV">QLED TV</option>
          <option value="Smart TV">Smart TV</option>

        </select>
      </div>

      {/* Brand Filter */}
      <div className="mb-3">
        <label>Brand</label>
        <select name="brand" className="form-select" onChange={handleChange}>
          <option value="">All</option>
          <option value="LG">LG</option>
          <option value="Samsung">Samsung</option>
          <option value="Sony">Sony</option>
          <option value="Xiaomi">Mi / Xiaomi</option>
        </select>
      </div>

      {/* Price Filter */}
      <div className="mb-3">
        <label>Price</label>
        <select name="price" className="form-select" onChange={handleChange}>
          <option value="">All</option>
          <option value="10000-20000">₹10,000 - ₹20,000</option>
          <option value="25000-30000">₹25,000 - ₹30,000</option>
          <option value="30000-40000">₹30,000 - ₹40,000</option>
          <option value="50000+">₹50,000+</option>
        </select>
      </div>
    </div>
  );
};

export default DisplayProductFliter;