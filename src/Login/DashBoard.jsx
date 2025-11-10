import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Profile from './DashBoard/Profile';
import MyAds from './DashBoard/MyAds';
import SavedItems from './DashBoard/Cart';
import './DashBoard.css';

function Dashboard() {
  const navigate = useNavigate();
  const username = localStorage.getItem('username') || 'Guest';

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    navigate('/');
  };

  const [activePage, setActivePage] = useState('profile');

  return (
    <div className="container-fluid dashboard-wrapper" style={{marginTop:105}}>
      <div className="container py-4">
        
        <div className="row mb-4 text-center">
          <h2 className="fw-bold">Welcome, {username}!</h2>
          <p className="text-muted">Manage your profile, ads, and settings from here.</p>
        </div>

        <div className="row">
         
          <div className="col-12 col-md-4 col-lg-3 mb-3 mb-md-0">
            <div className="sidebar bg-light p-3 rounded shadow-sm h-100">
              <h5 className="mb-4">Dashboard</h5>
              <ul className="nav flex-column gap-3">
                <li className="nav-item">
                  <button
                    className={`btn btn-outline-primary w-100 ${activePage === 'profile' ? 'active' : ''}`}
                    onClick={() => setActivePage('profile')}
                  >
                    <i className="bi bi-person-circle me-2"></i> Profile
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`btn btn-outline-primary w-100 ${activePage === 'myAds' ? 'active' : ''}`}
                    onClick={() => setActivePage('myAds')}
                  >
                    <i className="bi bi-megaphone-fill me-2"></i> My Ads
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`btn btn-outline-primary w-100 ${activePage === 'savedItems' ? 'active' : ''}`}
                    onClick={() => setActivePage('savedItems')}
                  >
                    <i className="bi bi-cart-check me-2"></i> Cart
                  </button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-danger w-100" onClick={handleLogout}>
                    <i className="bi bi-box-arrow-right me-2"></i> Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-12 col-md-8 col-lg-9">
            <div className="content-area p-4 bg-white rounded shadow-sm">
              <main>
                {activePage === 'profile' && <Profile />}
                {activePage === 'myAds' && <MyAds />}
                {activePage === 'savedItems' && <SavedItems />}
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;