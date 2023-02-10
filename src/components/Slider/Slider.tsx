import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";
import { IOptions, IItem } from "../../models";
import { useSearchParams } from "react-router-dom";

import "./slider.scss";

interface Props {
  item: IItem;
}

const Slider: React.FC<Props> = ({ item }) => {
  const [searchParams] = useSearchParams();
  const colorParams = searchParams.get("color");

  const findPhotos = ({ color, photos }: IOptions) => {
    if (color === colorParams) return photos;
    return false;
  };

  const photos = item.options.find(findPhotos)?.photos;

  return (
    <Swiper
      className="slider"
      modules={[Navigation, A11y]}
      spaceBetween={5}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        1500: {
          slidesPerView: 3,
        },
      }}
    >
      {photos &&
        photos.map((photo, i) => (
          <SwiperSlide key={`${photo}${i}`}>
            <img className="slider__image" src={photo} alt="Coat" />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Slider;
