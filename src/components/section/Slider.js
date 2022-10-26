import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
              <span>PLANT</span>
              <h3>반려식물 키우기</h3>
              <p>
                반려식물 혼자 키우기 힘드시죠? <br />
                우리가 당신과 함께하겠습니다.
              </p>
              <div className="btn">
                <a href="/">자세히 보기</a>
                <a href="/" className="black">
                  사이트 보기
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="desc">
              <span>PLANT</span>
              <h3>반려식물 키우기</h3>
              <p>
                반려식물 혼자 키우기 힘드시죠? <br />
                우리가 당신과 함께하겠습니다.
              </p>
              <div className="btn">
                <a href="/">자세히 보기</a>
                <a href="/" className="black">
                  사이트 보기
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="desc">
              <span>PLANT</span>
              <h3>반려식물 키우기</h3>
              <p>
                반려식물 혼자 키우기 힘드시죠? <br />
                우리가 당신과 함께하겠습니다.
              </p>
              <div className="btn">
                <a href="/">자세히 보기</a>
                <a href="/" className="black">
                  사이트 보기
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
