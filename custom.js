//모바일 햄버거 메뉴 클릭시
const handleMobile = () => {
	const btnCall = document.querySelector('.btn-call');
	const mobile = document.querySelector('.mobile');
	const moGnbLis = document.querySelectorAll('.menu__list-item');

	const toggleMobile = () => {
		let isOn = btnCall.classList.contains('on');
		if (!isOn) {
			btnCall.classList.toggle('on', true);
			mobile.classList.toggle('on', true);
		} else {
			btnCall.classList.toggle('on', false);
			mobile.classList.toggle('on', false);
		}
		moGnbLis.forEach((li) => {
			li.classList.remove('on');
		});
	};

	btnCall.addEventListener('click', () => {
		toggleMobile();
	});
};

handleMobile();

//li클릭시 서브메뉴 보이게
//li를 클릭했을때 submenu slideDown/ slideUp
const handleGnb = () => {
	//변수설정
	const menuList = document.querySelector('.menu__list');
	const menu = menuList.querySelectorAll('.menu__list-item');
	const subMenuGroup = menuList.querySelectorAll('.subMenu');
	//함수 설정
	const clickActive = (e) => {};

	//이벤트구문 함수호출
	menu.forEach((li, idx) => {
		li.addEventListener('click', (e) => {
			let isOn = e.currentTarget.classList.contains('on');
			if (!isOn) {
				for (let el of menu) {
					el.classList.remove('on');
				}
				li.classList.add('on');
			} else {
				li.classList.remove('on');
			}
		});
	});
};

handleGnb();

/*
	moGnbLis.forEach((li) => {
		li.addEventListener('click', (e) => {
			e.currentTarget.classList.toggle('on');
			let subTarget = e.currentTarget.querySelector('.subMenu');
			if (subTarget) {
				subTargetList.forEach((list) => list.classList.remove('on'));
				subTarget.classList.add('on');
			}
		});
	});

	function showGnb(gnb){
	$(gnb+" li").on("mouseenter",function(){
		$(this).children("ul").show();
		$(this).children("a").addClass("on");
	});				
	$(gnb+" li").on("mouseleave",function(){
		$(this).children("ul").hide();
		$(this).children("a").removeClass("on");
	});  
  }
  
  function hideGnb(gnb){
	$(gnb+" li").on("mouseenter",function(){
		$(this).children("ul").hide();
		$(this).children("a").addClass("on");
	 });	
	 $(gnb+" li").on("mouseleave",function(){
		$(this).children("ul").hide();
		$(this).children("a").removeClass("on");
 	});  
  }
	
 */

/*
// 사이드바 핸들러
const handleSidebar = () => {
  const sidebar = document.querySelector(".sidebar");
  const closeBtn = document.querySelector(".btn-close");
  const openBtn = document.querySelector(".btn-hamburger");
  const menuLinks = document.querySelectorAll(".menu__list-link");

  const toggleSidebar = (isOpen) => {
    sidebar.classList.toggle("sidebar--open", isOpen);
  };

  openBtn.addEventListener("click", () => toggleSidebar(true));
  
  closeBtn.addEventListener("click", () => toggleSidebar(false));

  menuLinks.forEach((link) =>
    link.addEventListener("click", () => toggleSidebar(false))
  );
};
*/
