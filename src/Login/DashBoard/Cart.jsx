import React from "react";
import CART from '../../assets/Cart.png'
import image from '../../assets/No ADs.webp';

   const CartPage =({cart=[
   { image:image,title:"Car",description:'bnbbbbbf',}
   ]})=>{
return(
        <div className="Container-fluid">
           <div className="row">
            <div className="col-12 title-center"> 
                <h1 className="mb-5 title-center">Cart</h1>

                {cart.length===0 ? (
                    <div>
                        <img src={CART} alt="No Cart" width={200} className="img-fluid d-block mx-auto"/>
                        <h2 className="text-center text-muted">NO Cart</h2>
                    </div>
                ):(
                    <div className="container my-5">
                                  <h2 className="text-center mb-4">Latest Cart</h2>
                                  <div className="row g-4">
                                    {cart.map((cart, index) => (
                                      <div className="col-md-4" key={index}>
                                        <div className="card h-100 shadow-sm">
                                          <img
                                            src={cart.image || "/path/to/default.jpg"}
                                            className="card-img-top"
                                            alt={cart.title}
                                          />
                                          <div className="card-body">
                                            <h5 className="card-title">{cart.title}</h5>
                                            <p className="card-text text-muted">
                                              {cart.description || "No description available"}
                                            </p>
                                            <button className="btn btn-primary w-100">
                                              View Details
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                )}
             </div>
           </div>

        </div>
    )

   }
export default CartPage;
