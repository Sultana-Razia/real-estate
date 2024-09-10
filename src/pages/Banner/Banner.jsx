import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectFade, Pagination, Navigation } from 'swiper/modules';

import slide1 from '../../assets/images/1.jpg'
import slide2 from '../../assets/images/2.jpg'
import slide3 from '../../assets/images/3.jpg'
import slide4 from '../../assets/images/4.jpg'


const Banner = () => {


    return (
        <div className='w-[80%] mx-auto mt-6'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >

                <SwiperSlide><img className='w-[100%] rounded-md h-[450px] md:h-[500px] lg:h-[550px]' src={slide1} alt="Slide 1" /></SwiperSlide>
                <SwiperSlide><img className='w-[100%] rounded-md h-[450px] md:h-[500px] lg:h-[550px]' src={slide2} alt="Slide 2" /></SwiperSlide>
                <SwiperSlide><img className='w-[100%] rounded-md h-[450px] md:h-[500px] lg:h-[550px]' src={slide3} alt="Slide 3" /></SwiperSlide>
                <SwiperSlide><img className='w-[100%] rounded-md h-[450px] md:h-[500px] lg:h-[550px]' src={slide4} alt="Slide 4" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;