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

//mobile li클릭시 서브메뉴 활성화
const handleMobileGnb = () => {
	const mobileList = document.querySelector('.mobile__list');
	const mobileItem = mobileList.querySelectorAll('.mobile__list-item');

	mobileItem.forEach((li, idx) => {
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
	const familySiteList = document.querySelector('.familysite__list-container');
	familySiteBtn.addEventListener('click', () => {
		familySiteBtn.classList.toggle('on');
		familySiteList.classList.toggle('on');
	});
};

handleMobile();
handleMobileGnb();
handleFamilySite();
