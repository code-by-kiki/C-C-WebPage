import React, { useState } from 'react';

import './Categories.css';

export default function Profile()
{ 
        // Navigate the user name & Phone number   
      const username = localStorage.getItem('username') || 'Guest';
      const phonenum =localStorage.getItem('phonenum') || 'None';
      const email= localStorage.getItem('email') || 'no-email ';

    return(
    <div className="container-fluid profile" >
            <div className="row">
               <div className="col-12">
                 <h1 className='title'>Profile</h1>
               </div>
            </div>

      <div className="card profileCard p-3">
            <div className="row" >
                <div className="col-md-10">
                    <h1> <i class="bi bi-person-circle text-primary" ></i> {username}</h1>
                     <p> {phonenum} </p>
                     <p> {email} </p>
                     <p>Logged in 22 oct 2025</p>
                </div>
                <div className="col-md-2" >
                    <button className="button">Edit</button>
                </div>
           </div>      
        </div>

              {/* Detail Cards  */}
       <div className="row mt-4">
            
            <div className="col-md-4">
               <div className="card TotalProduct p-3">
                Total Product Buy
              </div>
           </div>

            <div className="col-md-4">
               <div className="card TotalProduct p-3">
                Total Product Buy
              </div>
           </div>

            <div className="col-md-4">
               <div className="card TotalProduct p-3">
                Total Product Buy
               </div>  
          </div>   

     </div>
   </div>
    )
}