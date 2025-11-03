import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation,FreeMode } from "swiper/modules";
import "swiper/css/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import Car from '../assets/HCar.webp';
import CAR from '../assets/SCar.webp';
import job from '../assets/job.jpg';
import cycle from '../assets/Cycles.webp';
import phone from '../assets/Phone.webp';
import car from '../assets/MCar.jpeg';
import Banner1 from '../assets/Banner 1.jpg';
import Banner2 from '../assets/Banner 2.jpg';
import Banner3 from '../assets/Banner 3.jpg';

import "../Componend/Home.css";

const products = [
  { id: 1, brand: "Maruthi",price:"500000", image: Car,name:'Swift', type:'Hatchback' },
  { id: 2, brand: "Honda ",price:"200000", image: car ,name:'City', type:'Sedan'},
  { id: 3, brand: "Skoda",price:"700000", image: CAR,name:'Kushaq', type:'Compact SUV' },
  { id: 4, brand: "Vivo",price:"12000", image: phone, name:'Firefox Tremor X 27.5T', type:'Mountain bike' },
  { id: 5, brand: "Firefox",price:"20000", image:cycle,name:'Vivo T2 Pro' },
  { id: 6, brand: "Home Tution",price:"10000", image: job },
];

const Banner =[
  {id: 1,image : Banner1},
  {id: 2,image : Banner2},
  {id: 3,image : Banner3},
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
    name: "pooja",
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
          <img src={banner.image} alt="Pic" style={{width:1500,height:500,borderRadius:20, padding:10}} />
         </div>

       </SwiperSlide>
      ))}
     </Swiper>
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
      <div className="card h-100">
        <img src={product.image} alt={product.name} className="card-img-top"/>
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