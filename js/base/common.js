document.addEventListener('DOMContentLoaded', () => {
	handleMobile();
	handleMobileGnb();
	handleFamilySite();
});

//모바일 햄버거 버튼 클릭시 메뉴 열리기 (세부메뉴 닫기)
const handleMobile = () => {
	const btnCall = document.querySelector('.btn-call');
	const mobile = document.querySelector('.mobile');
	const moGnbLis = document.querySelectorAll('.mobile__list-item');

	const toggleMobile = () => {
		let isOn = btnCall.classList.contains('on');
		if (!isOn) {
			btnCall.classList.add('on');
			mobile.classList.add('on');
		} else {
			btnCall.classList.remove('on');
			mobile.classList.remove('on');
		}
		moGnbLis.forEach((li) => {
			li.classList.remove('on');
		});
	};

	btnCall.addEventListener('click', toggleMobile);
};

//mobile li클릭시 서브메뉴 활성화
const handleMobileGnb = () => {
	const mobileList = document.querySelector('.mobile__list');
	const mobileItem = mobileList.querySelectorAll('.mobile__list-item');

	mobileItem.forEach((li) => {
		li.addEventListener('click', (e) => {
			let isOn = e.currentTarget.classList.contains('on');
			if (!isOn) {
				for (let el of mobileItem) {
					el.classList.remove('on');
				}
				li.classList.add('on');
			} else {
				li.classList.remove('on');
			}
		});
	});
};

//family site click 이벤트
const handleFamilySite = () => {
	const familySiteBtn = document.querySelector('.btn-familysite');
	const familySiteList = document.querySelector('.familysite__container');
	familySiteBtn.addEventListener('click', () => {
		familySiteBtn.classList.toggle('on');
		familySiteList.classList.toggle('on');
	});
};
