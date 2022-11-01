import React from "react";

const imgTextTitle = {
  plant: "Plant",
  title: "식물 관련 칼럼 살펴보기",
  desc: "식물과 관련된 다양한 칼럼과 뉴스들을 살펴보는 공간입니다.",
  aLink: "/",
  list1: "식물이 병드는 이유",
  list2: "식물이 스트레스 받는 이유",
  list3: "환경 관리",
  list4: "식물 심리테스트",
  list5: "병충해 관리",
  list6: "초보자 매뉴얼",
};

const imgTextText = [
  {
    img: "img1",
    aLink2: "/",
    nameClass: "",
    name: "초보자 메뉴얼",
  },
  {
    img: "img2",
    aLink2: "/",
    nameClass: "blue",
    name: "식물 심리테스트",
  },
];

function ImgTextName({ img, aLink2, nameClass, name }) {
  return (
    <div className={`imgText__img ${img}`}>
      <a href={`${aLink2}`} className={`${nameClass}`}>
        {name}
      </a>
    </div>
  );
}

function ImgText({ attr }) {
  return (
    <section
      id="imgTextType"
      className={`imgText__wrap ${attr[0]} ${attr[1]} ${attr[2]} content__item`}
    >
      <h2 className="blind">유용한 사이트 살펴보기</h2>
      <div className={`imgText__inner ${attr[3]}`}>
        <div className="imgText__txt">
          <span>{imgTextTitle.plant}</span>
          <h3>{imgTextTitle.title}</h3>
          <p>{imgTextTitle.desc}</p>
          <ul>
            <li>
              <a href={`${imgTextTitle.aLink}`}>{imgTextTitle.list1}</a>
            </li>
            <li>
              <a href={`${imgTextTitle.aLink}`}>{imgTextTitle.list2}</a>
            </li>
            <li>
              <a href={`${imgTextTitle.aLink}`}>{imgTextTitle.list3}</a>
            </li>
            <li>
              <a href={`${imgTextTitle.aLink}`}>{imgTextTitle.list4}</a>
            </li>
            <li>
              <a href={`${imgTextTitle.aLink}`}>{imgTextTitle.list5}</a>
            </li>
            <li>
              <a href={`${imgTextTitle.aLink}`}>{imgTextTitle.list6}</a>
            </li>
          </ul>
        </div>
        {imgTextText.map((info, index) => (
          <ImgTextName
            key={index}
            img={info.img}
            aLink2={info.aLink2}
            nameClass={info.nameClass}
            name={info.name}
          />
        ))}
      </div>
    </section>
  );
}

export default ImgText;
