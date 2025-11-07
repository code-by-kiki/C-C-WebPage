import React, { useState } from "react";
import OfficeProductFilter from "../Fiter/OfficeproductFilter";
import officeproduct from "../../Product/Data/OfficeproductData";
import '../../Page/Product.css';

const OfficeproductPage=()=>{
    const [Filter,setFilter]=useState(officeproduct);

    const applyFilter=(FilterData)=>{
        let result =officeproduct;

        if(FilterData.category){
            result =result.filter((p)=>p.category===FilterData.category);
        }

        if(FilterData.price){
            let[min,max]=FilterData.price.split('-');
            const MAX=!!max;
            result=result.filter((p)=>{
                const Price=parseInt(p.price);
                if(MAX)
                {
                    return Price >= parseInt(min) && Price <= parseInt(max);
                }
                return Price =parseInt(min);
            });
        }

        setFilter(result);
    }

    return(
        <div className="container" style={{marginTop:150}}>
            <div className="row">
                <div className="col-md-3">
                    <OfficeProductFilter onFliterChange={applyFilter}/>
                </div>
                <div className="col-md-9">
                    <div className="row">
                        {Filter.map((product,index)=>(
                            <div className="col-md-4">
                                <div className="card h-100">
                                  <img src={product.img} alt={product.name} className="card-img-top"/>
                                  <div className="card-body">
                                    <h5> {product.name} </h5>
                                    <p>{product.description} </p>
                                    <pre>₹{product.price}</pre>
                                    <small>{product.brand} | {product.category} | {product.type} </small>
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
export default OfficeproductPage;