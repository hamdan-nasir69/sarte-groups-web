import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "./hero.css";

const slides = [
  {
    title: "Building Strong Foundations",
    heading: "Building Strong Foundations",
    sub: "Driving growth across construction, marketing, and software solutions — with trust, vision, and innovation at the core.",
  },
  {
    title: "Ideas That Resonate",
    heading: "Ideas That Resonate",
    sub: "From strategic planning to seamless execution, we craft campaigns that not only inspire but also connect with audiences, drive engagement, and create measurable business impact.",
  },
  {
    title: "Innovation Without Limits",
    heading: "Innovation Without Limits",
    sub: "Designing intelligent, scalable, and forward-thinking solutions that empower businesses to thrive in the ever-evolving digital landscape.",
  },
];

export default function Hero() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progressPct, setProgressPct] = useState(0); 

  const autoplayDelay = 5000;

  return (
    <div className="hero">
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        onSwiper={(s) => (swiperRef.current = s)}
        onSlideChange={(s) => {
          setActiveIndex(s.realIndex);
          setProgressPct(0);
        }}
        onAutoplayTimeLeft={(_, timeLeft  , _progress) => {
          const pct = Math.max(
            0,
            Math.min(100, Math.round(((autoplayDelay - timeLeft) / autoplayDelay) * 100))
          );
          setProgressPct(pct);
        }}
        autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
        loop
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            <div
              className="slide"
              style={{ backgroundColor: "#0D0D0D", color: "#F7C986" }}
            >
              <div className="overlay" />
              <div className="slide-content">
                <h1 className="slide-title">{s.heading}</h1>
                <p className="slide-sub">{s.sub}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="tile-nav">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`tile ${activeIndex === i ? "active" : ""}`}
            onClick={() => swiperRef.current?.slideToLoop(i)}
          >
            <div
              className="tile-fill"
              style={{ height: activeIndex === i ? `${progressPct}%` : "0%" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
