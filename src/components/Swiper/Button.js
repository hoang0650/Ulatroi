import React, { useState, memo, forwardRef , useImperativeHandle } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';


import styles from './Swiper.module.css'

const SwiperButton = (props, ref) => {
  const swiper = useSwiper();
  useImperativeHandle(ref, () => ({
    onNext: () => swiper.slideNext(),
    onPrev: () => swiper.slidePrev(),
  }));
  return (
    <></>
  )
}

export default forwardRef(SwiperButton);