import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Page/Home';
import Product from './Page/Product';
import Seller from './Page/Seller';
import SignIn from './Page/SignIn';
import Login from './Page/Login';
import Electornics from './Product/Electornic';
import Furniture from './Product/Furniture';
import Vehicles from './Product/Vehicles';
import Services from './Product/Services';
import Sports from './Product/Sports';
import './Page/App.css';
import './Page/Product.css';
import Logo from './assets/Logo.png';

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-md list container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={Logo} alt="Logo" className="Logo img-fluid" />
        </Link>
          <div className="d-flex align-items-center">
              <input type="text" placeholder="Search" className="form-control rounded-pill px-3"/>
              <i className="bi bi-search ms-2"></i>
            </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <div className="navbar-nav me-auto d-flex flex-wrap align-items-center gap-2">
            <Link to="/Vehicles" className="nav-link Vehicles">Vehicles</Link>
            <Link to="/Electornic" className="nav-link Electornic">Electornic</Link>
            <Link to="/Furniture" className="nav-link Furniture">Home & Furniture</Link>
            <Link to="/Services" className="nav-link Services">Services</Link>
            <Link to="/Sports" className="nav-link Sports">Sports & Outdoors</Link>
          
          </div>

          <div className="navbar-nav d-flex gap-2 align-items-center">
            <Link to="/SignIn" className="nav-link Sign">Sign In</Link>
            <Link to="/Login" className="nav-link Login">/ Login</Link>
            <Link to="/Seller" className="nav-link Seller">
              <button className="btn btn-outline-primary px-4 py-1">Seller</button>
            </Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Vehicles" element={<Vehicles />} />
        <Route path="/Electornic" element={<Electornics />} />
        <Route path="/Furniture" element={<Furniture />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Sports" element={<Sports />} />
        <Route path="/Seller" element={<Seller />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;