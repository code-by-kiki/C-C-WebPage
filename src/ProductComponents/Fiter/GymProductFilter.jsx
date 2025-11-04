import React, { useState } from 'react';

const GymProductFilter =({onFilterChange})=>
{
    const [Filter,setFilter] =useState({
        category : '',
        price : '',
    })

    const handleChange = (e) =>{
        const {name,value} =e.target;
        const updated = {...Filter,[name]:value};
        setFilter(updated);
        onFilterChange(updated);
    }

    return(
        <div className="p-3 border rounded bg-light">
            <h5>Filter Product</h5>

            <div className="mb-3">
                <label>Category</label>
                <select name="category" className='form-select' onChange={handleChange} value={Filter.category}>
                    <option value="">All</option>
                    <option value="Cardio Equipment">Cardio Equipment</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Strength Equipment">Strength Equipment</option>
                    <option value="Recovery & Rehab">Recovery & Rehab</option>
                    <option value="Flexibility & Mobility">Flexibility & Mobility</option>
                    <option value="Functional Training">Functional Training</option>
                </select>
            </div>

            <div className="mb-3">
                <label>Price</label>
                <select name="price" className='form-select' onChange={handleChange} value={Filter.price} >
                    <option value="">All</option>
                    <option value="0-10000">₹0-₹10000</option>
                     <option value="10000-20000">₹10000-₹20000</option>
                      <option value="20000-30000">₹20000-₹30000</option>
                       <option value="30000-40000">₹30000-₹40000</option>
                        <option value="40000-50000">₹40000-₹50000</option>
                        <option value="50000+">₹50000+</option>
                </select>
            </div>
        </div>
    )
}
export default GymProductFilter;