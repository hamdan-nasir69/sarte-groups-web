import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./about.css";

import construction from "./assets/construction-carousel.jpg";
import marketing from "./assets/marketing-carousel.jpg";
import software from "./assets/software-carousel.jpg";

export default function AboutHero() {
  return (
    <div className="bg-swiper-wrapper">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        className="bg-swiper"
      >
        <SwiperSlide>
          <div className="bg-slide">
            <img src={construction} alt="Construction" className="bg-img" />
            <div className="bg-overlay">
              <div className="bg-overlay-heading">
                <h1>Defining Excellence Across Construction, Marketing, and Technology.</h1>
                <p>From timeless structures to powerful brands and cutting-edge software, we craft solutions that stand the test of time and shape the future.</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-slide">
            <img src={marketing} alt="Marketing" className="bg-img" />
            <div className="bg-overlay">
              <div className="bg-overlay-heading">
                <h1>Building Legacies, Empowering Brands, Engineering the Future.</h1>
                <p>Driven by passion and precision, we create spaces, strategies, and software that redefine possibilities and inspire lasting impact.</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-slide">
            <img src={software} alt="Software" className="bg-img" />
            <div className="bg-overlay">
              <div className="bg-overlay-heading">
                <h1>Blending Ideas, Technology, and Expertise to Shape the Future.</h1>
                <p>Uniting creative minds, engineering precision, and strategic insight to deliver transformative results across every industry we serve.</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
