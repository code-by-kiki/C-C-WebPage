import React,{useState} from 'react';

const BedRoomProductFilter =({onFilterChange})=>
{
    const [Filters,setFilters]=useState({
        price:'',
        material:'',
        dimension:'',
    });

    const handleChange = (e) => {
        const {name,value}=e.target;
        const updated={...Filters,[name]:value};
        setFilters(updated);
        onFilterChange(updated);
    };

    return(
        <div className="p-3 border rounded bg-light">
            <h5>Filter Products</h5>

            <div className="mb-3">
                <label>Material</label>
                <select name="material" className='form-select' onChange={handleChange} value={Filters.material}>
                    <option value="">All</option>
                    <option value="Solid Wood">Solid Wood</option>
                    <option value="Engineered Wood">Engineered Wood</option>
                    <option value="Metal Frame">Metal Frame</option>
                    <option value="Upholstered">Upholstered</option>
                </select>
            </div>

            <div className="mb-3">
                <label>Dimension</label>
                <select name="dimension" className='form-select' onChange={handleChange} value={Filters.dimension}>
                 <option value="">All</option>
                 <option value="Single">Single</option>
                 <option value="Double">Double</option>
                 <option value="Queen">Queen</option>
                 <option value="King">King</option>
                 <option value="Italian King">Italian King</option>
                 <option value="California King">California King</option>
                 <option value="Super King">Super King</option>
                </select>
            </div>

            <div className="mb-3">
                <label>Price</label>
                <select name="price" className='form-select' onChange={handleChange} value={Filters.price}>
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

export default BedRoomProductFilter;