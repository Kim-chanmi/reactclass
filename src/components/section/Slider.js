import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Slider() {
  return (
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
          <div class="desc">
            <span>PLANT</span>
            <h3>반려식물 키우기</h3>
            <p>
              반려식물 혼자 키우기 힘드시죠? <br />
              우리가 당신과 함께하겠습니다.
            </p>
            <div class="btn">
              <a href="#">자세히 보기</a>
              <a href="#" class="black">
                사이트 보기
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="desc">
            <span>PLANT</span>
            <h3>반려식물 키우기</h3>
            <p>
              반려식물 혼자 키우기 힘드시죠? <br />
              우리가 당신과 함께하겠습니다.
            </p>
            <div class="btn">
              <a href="#">자세히 보기</a>
              <a href="#" class="black">
                사이트 보기
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="desc">
            <span>PLANT</span>
            <h3>반려식물 키우기</h3>
            <p>
              반려식물 혼자 키우기 힘드시죠? <br />
              우리가 당신과 함께하겠습니다.
            </p>
            <div class="btn">
              <a href="#">자세히 보기</a>
              <a href="#" class="black">
                사이트 보기
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
