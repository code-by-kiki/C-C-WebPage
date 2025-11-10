import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation,FreeMode } from "swiper/modules";
import "swiper/css/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import Car from '../assets/HCar.webp';
import CAR from '../assets/SCar.webp';
import cycle from '../assets/Cycles.webp';
import phone from '../assets/Phone.webp';
import car from '../assets/MCar.jpeg';
import Banner1 from '../assets/Banner 1.webp';
import Banner2 from '../assets/Banner 2.png';
import Banner3 from '../assets/Banner 3.png';
import CarIcon from '../assets/CarIcon.jpg';
import BikeIcon from '../assets/BikeIcons.png';
import CycleIcon from '../assets/CycleIcons.jpg';
import JeepIcon from '../assets/JeepIcon.png';
import phoneIcon from '../assets/PhoneIcon.webp';
import laptopIcon from '../assets/LaptopIcon.webp';
import WatchIcon from '../assets/WatchIcon.png';
import tvIcon from '../assets/TvIcon.png';
import smartgadgetIcon from '../assets/smartgadgetIcon.png';
import livingroomIcon from '../assets/livingroomIcon.png';
import bedroomIcon from '../assets/bedroomIcon.png';
import outdoorIcon from '../assets/outdoorIcon.png';
import officeIcon from '../assets/officeIcon.webp';
import sportIcon from '../assets/sportIcon.png';
import gymIcon from '../assets/gymIcon.webp';
import bike from '../assets/bike.jpg';
import "../Componend/Home.css";
import { Link } from "react-router-dom";

const products = [
  { id: 1, brand: "Maruthi",price:"500000", image: car,name:'Swift', type:'Hatchback' },
  { id: 2, brand: "Honda ",price:"200000", image: Car ,name:'City', type:'Sedan'},
  { id: 3, brand: "Skoda",price:"700000", image: CAR,name:'Kushaq', type:'Compact SUV' },
  { id: 4, brand: "Vivo",price:"12000", image:cycle , name:'Firefox Tremor X 27.5T', type:'Mountain bike' },
  { id: 5, brand: "Firefox",price:"20000", image:phone,name:'Vivo T2 Pro' },
   { id: 5, brand: "Firefox",price:"20000", image:bike,name:'Vivo T2 Pro' },
];

const Banner =[
  {id: 1,image : Banner1},
  {id: 2,image : Banner2},
  {id: 3,image : Banner3},
]

const Icons=[
  {icons:CarIcon,name:'Car',link:'/ProductComponents/Car'},
  {icons:BikeIcon,name:'Bike',link:'/ProductComponents/Bike'},
  {icons:JeepIcon,name:'Jeep',link:"/ProductComponents/Jeep"},
  {icons:CycleIcon,name:'BI-Cycle',link:"/ProductComponents/Bicycle"},
  {icons:phoneIcon,name:'Phone',link:'/ProductComponents/Electronic/Phone'},
  {icons:laptopIcon,name:'Laptop',link:'/ProductComponents/Electronic/Laptop'},
  {icons:WatchIcon,name:'Watch',link:'/ProductComponents/Electronic/Watches'},
  {icons:tvIcon,name:'Tv Display',link:'/ProductComponents/Electronic/Display'},
  {icons:smartgadgetIcon,name:'SmartGadget Product',link:'/ProductComponents/Electronic/HomeGadgets'},
  {icons:livingroomIcon,name:'LivingRoom Product',link:'/ProductComponents/Furniture/LivingRoomProduct'},
  {icons:bedroomIcon,name:'BedRoom Product',link:'/ProductComponents/Furniture/BedRoomProduct'},
  {icons:outdoorIcon,name:'OutDoor Product',link:'/ProductComponents/Furniture/OutDoorProduct'},
  {icons:officeIcon,name:'Office Product',link:'/ProductComponents/Furniture/OfficeProduct'},
  {icons:gymIcon,name:'Gym Product',link:'/ProductComponents/Sport/GymProduct'},
  {icons:sportIcon,name:'Sport Product',link:'/ProductComponents/Sport/SportProduct'},
]




const reviews = [
  {
    id: 1,
    name: "Priya",
    image: phone,
    rating: 5,
    text: "Amazing service! Highly recommended for quick deals.",
  },
  {
    id: 2,
    name: "Rahul",
    image: car,
    rating: 4,
    text: "Good experience overall. Found what I needed easily.",
  },
  {
    id: 3,
    name: "Sneha",
    image: phone,
    rating: 5,
    text: "Very user-friendly platform. Will use again!",
  },
  {
    id: 3,
    name: "Krithika",
    image: "https://via.placeholder.com/60",
    rating: 5,
    text: "Very user-friendly platform. Will use again!",
  },
  {
    id: 3,
    name: "Gayathri",
    image: "https://via.placeholder.com/60",
    rating: 5,
    text: "Very user-friendly platform. Will use again!",
  },
  {
    id: 3,
    name: "Poorna",
    image: "https://via.placeholder.com/60",
    rating: 1,
    text: "Very user-friendly platform. Will use again!",
  },
];

