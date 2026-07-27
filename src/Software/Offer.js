import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "../offer.css";

export default function Offer() {
  const offers = [
    { title: "Custom Brilliance", 
      sub: "We create intelligent software that turns complex challenges into simple, lasting solutions with impact." 
    },
    { title: "Effortless Integration", 
      sub: "We integrate technology into your business with precision, ensuring effortless and flawless operations." 
    },
    { title: "Dedicated Guidance", 
      sub: "We deliver dedicated support that keeps your digital journey smooth, reliable, and worry-free." 
    },
    { title: "Future-Ready Growth", 
      sub: "We design scalable systems that grow in harmony with your vision and ambitions." 
    },
    { title: "Strategic Brilliance", 
      sub: "We provide strategic insights that guide smarter choices and inspire forward momentum." 
    },
  ];

  const progressRef = useRef(null);

  const handleSlideChange = (swiper) => {
    const progress = ((swiper.activeIndex + 1) / swiper.slides.length) * 100;
    if (progressRef.current) progressRef.current.style.width = `${progress}%`;
  };

  return (
    <div className="main-offer">
      <h1>Crafting Intelligent Software for a Smarter Tomorrow.</h1>

      <div className="construction-offers">
        <Swiper
          direction="horizontal"
          slidesPerView={1}
          speed={800}
          loop={true}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          pagination={{
            el: ".custom-pagination",               
            clickable: true,
            renderBullet: (index, className) =>
              `<span class="${className} custom-bullet"></span>`, 
          }}
          modules={[Autoplay, Pagination]}
          onSlideChange={handleSlideChange}
          className="construction-slider"
        >
          {offers.map((offer, i) => (
            <SwiperSlide key={i}>
              <div className="offer">
                <h2 className="offer-title">{offer.title}</h2>
                <p className="offer-sub">{offer.sub}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="custom-pagination" />
      </div>
    </div>
  );
}
