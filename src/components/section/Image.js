import React from "react";

const imageTitle = {
  title: "반려식물 키우기",
  desc: "반려식물을 기르는 분들을 위한 사이트 입니다.",
};

const imageText = [
  {
    title: "식물의 종류",
    desc: "다양한 식물의 종류들을 알아볼 것입니다. 초보자가 기르기 쉬운 식물, 공기정화에 탁월한 식물, 선물하기 좋은 식물 등을 알아볼 예...",
    imgClass: "img1",
    btnClass: "",
    btnLink: "/",
  },
  {
    title: "인테리어",
    desc: "식물을 이용한 다양한 인테리어들을 알아볼 것입니다. 식물의 크기에 따른 공간, 위치 등등이 있습니다. 많은 예시들이 있으니 구경...",
    imgClass: "img2",
    btnClass: "yellow",
    btnLink: "/",
  },
];

function ImageCont({ title, desc, imgClass, btnClass, btnLink }) {
  return (
    <article className={`image ${imgClass}`}>
      <h3 className="image__title">{title}</h3>
      <p className="image__desc">{desc}</p>
      <a
        className={`image__btn ${btnClass}`}
        href={`${btnLink}`}
        title="자세히 보기"
      >
        자세히보기
      </a>
    </article>
  );
}

function Image(props) {
  return (
    <section
      id="imageType"
      className={`image__wrap ${props.attr[0]} ${props.attr[1]} content__item`}
    >
      <h2>{imageTitle.title}</h2>
      <p>{imageTitle.desc}</p>
      <div className={`image__inner ${props.attr[2]}`}>
        {imageText.map((info, index) => (
          <ImageCont
            key={index}
            title={info.title}
            desc={info.desc}
            imgClass={info.imgClass}
            btnClass={info.btnClass}
            btnLink={info.btnLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Image;
