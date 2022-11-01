import React from "react";

const cardTitle = {
  title: "식물 성장 엿보기",
  desc: "식물별 성장과정들을 모아놓았습니다. 어떻게 자라나는지 구경해보세요.",
};

const cardText = [
  {
    img: "card_bg01",
    title: "몬스테라 성장일기",
    desc: "몬스테라를 키우며 기록한 성장일기입니다. 몬스테라가 어떻게 성장하는지 엿볼 수 있습니다. 성장과정에서 어떤 어려움이 있었는지도 확인해 보세요!",
    aLink: "/",
    aDesc: "더 자세히 보기",
  },
  {
    img: "card_bg02",
    title: "금황환 선인장 성장일기",
    desc: "금황환 선인장의 성장일기입니다. 황금색을 띠어 금전운을 가져다준다는 의미가 있어 선물하기 좋은 선인장이에요. 성장과정도 확인해 보세요!",
    aLink: "/",
    aDesc: "더 자세히 보기",
  },
  {
    img: "card_bg03",
    title: "스위트 바질 성장일기",
    desc: "바질은 허브의 왕이라고도 불려요. 종류가 다양하지만 흔히 키우는 바질은 스위트 바질입니다. 잘 키우면 식탁에서도 만나볼 수 있으니, 성장과정을 확인해 보세요!",
    aLink: "/",
    aDesc: "더 자세히 보기",
  },
];

function CardCont({ img, title, desc, aLink, aDesc }) {
  return (
    <article className="card">
      <figure className="card__header">
        <img src={`assets/img/${img}.jpg`} alt="몬스테라" />
      </figure>
      <div className="card__body">
        <h3 className="tit">{title}</h3>
        <p className="desc">{desc}</p>
        <a className="btn" href={`${aLink}`}>
          {aDesc}
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
  );
}

function Card({ attr }) {
  return (
    <section
      id="cardType"
      className={`card__wrap ${attr[0]} ${attr[1]} content__item`}
    >
      <h2>{cardTitle.title}</h2>
      <p>{cardTitle.desc}</p>
      <div className={`card__inner container ${attr[2]}`}>
        {cardText.map((info, index) => (
          <CardCont
            key={index}
            img={info.img}
            title={info.title}
            desc={info.desc}
            aLink={info.aLink}
            aDesc={info.aDesc}
          />
        ))}
      </div>
    </section>
  );
}

export default Card;
