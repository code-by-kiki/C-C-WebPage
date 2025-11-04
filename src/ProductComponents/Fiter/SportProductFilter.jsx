import React, { useState } from 'react';

const SportProductFilter =({onFilterChange})=>
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
        <div className="p-3 border rounder bg-light">
            <h5>Filter Product</h5>

            <div className="mb-3">
                <label>Category</label>
                <select name="category" className='form-select' onChange={handleChange} value={Filter.category}>
                    <option value="">All</option>
                    <option value="Team Sports">Team Sports</option>
                    <option value="Racquet Sports">Racquet Sports</option>
                    <option value="Water Sports">Water Sports</option>
                    <option value="Skating">Skating</option>
                    <option value="Archery">Archery</option>
                    <option value="Indoor Games">Indoor Games</option>
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
                        <option value="50000+">₹50000+</option>
                </select>
            </div>
        </div>
    )
}
export default SportProductFilter;