const ProductSwiper = () => {
  return (
   <section className="section">
   {/* Banner Section */}
   <div className="swiper-button-wrapper position-relative mt-5 d-none d-md-block" >
     <button className="btn btn-outline-light  custom-prev" style={{backgroundColor:"rgba(168, 167, 170, 0.2)"}}><i class="bi bi-caret-left fs-5 text-light"></i></button>
     <button className="btn btn-outline-light custom-next" style={{backgroundColor:"rgba(168, 167, 170, 0.2)"}}><i class="bi bi-caret-right fs-5 text-light"></i></button>
      <Swiper modules={[Navigation,Autoplay]}  
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      spaceBetween={20}
      slidesPerView={1}

    navigation={{
      nextEl: ".custom-next",
      prevEl: ".custom-prev",
    }}
    
    grabCursor={true}
    breakpoints={{
      1024: { slidesPerView: 1 },
      768: { slidesPerView: 3 },
      375: { slidesPerView: 2 },
    }}
  >
      {Banner.map((banner)=>
      (
       <SwiperSlide key={banner.id}>
         <div className="bannercard">
          <img src={banner.image} alt="Pic" style={{width:1500,height:600,borderRadius:20, padding:10}} />
         </div>

       </SwiperSlide>
      ))}
     </Swiper>
   </div>


   {/* All Category */}

   <div className="contanier-fluid mt-5">
        <div className="row ">
          <h1 className="mb-4">All Category</h1>
          {Icons.map((product,index)=>
          (
            <div className="col-md-2 col-sm-6  ps-5 g-4" key={index}>
            <div className="">
              <Link to={product.link} className="icon-link text-decoration-none"> 
               <div className="icon-wrapper">
                  <img src={product.icons} alt={product.name} className="img-fluid" width={60} height={50} />
                  <span className="hover-name">{product.name}</span>
              </div>
              </Link>
            </div>
          </div>
          ))

          }
        </div>
   </div>


   {/* Recommandation Section */}
    <div className="swiper-button-wrapper position-relative mt-5 ">
     <h1> Recommandation</h1>
    {/* Navigation Button  */}
     <button className="btn btn-outline rounded-circle custom-prev" style={{backgroundColor:"rgba(255, 255, 255, 0.3)"}}><i class="bi bi-arrow-left text-light"></i></button>
     <button className="btn btn-outline rounded-circle custom-next" style={{backgroundColor:"rgba(255, 255, 255, 0.3)"}}><i class="bi bi-arrow-right text-light"></i></button>

    {/* Swiper Product Card */}
  <Swiper modules={[Navigation]} spaceBetween={15} slidesPerView={5} navigation={
    { nextEl: ".custom-next",
      prevEl: ".custom-prev",
    }}
    grabCursor={true}
    breakpoints={{
      1024: { slidesPerView: 4 },
      768: { slidesPerView: 3 },
      375: { slidesPerView: 2 },
    }}
  >
    {products.map((product) => (
      <SwiperSlide key={product.id}>
      <div className="card ">
        <img src={product.image} alt={product.name} className="card-img-top" width={600} height={300}/>
        <div className="card-body">
          <h5>{product.name}</h5>
          <p>₹ {product.price} </p>
          <small>{product.brand} | {product.type}</small>
        </div>
      </div>
      
      </SwiperSlide>
    ))}
  </Swiper>
    </div>

   {/* Customer View */}
   <div className="mt-5">
    <h1>Review </h1>
      <Swiper
        modules={[FreeMode,Autoplay]}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1.5}
        freeMode={true}
        grabCursor={true}
        breakpoints={{
          375: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },

        }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="card review-card p-3 h-100">
              <div className="d-flex align-items-center mb-2">
            
                <img
                  src={review.image}
                  alt="User avatar"
                  className="rounded-circle me-3"
                  width="50"
                  height="50"
                />
                <h6 className="mb-0">{review.name}</h6>
              </div>
              <div className="mb-2">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <i key={i} className="bi bi-star-fill text-primary me-1"></i>
                ))}
              </div>
              <p className="text-muted small mb-0">{review.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
   </div>
  
</section>
  );
};
export default ProductSwiper;