import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/global.css";

// Import required modules
import { Pagination, Navigation } from "swiper/modules";

// Importa todas as imagens da pasta carrossel como URLs
const images = import.meta.glob(
  "/src/assets/carrossel/*.{jpg,jpeg,png,webp,gif}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const PortfolioComponent: React.FC = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  const imageUrls = Object.values(images) as string[];

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      pagination={pagination}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {imageUrls.map((src, index) => (
        <SwiperSlide key={index}>
          <img
            src={src}
            alt={`Imagem ${index + 1}`}
            className="w-full h-auto object-cover rounded-xl shadow-md"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PortfolioComponent;
