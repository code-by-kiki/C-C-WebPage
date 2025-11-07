import { BrowserRouter, Routes, Route, Link,  } from 'react-router-dom';
import './App.css';
import './Page/Product.css';
import Logo from './assets/Logo.png';
import SearchResults from './Componend/SearchBarResult';
import SearchBar from './Componend/SearchBar';
import BikePage from './ProductComponents/Vehicles/Bike';
import CarPage from './ProductComponents/Vehicles/Car';
import JeepPage from './ProductComponents/Vehicles/Jeep';
import BicyclePage from './ProductComponents/Vehicles/Bicycle';
import PhonePage from './ProductComponents/Electronic/Phone';
import LaptopPage from './ProductComponents/Electronic/Laptop';
import WatchesPage from './ProductComponents/Electronic/Watches';
import DisplayPage from './ProductComponents/Electronic/Displays';
import SmartGadgetsPage from './ProductComponents/Electronic/HomeGadgets';
import Cart from './Login/DashBoard/Cart';
import Home from './Page/Home';
import Footer from './Page/Footer';
import Product from './Page/Product';
import Seller from './Page/Seller';
import Login from './Page/Login';
import Dashboard from './Login/DashBoard';
import Electornics from './Product/Electronic';
import Furniture from './Product/Furniture';
import Vehicles from './Product/Vehicles';
import Sports from './Product/Sports';
import BedRoomProduct from './ProductComponents/Furniture/BedRoomProduct';
import OfficeProduct from './ProductComponents/Furniture/OfficeProduct';
import LivingProduct from './ProductComponents/Furniture/LivingRoomProduct';
import Outdoor from './ProductComponents/Furniture/OutDoorProduct';
import GymProduct from './ProductComponents/Sport/GymProduct';
import SellerCategories from './Page/SellerCategories';
import SportProduct from './ProductComponents/Sport/SportProduct';
import CreatePost from './Seller/Createpost';


function App() {
return (

    <BrowserRouter>
      <nav className="navbar navbar-expand-md list container-fluid fixed-top">
        <Link to="/" className="navbar-brand">
          <img src={Logo} alt="Logo" className="Logo img-fluid" />
        </Link>
       
        <SearchBar/> 
       

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
        
        
        <div className="collapse navbar-collapse " id="navbarContent">
          <div className="navbar-nav me-auto d-flex flex-wrap align-items-center gap-2">
            <Link to="/Vehicles" className="nav-link Vehicles">Vehicles</Link>
            <Link to="/Electornic" className="nav-link Electornic">Electornic</Link>
            <Link to="/Furniture" className="nav-link Furniture">Home & Furniture</Link>
            <Link to="/Sports" className="nav-link Sports">Sports & Fitness</Link>
          </div>

          <div className="navbar-nav d-flex gap-2 align-items-center">
            <Link to="/Login" className="nav-link Login">  Registration/Login</Link>

              <Link to="/Login/DashBoard/Cart" className='nav-link Cart'>
              Cart <i class="bi bi-cart3 fs-5"></i>
            </Link>
            
            <Link to="/Seller" className="nav-link Seller">
              <button className="btn btn-outline-primary px-4 py-1">Seller</button>
            </Link>
          
          </div>
        </div>
      </nav>


      {/* All Routes must be inside this block */}
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path='/search' element={<SearchResults/>}/> 
        <Route path="/Product" element={<Product />} />
        <Route path="/Login/DashBoard/Cart" element={<Cart />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Vehicles" element={<Vehicles />} />
        <Route path="/Electornic" element={<Electornics />} />
        <Route path="/Furniture" element={<Furniture />} />
        <Route path="/Sports" element={<Sports />} />
        <Route path="/Seller" element={<Seller />} />

        {/* Vehicle Detail Pages */}
        <Route path="/ProductComponents/Bike" element={<BikePage />} />
        <Route path="/ProductComponents/Car" element={<CarPage />} />
        <Route path="/ProductComponents/Jeep" element={<JeepPage />} />
        <Route path="/ProductComponents/Bicycle" element={<BicyclePage />} />


        {/* Electronics Detail Pages */}
        <Route path="/ProductComponents/Electronic/Phone" element={<PhonePage />} />
        <Route path="/ProductComponents/Electronic/Laptop" element={<LaptopPage />} />
        <Route path="/ProductComponents/Electronic/Watches" element={<WatchesPage />} />
        <Route path="/ProductComponents/Electronic/Display" element={<DisplayPage />} />
        <Route path="/ProductComponents/Electronic/HomeGadgets" element={<SmartGadgetsPage />} />

        {/* Furniture Detail Pages */}
        <Route path="/ProductComponents/Furniture/BedRoomProduct" element={<BedRoomProduct />} />
        <Route path="/ProductComponents/Furniture/OfficeProduct" element={<OfficeProduct />} />
        <Route path="/ProductComponents/Furniture/LivingRoomProduct" element={<LivingProduct />} />
        <Route path="/ProductComponents/Furniture/OutDoorProduct" element={<Outdoor />} />

        {/*Sport Detail Page  */}
       <Route path='/ProductComponents/Sport/SportProduct' element={<SportProduct/>}/>
       <Route path='/ProductComponents/Sport/GymProduct' element={<GymProduct/>}/>
         
         {/* Seller Post */}
          <Route path="/SellerCategories" element={<SellerCategories />} />
          <Route path="/CreatePost/:category" element={<CreatePost/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

