import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Profile from './DashBoard/Profile';
import MyAds from './DashBoard/MyAds';
import SavedItems from './DashBoard/SavedItems';
import Setting from './DashBoard/Setting';
import './DashBoard.css';
function Dashboard() {
  const navigate = useNavigate();
  const username = localStorage.getItem('username') || 'Guest';
  
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    navigate('/');
  };
  
  const [activePage,setActivePage]=useState ('profile');

  return (
    <div className="container-fluid">
      <div className="Container">
            <div className="title row">
              <h2>Welcome, {username}!</h2>
              <p>You have successfully signed in.</p>
           </div>
            <div className="row">
              <div className="col-md-2">
                  <button onClick={() => setActivePage ('profile')}>Profile</button>
                  <button onClick={() => setActivePage ('myAds')}>My Ads</button>
                  <button onClick={() => setActivePage ('savedItems')}>Saved Items</button> 
                  <button onClick={() => setActivePage ('setting')}>Settings</button>
                  <button >  <Link to={'/'} onClick={handleLogout} style={{textDecoration:'none'}}>Logout</Link></button>   
               </div> 

              <div className="col-md-10">
                 <main>
                   {activePage === 'profile' && <Profile/>}
                   {activePage === 'myAds' && <MyAds/>}
                   {activePage === 'savedItems' && <SavedItems/>}
                   {activePage === 'setting' && <Setting/>}
                </main>
              </div>
           </div>
       </div>
    </div>
  );
}

export default Dashboard;