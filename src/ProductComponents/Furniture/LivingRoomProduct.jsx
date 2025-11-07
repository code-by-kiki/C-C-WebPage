import React, { useState } from "react";
import livingroomproduct from "../../Product/Data/LivingRoomProductData";
import LivingRoomFilter from "../Fiter/LivingRoomFilter";
import '../../Page/Product.css';

const LivingRoomPage = () =>
{
    const [Filter,setFilter] = useState(livingroomproduct);

    const applyFilter = (Filterdata) =>{
        let result= livingroomproduct;

        if (Filterdata.Product){
            result = result.filter((p)=>p.Product === Filterdata.Product);
        }

       if (Filterdata.price) {
        let [min, max] = Filterdata.price.split('-');
         const hasMax = !!max;
         result = result.filter((p) => {
         const price = parseInt(p.price);
        if (hasMax) {
             return price >= parseInt(min) && price <= parseInt(max);
         }
    return price >= parseInt(min);
  });
}

        setFilter(result);
    }
    return(
        <div className="container" style={{marginTop:150}}>
            <div className="row">
                <div className="col-md-3">
                    <LivingRoomFilter onFilterChange={applyFilter}/>
                </div>
                <div className="col-md-9">
                    <div className="row">
                        {Filter.map((product,index)=>(
                          <div className="col-md-4">
                            <div className="card h-100" key={index}>
                                 <img src={product.img} alt={product.name} className="card-img-top"/>
                                <div className="card-body">
                                    <h6>{product.name} </h6>
                                    <p>{product.description} </p>
                                    <pre>₹{product.price} </pre>
                                    <small>{product.brand} | {product.type} | {product.Product} </small>
                                </div>
                            </div>
                          </div>
                        ))}
                        {Filter.length === 0 && <p>No products found.</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LivingRoomPage;