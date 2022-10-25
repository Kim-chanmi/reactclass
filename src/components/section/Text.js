import React from "react";

function Text({ attr }) {
  return (
    <section
      id="textType01"
      className={`text__wrap ${attr[0]} ${attr[1]} content__item`}
    >
      <span>다양한 꿀Tip!</span>
      <h2 className="mb70">반려식물 기르기</h2>
      <div className={`text__inner container ${attr[2]}`}>
        <div className="text t1">
          <h3 className="text__title">분갈이</h3>
          <p className="text__desc">
            분갈이 시기와 정확한 방법을 알고 계신가요? 식물에 맞는 화분도 따로
            있답니다. 여기서는 분갈이 시기와 정확한 방법을 알...
          </p>
          <a className="text_btn" href="/">
            더보기
          </a>
        </div>
        <div className="text t2">
          <h3 className="text__title">물 주기</h3>
          <p className="text__desc">
            식물마다 얼마나 자주, 어느 정도의 물을 줘야 하는지 궁금하시죠?
            식물에게 물을 주는 정확한 방법을 알려드리겠습니다.
          </p>
          <a className="text_btn" href="/">
            더보기
          </a>
        </div>
        <div className="text t3">
          <h3 className="text__title">인테리어</h3>
          <p className="text__desc">
            식물을 이용한 다양한 인테리어들이 있습니다. 집의 구조와 환경에 맞는
            다양한 인테리어들을 볼 수 있습니다.
          </p>
          <a className="text_btn" href="/">
            더보기
          </a>
        </div>
        <div className="text t4">
          <h3 className="text__title">영양분</h3>
          <p className="text__desc">
            사람이 영양제를 섭취하듯이 식물들도 영양분이 필요합니다. 식물마다
            필요한 영양분에 대해 알아보겠습니다.
          </p>
          <a className="text_btn" href="/">
            더보기
          </a>
        </div>
        <div className="text t5">
          <h3 className="text__title">병충해</h3>
          <p className="text__desc">
            식물을 키우면 벌레가 생길까봐, 그리고 그 벌레로 인해 식물이 죽을까봐
            걱정이 많으시죠? 그 예방법에 대해 알아보겠습니다.{" "}
          </p>
          <a className="text_btn" href="/">
            더보기
          </a>
        </div>
        <div className="text t6">
          <h3 className="text__title">계절관리</h3>
          <p className="text__desc">
            계절의 변화에 따라 온도와 습도가 달라지게 됩니다. 이러한 환경에
            식물들은 큰 영향을 받는데요. 계절 변화에 따른 관리법을...
          </p>
          <a className="text_btn" href="/">
            더보기
          </a>
        </div>
      </div>
    </section>
  );
}

export default Text;
