import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export const Carousel = ({ coverImg, productImg }) => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        navigation
        slidesPerView={1}
        spaceBetween={50}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <img src={coverImg.url} alt='product hero' />
        </SwiperSlide>
        {productImg.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image.url} alt='product hero' />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
