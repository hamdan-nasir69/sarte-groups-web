import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./hero.css";
import '../testimonials.css'

export default function Testimonials(){
    const testimonials = [
        {
            name: 'Ali Fabrics',
            msg: 'They helped our business get noticed online and doubled our sales.'
        },
        {
            name: 'Balochistan Marbles',
            msg: 'Their email marketing built loyal customers for my startup in no time.'
        },
        {
            name: `Jan's Interior`,
            msg: 'Thanks to their SEO, my décor store now ranks at the top in our city and attracts new customers daily.'
        },
        {
            name: 'Golden Bean Café',
            msg: 'Our café saw a big jump in orders after their social media campaigns.'
        },
        {
            name: 'Fisico Gym',
            msg: 'They helped our gym reach more members and fill classes faster than ever.'
        },
        {
            name: `Porto's`,
            msg: 'Our bakery’s online orders doubled after their social media strategies.'
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