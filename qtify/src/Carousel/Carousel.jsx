import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import LeftArrowIcon from "../assets/LeftArrow.svg";
import RightArrowIcon from "../assets/RightArrow.svg";
import styles from './Carousel.module.css';  // Import CSS Module
import 'swiper/css/navigation';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


const Carousel = ({ data, renderItem }) => {
    
  return (
    <div className={styles.carouselContainer}>
      <Swiper
        modules={[Navigation]}
        className="swiper"
        spaceBetween={5}
        slidesPerView="auto"
        loop={true}
        navigation={{
          prevEl: `.${styles.swiperButtonPrev}`,
          nextEl: `.${styles.swiperButtonNext}`,
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            {renderItem(item)}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className={`${styles.swiperButton} ${styles.swiperButtonPrev}`}>
        <img src={LeftArrowIcon} alt="Left Arrow" width="24" height="24" />
      </div>
      <div className={`${styles.swiperButton} ${styles.swiperButtonNext}`}>
        <img src={RightArrowIcon} alt="Right Arrow" width="24" height="24" />
      </div>
    </div>
  );
};

export default Carousel;
