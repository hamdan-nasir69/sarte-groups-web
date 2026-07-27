import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./hero.css";
import './testimonials.css'

export default function Testimonials(){
    const testimonials = [
        {
            name: 'Muhammad Zaman, resident Jinnah Town',
            msg: 'The housing project they completed was executed with quality and care. It reflects a standard that gives confidence to local residents like me.'
        },
        {
            name: 'Public Health Engineering Department, Balochistan',
            msg: 'From water supply to sanitation systems, their solutions have been reliable, efficient, and impactful. They understand the challenges of public projects and deliver beyond expectations.'
        },
        {
            name: 'Irrigation Department, Balochistan',
            msg: 'Their work on irrigation and drainage systems has significantly supported our agricultural communities. The attention to detail is commendable.'
        },
        {
            name: 'Quetta Development Authority (QDA)',
            msg: 'The company’s input in residential and commercial development projects has uplifted our urban landscape. Their consultancy and execution reflect true leadership in construction.'
        },
        {
            name: 'Planning & Development Department',
            msg: 'We commend the company’s commitment to excellence and transparency. Their structured project management and quality craftsmanship align perfectly with our department’s mission to develop sustainable infrastructure.'
        },
        {
            name: 'Energy Department, Balochistan',
            msg: 'The introduction of solar energy solutions for government facilities has been a game-changer. Their innovative approach shows their commitment to sustainable development.'
        },
    ]
    return (
        <div className="main-testimonials">
                <h1>Recognitions That Inspire Us Forward</h1>
                <div className="testimonial-wrapper">
                    <Swiper
                      modules={[Autoplay, Pagination, EffectFade]}
                      slidesPerView={1}
                      autoplay={{ delay: 3000, disableOnInteraction: false }}
                      pagination={{ clickable: true }}
                      effect="fade"
                      loop={true}
                      className="testimonial-swiper"
                    >
                      {testimonials.map((t, index) => (
                        <SwiperSlide key={index}>
                          <div className="testimonial-card">
                            <p className="testimonial-msg">"{t.msg}"</p>
                            <h3 className="testimonial-name">— {t.name}</h3>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                </div>
        </div>
    )
}