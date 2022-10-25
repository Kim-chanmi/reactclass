import React from "react";

function Image(props) {
  return (
    <section
      id="imageType"
      className={`image__wrap ${props.attr[0]} ${props.attr[1]} content__item`}
    >
      <h2>반려식물 키우기</h2>
      <p>반려식물을 기르는 분들을 위한 사이트 입니다.</p>
      <div className={`image__inner ${props.attr[2]}`}>
        <article className="image img1">
          <h3 className="image__title">식물의 종류</h3>
          <p className="image__desc">
            다양한 식물의 종류들을 알아볼 것입니다. 초보자가 기르기 쉬운 식물,
            공기정화에 탁월한 식물, 선물하기 좋은 식물 등을 알아볼 예...
          </p>
          <a className="image__btn" href="/" title="자세히 보기">
            자세히보기
          </a>
        </article>
        <article className="image img2">
          <h3 className="image__title">인테리어</h3>
          <p className="image__desc">
            식물을 이용한 다양한 인테리어들을 알아볼 것입니다. 식물의 크기에
            따른 공간, 위치 등등이 있습니다. 많은 예시들이 있으니 구경...
          </p>
          <a className="image__btn yellow" href="/" title="자세히 보기">
            자세히보기
          </a>
        </article>
      </div>
    </section>
  );
}

export default Image;
