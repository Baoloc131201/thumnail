import React from "react";
import "./product-image-slider.scss"
import PropTypes from "prop-types";
import {Swiper, SwiperSlide} from "swiper/react"
import {Navigation,Thumbs, Scrollbar} from "swiper"
import { useState } from "react";
const ProductImagesSlider=props=>{
    const [activethumb,setActivethumb]=useState(null)
return <>
      <Swiper
        loop={true}
        spaceBetween={100}
        navigation={true}
        modules={[Navigation, Thumbs]}
        grabCursor={true}
        thumbs={{swiper:activethumb}}
        className="product-images-slider"
      >
          {
            props.images.map((item,index)=>
              
                (
                    <SwiperSlide key={index}>
                        <img src={item} alt="product-item" />
                    </SwiperSlide>
                )
            )
          }
      </Swiper>
      <Swiper
        // onSwiper={setActivethumb}
        watchSlidesProgress={true}
     onSwiper={setActivethumb}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        modules={[Scrollbar, Thumbs]}
        className="product-images-slider-thumbs"
      >
          {
            props.images.map((item,index)=>
              
                (
                    <SwiperSlide key={index}>
                        <div className="product-images-slider-thumbs-wrapper">
                        <img src={item} alt="product-item" />
                        </div>
                    </SwiperSlide>
                )
            )
          }
      </Swiper>
   </>
}
ProductImagesSlider.propTypes ={
    images:PropTypes.array.isRequired
}
export default ProductImagesSlider;