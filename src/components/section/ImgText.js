import React from "react";

function ImgText({ attr }) {
  return (
    <section
      id="imgTextType"
      className={`imgText__wrap ${attr[0]} ${attr[1]} ${attr[2]} content__item`}
    >
      <h2 className="blind">유용한 사이트 살펴보기</h2>
      <div className={`imgText__inner ${attr[3]}`}>
        <div className="imgText__txt">
          <span>Plant</span>
          <h3>식물 관련 칼럼 살펴보기</h3>
          <p>식물과 관련된 다양한 칼럼과 뉴스들을 살펴보는 공간입니다.</p>
          <ul>
            <li>
              <a href="/">식물이 병드는 이유</a>
            </li>
            <li>
              <a href="/">식물이 스트레스 받는 이유</a>
            </li>
            <li>
              <a href="/">환경 관리</a>
            </li>
            <li>
              <a href="/">식물 심리테스트</a>
            </li>
            <li>
              <a href="/">병충해 관리</a>
            </li>
            <li>
              <a href="/">초보자 매뉴얼</a>
            </li>
          </ul>
        </div>
        <div className="imgText__img img1">
          <a href="/">초보자 매뉴얼</a>
        </div>
        <div className="imgText__img img2">
          <a href="/" className="blue">
            식물 심리테스트
          </a>
        </div>
      </div>
    </section>
  );
}

export default ImgText;
