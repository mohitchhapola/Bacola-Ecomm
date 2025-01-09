import React from 'react'
import banner from '../../Assets/Images/banner-box.jpg'
import { IoIosArrowRoundForward } from "react-icons/io"
import product1 from "../../Assets/Images/product1.webp"
import product2 from "../../Assets/Images/product2.jpg"
import product3 from "../../Assets/Images/product3.webp"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import ProductBanner from '../../Components/product/ProductBanner'

function Home(){
    return (
        
        <section className="homeProducts">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="banner">
                            <img src={banner} className="bursor w-100" alt='banner'/>
                        </div>
                    </div>
                    <div className="col-md-9 productRow">
                        <div className="d-flex align-items-center">
                            <div className='info w-75'>
                            <h2 className="mb-0 hd">Best Seller</h2>
                            <p className="text-light mb-o"> </p>
                            </div>
                            <button className="viewAllBtn ml-auto">View All<IoIosArrowRoundForward /></button>

                        </div>
                        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >    
      <SwiperSlide>
        <ProductBanner/>
      </SwiperSlide>
      <SwiperSlide><div className="item productItem">
                            <div className="imageWrapper">
                                <img src={product2} alt="product image" className='w-100'/>
                            </div>
                        </div></SwiperSlide>
      <SwiperSlide><div className="item productItem">
                            <div className="imageWrapper">
                                <img src={product3} alt="product image" className='w-100'/>
                            </div>
                        </div></SwiperSlide>
                        
      <SwiperSlide><div className="item productItem">
                            <div className="imageWrapper">
                                <img src={product1} alt="product image" className='w-100'/>
                            </div>
                        </div></SwiperSlide>
      <SwiperSlide><div className="item productItem">
                            <div className="imageWrapper">
                                <img src={product2} alt="product image" className='w-100'/>
                            </div>
                        </div></SwiperSlide>
      <SwiperSlide><div className="item productItem">
                            <div className="imageWrapper">
                                <img src={product3} alt="product image" className='w-100'/>
                            </div>
                        </div></SwiperSlide>
                        
                        </Swiper>
                    </div>
                    </div>
                    </div>
        </section>
    )
}

export default Home