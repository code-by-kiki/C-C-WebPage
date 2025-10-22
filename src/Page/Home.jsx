import React from "react";
import Car from '../assets/Car.jpg';
import Job from '../assets/Job.jpg';
import Cycle from '../assets/Cycles.webp';
import Phone from '../assets/Phone.webp';
import Home from "../Componend/Home";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import '../Componend/Home.css';
export default function ProductCard()
{
  const Product=[
    {id:1, img:Car, name:"Car",Price:"200000",brand:"Honda"},
    {id:2,img:Cycle,name:"Cycle",Price:"20000",brand:" Firefox"},
    {id:3,img:Job,name:"Home",Price:"8787"},
    {id:4, img:Phone,name:"vivo",Price:"12000",brand:"Vivo T-15"},
     {id:2,img:Cycle,name:"Cycle",Price:"20000",brand:" Firefox"},
  ]

  return(
    <div className="mt-4">
      <h2>Recommendation</h2>
   <Swiper
      modules={[Navigation]}
     navigation
     spaceBetween={20}
    slidesPerView={1}
    speed={600} // animation duration in ms
    loop={true}
    > 
      <SwiperSlide>
          <div className="slide-content">
             {Product.map((data)=>
              (
                <Home Img={data.img}
                  Name={data.name}
                  Price={data.Price}
                  Brand={data.brand}/>
              ))}
           </div>
         </SwiperSlide>
   <div class="swiper-button-next" ><i class="bi bi-arrow-right-circle "></i></div>
  <div class="swiper-button-prev" ><i class="bi bi-arrow-left-circle"></i></div>
   </Swiper>
</div>   
  )
  
}