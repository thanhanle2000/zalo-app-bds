import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box } from "zmp-ui";

export const Banner = ({ banner }) => {
  return (
    <Box pb={4}>
      <Swiper
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
        autoplay
        loop
        cssMode
      >
        {banner.map((banner) => (
          <SwiperSlide key={banner.id} className="px-4">
            <Box
              className="w-full rounded-lg aspect-[2/1] bg-cover bg-center bg-skeleton"
              style={{
                backgroundImage: `url(${banner.image})`,
                height: 100
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};