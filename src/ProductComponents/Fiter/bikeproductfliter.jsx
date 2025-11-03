import { filter } from "framer-motion/client";
import React ,{useState}from "react";

const BikeProductFliter =({onFilterChange})=>
{
    const [Filter , setFilter] = useState(
        {
            name: '',
            brand:'',
            price:''
        }
    );

   const handleChange = (e) =>
    {
        const {name, value} =e.target;
        const updated = { ...filter, [name]:value};
        setFilter (updated);
        onFilterChange(updated); 
    }
    
    return(
      <div className="p-3 border rounded bg-light">
         <h5 className="mb-3">Filter Products</h5>

           <div className="mb-3">
        <label>Category</label>
        <select name="category" className="form-select" onChange={handleChange}>
          <option value="">All</option>
          <option value="Scooters">Scooter</option>
          <option value="Bikes">Bikes</option>
          <option value="Electric vehicle">Electric Two-Wheeler</option>
        </select>
      </div>

         <div className="mb-3">
            <label>Brand</label>
            <select name="brand" className="form-select" onChange={handleChange}>
                <option value="">All</option>
                <option value="Bajaj Auto">Bajaj Auto</option>
                <option value="Yamaha">Yamaha</option>
                <option value="Suzuki">Suzuki</option>
            </select>
         </div>

         <div className="mb-3">
            <label >Price </label>
            <select name="price" className='form-select' onChange={handleChange}>
              <option value="">All</option>
              <option value="50000-200000">₹50000-₹200000</option>
              <option value="200000-500000">₹200000-₹500000</option>
              <option value="500000+">₹ 500000+</option>
            </select>          
        
         </div>
      </div>

    )
}

export default BikeProductFliter;

