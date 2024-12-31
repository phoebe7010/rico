//모바일 햄버거 버튼 클릭시 메뉴 열리기 (세부메뉴 닫기)
const handleMobile = (e) => {
	const mobile = document.querySelector('.mobile');

	header.addEventListener('click', (e) => {
		const btnCall = header.querySelector('.btn-call');
		const moGnbLis = mobile.querySelectorAll('.mobile__list-item');

		if (e.target != btnCall) return;
		if (btnCall && moGnbLis) {
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
		}
	});
};

//mobile li클릭시 서브메뉴 활성화
const handleMobileGnb = (e) => {
	const mobile = document.querySelector('.mobile');

	mobile.addEventListener('click', (e) => {
		const mobileItem = mobile.querySelectorAll('.mobile__list-item');

		mobileItem.forEach((li) => {
			let isOn = e.target.parentElement.classList.contains('on');
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
const handleFamilySite = (e) => {
	const footer = document.querySelector('.footer');

	footer.addEventListener('click', (e) => {
		const familySiteBtn = footer.querySelector('.btn-familysite');
		const familySiteList = footer.querySelector('.familysite__container');

		if (e.target != familySiteBtn) return;
		if (familySiteBtn && familySiteList) {
			familySiteBtn.classList.toggle('on');
			familySiteList.classList.toggle('on');
		}
	});
};

handleMobile();
handleMobileGnb();
handleFamilySite();
