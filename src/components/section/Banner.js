import React from "react";

function Banner(props) {
  return (
    <section
      id="bannerType"
      className={`banner__wrap ${props.fonts} content__item`}
    >
      <h2 className="blind">배너 영역</h2>
      <div className="banner__inner">
        <h3 className="title">반려식물 키우기</h3>
        <p className="desc">
          어렵지만 함께라면 할 수 있습니다. 다른 문의사항은 아래로 남겨주세요.
          <a href="/" title="유투브 페이지로 이동">
            chanmi1320@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}

export default Banner;
