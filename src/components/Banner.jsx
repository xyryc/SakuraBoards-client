// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useLoaderData } from "react-router-dom";

const Banner = () => {
  const bannerData = useLoaderData();
  // console.log(bannerData);

  return (
    <div className="mb-24">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper "
      >
        {bannerData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative">
              <img
                src={item.image}
                className="h-[85vh] w-full object-cover rounded-xl"
              />
              <h1 className="absolute bottom-4 right-10 z-10 text-3xl text-neutral-content">
                {item.name}
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
