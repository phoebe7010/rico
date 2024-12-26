const headerTemplate = `
 <div class="header__inner">


        <p class="tit">LIGHT COORDINATOR</p>


        <h1>
          <a href="ko/index.html">
            <picture>
              <source srcset="../images/common/mlogo.png" media="(max-width:768px)">
              <img src="../images/common/logo.png" alt="리코블라인드로고">
            </picture>
            <span class="a11y-hidden">리코블라인드</span>
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
          <span>메뉴</span>
        </button>

      </div>
`;

document.addEventListener('DOMContentLoaded', () => {
	document.querySelector('#header').innerHTML = headerTemplate;
});
