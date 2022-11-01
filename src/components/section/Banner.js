import React from "react";

const bannerText = {
  title: "반려식물 키우기",
  desc: "어렵지만 함께라면 할 수 있습니다. 다른 문의사항은 아래로 남겨주세요.",
  aLink: "/",
};

// function BannerCont({title, desc, aLink}){
//   return (
//     <div className="banner__inner">
//         <h3 className="title">{bannerText.title}</h3>
//         <p className="desc">
//           {bannerText.desc}
//           <a href={`${aLink}`} title="유투브 페이지로 이동">
//             chanmi1320@gmail.com
//           </a>
//         </p>
//       </div>
//   )
// }

function Banner(props) {
  return (
    <section
      id="bannerType"
      className={`banner__wrap ${props.fonts} content__item`}
    >
      <h2 className="blind">배너 영역</h2>
      <div className="banner__inner">
        <h3 className="title">{bannerText.title}</h3>
        <p className="desc">
          {bannerText.desc}
          <a href={`${bannerText.aLink}`} title="유투브 페이지로 이동">
            chanmi1320@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}

export default Banner;
