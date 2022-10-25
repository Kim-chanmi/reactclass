import React from "react";

function Header(props) {
  return (
    <header id="headerType" class={`header__wrap ${props.fonts}`}>
      <div className="header__inner">
        <div className="header__logo">
          <a href="/">
            Plant <em>site</em>
          </a>
        </div>
        <nav className="header__menu">
          <ul>
            <li className="active">
              <a href="#slider">MAIN</a>
            </li>
            <li>
              <a href="#imageType">반려식물</a>
            </li>
            <li>
              <a href="#imgTextType">칼럼/뉴스</a>
            </li>
            <li>
              <a href="#cardType">식물성장</a>
            </li>
            <li>
              <a href="#bannerType">문의사항</a>
            </li>
            <li>
              <a href="#textType01">식물정보</a>
            </li>
          </ul>
        </nav>
        <div className="header__member">
          <a href="/">로그인</a>
        </div>
        <div className="header__ham">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
