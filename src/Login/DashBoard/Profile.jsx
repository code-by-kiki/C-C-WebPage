import React from 'react';
import './Categories.css';

export default function Profile() {
  const username = localStorage.getItem('username') || 'Guest';
  const phonenum = localStorage.getItem('phonenum') || 'None';
  const email = localStorage.getItem('email') || 'no-email';
  
  if (typeof localStorage !== 'undefined'){
  if(!localStorage.getItem('loginDate'))
  {
   localStorage.setItem(
      'loginDate' ,
      new Date().toLocaleDateString('en-IN',
        {
         day:'numeric',
         month:'long',
         year:'numeric',
      })
   );
  }  
  }
  const loginDate = localStorage.getItem('loginDate')
  const card = [
          { title: ' Products Purchased', value: '0' },
          { title: ' Reviews Written', value: '0' },
          { title: ' Wishlist Items', value: '0' },
        ]
  return (
    <main className="container-fluid profile" role="main">
      <section className="row">
        <div className="col-12">
          <h1 className="title text-center">My Profile</h1>
        </div>
      </section>

      <section className="card profileCard p-4 shadow-sm">
        <div className="row align-items-center">
          <div className="col-md-10">
            <h2 className="username">
              <i className="bi bi-person-circle text-primary me-2"></i>
              {username}
            </h2>
            <p className="text-muted mb-1"> {phonenum}</p>
            <p className="text-muted mb-1"> {email}</p>
            <p className="text-muted"> Logged in: {loginDate}</p>
          </div>
          <div className="col-md-2 text-end">
            <button style={{width:100,borderRadius:10}}>Edit</button>
          </div>
        </div>
      </section>

      {/* Detail Cards */}
      <section className="row mt-4">
        {card.map((card, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <div className="card infoCard p-3 text-center shadow-sm">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text display-6">{card.value}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}