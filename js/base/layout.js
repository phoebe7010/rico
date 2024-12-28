const headerTemplate = `
 <div class="header__inner">
        <p class="tit">LIGHT COORDINATOR</p>

        <h1>
          <a href="index.html">
            <picture>
              <source srcset="./images/common/mlogo.png" media="(max-width:768px)">
              <img src="./images/common/logo.png" alt="Rico Blinds logo">
            </picture>
            <span class="a11y-hidden">Rico Blinds</span>
          </a>
        </h1>

        <nav id="gnb">
          <ul class="gnb__list">
            <li class="gnb__list-item">
              <a href=" ">ABOUT US</a>
              <ul class="subMenu">
                <li><a href=" ">CEO' MESSAGE</a></li>
                <li><a href=" ">ORGANIZATION CHART</a></li>
                <li><a href=" ">HISTORY</a></li>
                <li><a href=" ">CATALOG</a></li>
              </ul>
            </li>
            <li class="gnb__list-item">
              <a href=" ">OUR BRAND</a>
            </li>
            <li class="gnb__list-item">
              <a href=" ">PRODUCT</a>
              <ul class="subMenu">
                <li><a href=" ">COMBI BLINDS</a></li>
                <li><a href=" ">TRIPLE SHADE</a></li>
                <li><a href=" ">ROLL SCREENS</a></li>
                <li><a href=" ">HONEYCOMB SHADE</a></li>
                <li><a href=" ">VERTICAL BLINDS</a></li>
                <li><a href=" ">WOOD BLINDS</a></li>
              </ul>
            </li>
            <li class="gnb__list-item">
              <a href=" ">BUSINESS</a>
            </li>
            <li class="gnb__list-item">
              <a href=" ">CONTACT</a>
            </li>
            <li class="gnb__list-item">
              <a href="">RICO NEWS</a>
            </li>
          </ul>
        </nav>

        <button id="menubar" class="btn-call">
          <span>menu</span>
        </button>
      </div>
`;

const mobileAsideTemplate = `
 <nav class="mobile__menu">
        <ul class="mobile__list">
          <li class="mobile__list-item">
            <a href="#">ABOUT US</a>
            <ul class="mobile__subMenu">
              <li><a href=" ">CEO' MESSAGE</a></li>
              <li><a href="">ORGANIZATION CHART</a></li>
              <li><a href="">HISTORY</a></li>
              <li><a href="">CATALOG</a></li>
            </ul>
          </li>
          <li class="mobile__list-item">
            <a href="">OUR BRAND</a>
          </li>
          <li class="mobile__list-item">
            <a href="#">PRODUCT</a>
            <ul class="mobile__subMenu">
              <li><a href="">COMBI BLINDS</a></li>
              <li><a href="">TRIPLE SHADE</a></li>
              <li><a href="">ROLL SCREENS</a></li>
              <li><a href="">HONEYCOMB SHADE</a></li>
              <li><a href="">VERTICAL BLINDS</a></li>
              <li><a href="">WOOD BLINDS</a></li>
            </ul>
          </li>
          <li class="mobile__list-item"><a href="">BUSINESS</a></li>
          <li class="mobile__list-item"><a href="">CONTACT</a></li>
          <li class="mobile__list-item"><a href="">RICO NEWS</a></li>
        </ul>
      </nav>
`;

const footerTemplate = `
<div class="footer__inner">
        <div class="familysite">
          <button class="btn-familysite">FAMILY SITE
            <span class="navi_down"></span>
          </button>
          <div class="familysite__container">
            <ul class="familysite__list">
              <li class="familysite__list-item">
                <a href="http://www.aircareblinds.com" target="_blank">AIR CARE</a>
              </li>
              <li class="familysite__list-item">
                <a href="http://www.nugunadiy.com" target="_blank">NUGUNA</a>
              </li>
              <li class="familysite__list-item">
                <a href="https://buyunga.com" target="_blank">BUYUNGA</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="privacy">
          <a href="http://www.ricoblinds.com/privacy.html" target="_blank">Privacy Policy</a>
        </div>

        <div class="address__container">
          <span class="company">Rico Blinds</span>
          <span class="tel">TEL: 82-31-798-3123</span>
          <span class="address">80-10, Maejari-gil, Gwangju-si, Gyeonggi-do, Korea </span>
        </div>
      </div>
`;

document.addEventListener('DOMContentLoaded', () => {
	document.querySelector('#header').innerHTML = headerTemplate;
	document.querySelector('.mobile').innerHTML = mobileAsideTemplate;

	document.querySelector('.footer').innerHTML = footerTemplate;
});
