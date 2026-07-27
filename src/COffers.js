import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./offer.css";

export default function COffers() {
  const offers = [
    { title: "Uncompromising Quality", 
      sub: "We deliver projects with uncompromising precision, enduring durability, and meticulous attention to detail, ensuring results that exceed expectations and stand the test of time." 
    },
    { title: "On-Time Delivery", 
      sub: "Through structured planning, seamless coordination, and disciplined execution, we ensure every project is completed on schedule without compromising on quality or excellence." 
    },
    { title: "Sustainability", 
      sub: "We integrate eco-friendly practices, energy-efficient solutions, and sustainable innovations into our work, building responsibly with a vision for a greener and healthier future." 
    },
    { title: "Innovation in Design", 
      sub: "Our designs embody modern aesthetics, intelligent functionality, and future-ready solutions, creating spaces that inspire while catering to the unique needs of every client." 
    },
    { title: "Client-Centric Approach", 
      sub: "With transparent communication, personalized solutions, and unwavering commitment, we place clients at the heart of every decision, ensuring trust and long-lasting relationships." 
    },
    { title: "Long-Term Value", 
      sub: "We create enduring structures that blend strength, functionality, and timeless design, delivering investments that continue to provide value for generations to come." 
    },
  ];

  const progressRef = useRef(null);

  const handleSlideChange = (swiper) => {
    const progress = ((swiper.activeIndex + 1) / swiper.slides.length) * 100;
    if (progressRef.current) progressRef.current.style.width = `${progress}%`;
  };

  return (
    <div className="main-offer">
      <h1>Crafting Solutions with Unmatched Excellence.</h1>

      <div className="construction-offers">
        <Swiper
          direction="horizontal"
          slidesPerView={1}
          speed={800}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
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
