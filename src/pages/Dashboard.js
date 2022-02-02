import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper";
import './Dashboard.css'
import CardTravelIcon from '@material-ui/icons/CardTravel';

function Dashboard() {
  return (
  <div className="main">
    <div className="dashboard">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
          <img className="img" src="./images/img.jpg" alt="img" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <img className="img" src="./images/5.jpg" alt="img" />
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <img className="img" src="./images/3.jpg" alt="img" />
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <img className="img" src="./images/4.jpg" alt="img" />
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <img className="img" src="./images/6.jpg" alt="img" />
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <img className="img" src="./images/7.jpg" alt="img" />
        </div>
        </SwiperSlide>
      </Swiper>
    </div>


    <div className="info">
      <h1 style={{textAlign:"center"}}>Before Covid 19</h1>
      <br/>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia deserunt molestias aspernatur molestiae corrupti. Eos quo molestias nesciunt, ipsa expedita quisquam excepturi repellendus quod quasi perferendis veritatis eveniet, veniam nostrum?
        Incidunt provident et in nobis, iusto ratione a ipsa porro ducimus rem sed aspernatur cum sapiente laudantium vel deleniti culpa. Unde sit provident odio voluptate tempore harum facilis, recusandae earum!
      </p>
      <br/>
      <h1 style={{textAlign:"center"}}>Our Response to Covid 19</h1>
      <br/>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia deserunt molestias aspernatur molestiae corrupti. Eos quo molestias nesciunt, ipsa expedita quisquam excepturi repellendus quod quasi perferendis veritatis eveniet, veniam nostrum?
        Incidunt provident et in nobis, iusto ratione a ipsa porro ducimus rem sed aspernatur cum sapiente laudantium vel deleniti culpa. Unde sit provident odio voluptate tempore harum facilis, recusandae earum!
      </p>
    </div>
    <div className="iconsgrp">
        <div className="icons">
          <h1>Number of Deliveries</h1>
          <CardTravelIcon/>
          <h2>10202</h2>
        </div>
        <div className="icons">
          <h1>Number of Deliveries</h1>
          <CardTravelIcon/>
          <h2>10202</h2>
        </div>
        <div className="icons">
          <h1>Number of Deliveries</h1>
          <CardTravelIcon/>
          <h2>10202</h2>
        </div>
        <div className="icons">
          <h1>Number of Deliveries</h1>
          <CardTravelIcon/>
          <h2>10202</h2>
        </div>
        <div className="icons">
          <h1>Number of Deliveries</h1>
          <CardTravelIcon/>
          <h2>10202</h2>
        </div>
        <div className="icons">
          <h1>Number of Deliveries</h1>
          <CardTravelIcon/>
          <h2>10202</h2>
        </div>
    </div>
  </div>
  );
}

export default Dashboard;
