import React, { useState } from "react";
import bedroomproduct from "../../Product/Data/BedroomProductData";
import BedRoomProductFilter from "../Fiter/BedRoomFilter";

const BedRoomProduct = () => {
    const [Filter,setFilter]= useState(bedroomproduct);

    const applyFilter = (FilterData ) => {
        let result =bedroomproduct;

     if (FilterData.material){
        result =result.filter((p)=>p.material === FilterData.material);
     }   

     if(FilterData.dimension){
        result =result.filter((p)=>p.dimension === FilterData.dimension);
     }

     if(FilterData.price){
        result = result ((p)=>{
            const price =parseInt(p.price);
            if (max) { 
                return price >= parseInt(min) && price <= parseInt(max);
            }
            return price >= parseInt(min);
        });
     }
     setFilter(result);
    };

    return(
        <div className="container" style={{marginTop:150}}>
            <div className="row">
                <div className="col-md-3">
                    <BedRoomProductFilter onFilterChange={applyFilter}/>
                </div>

                <div className="col-md-9">
                    <div className="row">
                        {Filter.map((product,index)=>(
                            <div className="col-md-4 mb-4" key={index}>
                                <div className="card h-100">
                                    <img src={product.img} alt={product.name} className="card-img-top"/>
                               
                                <div className="card-body">
                                    <h6>{product.name}</h6>
                                    <p>₹{product.price} </p>
                                    <small> {product.brand} | {product.dimension} | {product.functionality} |{product.material} </small>
                                </div>
                                 </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BedRoomProduct;