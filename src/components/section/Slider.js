import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const sliderText = {
  span: "PLANT",
  title: "반려식물 키우기",
  desc: "반려식물 혼자 키우기 힘드시죠? \n우리가 당신과 함께하겠습니다.",
  aLink: "/",
  aClass: "black",
  aDet: "자세히 보기",
  aSite: "사이트 보기",
};

function Slider(props) {
  return (
    <section id="sliderType" className={`slider__wrap ${props.fonts}`}>
      <div className="slider__inner">
        <Swiper
          autoplay={{
            delay: 3000,
            desableOnInteraction: false,
          }}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="desc">
              <span>{sliderText.span}</span>
              <h3>{sliderText.title}</h3>
              <p>{sliderText.desc}</p>
              <div className="btn">
                <a href={`${sliderText.aLink}`}>{sliderText.aDet}</a>
                <a
                  href={`${sliderText.aLink}`}
                  className={`${sliderText.aClass}`}
                >
                  {sliderText.aSite}
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="desc">
              <span>{sliderText.span}</span>
              <h3>{sliderText.title}</h3>
              <p>{sliderText.desc}</p>
              <div className="btn">
                <a href={`${sliderText.aLink}`}>{sliderText.aDet}</a>
                <a
                  href={`${sliderText.aLink}`}
                  className={`${sliderText.aClass}`}
                >
                  {sliderText.aSite}
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="desc">
              <span>{sliderText.span}</span>
              <h3>{sliderText.title}</h3>
              <p>{sliderText.desc}</p>
              <div className="btn">
                <a href={`${sliderText.aLink}`}>{sliderText.aDet}</a>
                <a
                  href={`${sliderText.aLink}`}
                  className={`${sliderText.aClass}`}
                >
                  {sliderText.aSite}
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Slider;
