import React, { memo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination} from 'swiper'
import ImageEgger from '../ImageEgger';
import SwiperButton from './Button'
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './Swiper.module.css'

const SwiperComponent = (props) => {
  const {photos = [], actionButtonRef, defaultSlide = 0} = props;

  const onNext = () => swiper.slideNext();
  const onPrevious = () => swiper.slidePrev()
  return (
    <>
    <Swiper
      modules={[ Pagination]}
      className={styles.swiperCustom}
      spaceBetween={50}
      navigation
      pagination={{ clickable: true, dynamicBullets: true, }}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      initialSlide={defaultSlide}
    > 
      {photos.map( (item) => 
        <SwiperSlide key={item.id} className={styles.swiperSlide}>
          <ImageEgger 
           src={"https://i.pinimg.com/736x/a2/6b/d3/a26bd3b88f30608733ab7cdc630066e6.jpg"}
            alt={item.id}
            width={650}
            height={400}
            priority
            layout="raw"
            className={`block object-cover ${styles.imgCus}`}
          />
        </SwiperSlide>
      )}
      <SwiperButton ref={actionButtonRef}/>
    </Swiper>
    </>
  )
}

export default memo(SwiperComponent);