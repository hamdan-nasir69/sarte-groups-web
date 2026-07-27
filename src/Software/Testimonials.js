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
            name: 'Golden Bean Café',
            msg: 'With their custom app, our café now takes orders seamlessly, reducing wait times and delighting our customers. The technology has improved our overall workflow significantly.'
        },
        {
            name: 'Fisico Gym',
            msg: 'The automation tools they implemented saved our gym hours of administrative work every week. Staff efficiency has increased, and our clients notice the smoother service.'
        },
        {
            name: `Quality Sweets`,
            msg: 'Their e-commerce solution allowed our bakery to reach a much wider audience. Online orders have skyrocketed, and the system is easy for both staff and customers to use.'
        },
        {
            name: 'Ali Fabrics',
            msg: 'Their web development gave our business a professional online presence that truly reflects our brand. Sales have increased, and customers now engage with us more than ever.'
        },
        {
            name: 'Lee Posh',
            msg: 'Thanks to their app development, our clients now enjoy a seamless booking experience. The app is intuitive, reliable, and has significantly improved customer satisfaction.'
        },
        {
            name: `Chapter & Verse Bookstore`,
            msg: 'Their solutions helped our bookstore manage inventory and customer data efficiently. We’ve seen better sales tracking and smoother day-to-day operations thanks to their software.'
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