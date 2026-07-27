import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "../offer.css";

export default function Offer() {
  const offers = [
    { title: "Strategic Branding", 
      sub: "We craft unique brand identities that embody purpose and distinction, leaving a lasting impression that continues to resonate across generations." 
    },
    { title: "Digital Excellence", 
      sub: "We drive business growth by building digital solutions and platforms that merge innovation with scalability, empowering brands to thrive in an ever-evolving landscape." 
    },
    { title: "Creative Campaigns", 
      sub: "We design bold, forward-thinking campaigns that spark engagement, inspire action, and create enduring connections with audiences." 
    },
    { title: "Content Mastery", 
      sub: "We curate powerful narratives that weave authenticity and vision, enabling brands to forge meaningful bonds with their audiences." 
    },
    { title: "Market Insights", 
      sub: "We deliver data-driven strategies that transform insights into clarity, guiding businesses toward smarter decisions and impactful outcomes." 
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
