import React from "react";
import { useParams } from "react-router-dom";
import './Createpost.css';

export default function CreatePost() {
  const { category } = useParams();

  const commonFields = (
    <>
      <input type="text" placeholder="Product Title" required />
      <textarea placeholder="Description" required />
      <input type="number" placeholder="Price (₹)" required />
      <input type="text" placeholder="Location / PIN Code" required />
      <input type="file" multiple accept="image/*" />
    </>
  );

  const categorySpecificFields = {
    Furniture:
    (
      <div className="">
         <input type="text" placeholder="Dimensions (L x W x H)" />
          <input type="text" placeholder="Brand" />
          <input type="text" placeholder="Functionality" />
          <input type="text" placeholder="Material" />
          <input type="text" placeholder="Category" />
          <input type="text" placeholder="Type" />
                 
      </div>
    ),
     
    Vehicle: (
      <div>
        <input type="text" placeholder="Brand / Model" />
        <input type="text" placeholder="Year of Manufacture" />
        <input type="text" placeholder="Category"/>
        <input type="text" placeholder="Fuel Type" />
      </div>
    ),
   
    "Sport Product": (
       <>
      <input type="text" placeholder=" Brand" />
      <input type="text" placeholder=" Category" />
      <input type="text" placeholder="Material" />
       </>
    ),

    Electronic: (
      <div>
        <input type="text" placeholder="Brand / Model" />
        <input type="text" placeholder="Warranty Period" />
        <input type="text" placeholder="Gadget Type"/>
        <input type="text" placeholder="RAM"/>
        <input type="storage" placeholder="Storage"/>
        
      </div>
    ),
  };

  return (
    <div className="create-post-container " style={{marginTop:150}}>
      <h2 className="mb-4"> Post for {category}</h2>
      <form className="post-form ">
        {commonFields}
        {categorySpecificFields[category] || null}
        <button type="submit">Submit Post</button>
      </form>
    </div>
  );
}