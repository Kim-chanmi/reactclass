import React from "react";

function Card({ attr }) {
  return (
    <section
      id="cardType"
      className={`card__wrap ${attr[0]} ${attr[1]} content__item`}
    >
      <h2>식물 성장 엿보기</h2>
      <p>식물별 성장과정들을 모아놓았습니다. 어떻게 자라나는지 구경해보세요.</p>
      <div className={`card__inner container ${attr[2]}`}>
        <article className="card">
          <figure className="card__header">
            <img src="assets/img/card_bg01.jpg" alt="헤더영역" />
          </figure>
          <div className="card__body">
            <h3 className="tit">몬스테라 성장일기</h3>
            <p className="desc">
              몬스테라를 키우며 기록한 성장일기입니다. 몬스테라가 어떻게
              성장하는지 엿볼 수 있습니다. 성장과정에서 어떤 어려움이 있었는지도
              확인해 보세요!
            </p>
            <a className="btn" href="/">
              더 자세히 보기
              <span aria-hidden="true">
                <svg
                  width="59"
                  height="8"
                  viewBox="0 0 59 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M58.3536 4.35355C58.5488 4.15829 58.5488 3.84171 58.3536 3.64645L55.1716 0.464466C54.9763 0.269204 54.6597 0.269204 54.4645 0.464466C54.2692 0.659728 54.2692 0.976311 54.4645 1.17157L57.2929 4L54.4645 6.82843C54.2692 7.02369 54.2692 7.34027 54.4645 7.53553C54.6597 7.7308 54.9763 7.7308 55.1716 7.53553L58.3536 4.35355ZM0 4.5H58V3.5H0L0 4.5Z"
                    fill="black"
                  />
                </svg>
              </span>
            </a>
          </div>
        </article>
        <article className="card">
          <figure className="card__header">
            <img src="assets/img/card_bg02.jpg" alt="리포머 운동" />
          </figure>
          <div className="card__body">
            <h3 className="tit">금황환 선인장 성장일기</h3>
            <p className="desc">
              금황환 선인장의 성장일기입니다. 황금색을 띠어 금전운을
              가져다준다는 의미가 있어 선물하기 좋은 선인장이에요. 성장과정도
              확인해 보세요!
            </p>
            <a className="btn" href="/">
              더 자세히 보기
              <span aria-hidden="true">
                <svg
                  width="59"
                  height="8"
                  viewBox="0 0 59 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M58.3536 4.35355C58.5488 4.15829 58.5488 3.84171 58.3536 3.64645L55.1716 0.464466C54.9763 0.269204 54.6597 0.269204 54.4645 0.464466C54.2692 0.659728 54.2692 0.976311 54.4645 1.17157L57.2929 4L54.4645 6.82843C54.2692 7.02369 54.2692 7.34027 54.4645 7.53553C54.6597 7.7308 54.9763 7.7308 55.1716 7.53553L58.3536 4.35355ZM0 4.5H58V3.5H0L0 4.5Z"
                    fill="black"
                  />
                </svg>
              </span>
            </a>
          </div>
        </article>
        <article className="card">
          <figure>
            <img src="assets/img/card_bg03.jpg" alt="캐딜락 운동" />
          </figure>
          <div className="card__body">
            <h3 className="tit">스위트 바질 성장일기</h3>
            <p className="desc">
              바질은 허브의 왕이라고도 불려요. 종류가 다양하지만 흔히 키우는
              바질은 스위트 바질입니다. 잘 키우면 식탁에서도 만나볼 수 있으니,
              성장과정을 확인해 보세요!
            </p>
            <a className="btn" href="/">
              더 자세히 보기
              <span aria-hidden="true">
                <svg
                  width="59"
                  height="8"
                  viewBox="0 0 59 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M58.3536 4.35355C58.5488 4.15829 58.5488 3.84171 58.3536 3.64645L55.1716 0.464466C54.9763 0.269204 54.6597 0.269204 54.4645 0.464466C54.2692 0.659728 54.2692 0.976311 54.4645 1.17157L57.2929 4L54.4645 6.82843C54.2692 7.02369 54.2692 7.34027 54.4645 7.53553C54.6597 7.7308 54.9763 7.7308 55.1716 7.53553L58.3536 4.35355ZM0 4.5H58V3.5H0L0 4.5Z"
                    fill="black"
                  />
                </svg>
              </span>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Card;
