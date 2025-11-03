import React, { useState } from  'react';

const OfficeProductFilter = ({onFliterChange})=>{
    const [Fliter, setFilter] = useState({
        category:'',
        price:'',
    });

    const handleChange = (e)=>
    {
        const {name,value} =e.target;
        const updated={...Fliter,[name]:value};
        setFilter(updated);
        onFliterChange(updated);
    }

    return(
        <div className="p-3 border rounded bg-light">
            <h3>Fliter Change</h3>

            <div className="mb-3">
                <label>Categories</label>
                <select name="category" className='form-select' onChange={handleChange} value={Fliter.category}>
                    <option value="">All</option>
                    <option value="Chairs">Chairs</option>
                    <option value="Tables">Tables</option>
                    <option value="Storage">Storage</option>
                    <option value="Conference">Conference</option>
                    <option value="Seating">Seating</option>
                </select>
            </div>

            <div className="mb-3">
                <label>Price</label>
                <select name="price" className='form-select' onChange={handleChange} value={Fliter.price}>
                    <option value="">All</option>
                    <option value="0-10000">₹0-₹10,000</option>
                    <option value="10000-20000">₹10,000-₹20,000</option>
                    <option value="20000-30000">₹20,000-₹30,000</option>
                    <option value="30000-40000">₹30,000-₹40,000</option>
                    <option value="40000-50000">₹40,000-₹50,000</option>
                    <option value="50000+">₹50,000+</option>
                </select>
            </div>
        </div>
    )
}

export default OfficeProductFilter;
