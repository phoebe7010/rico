var swiper = new Swiper('.swiper', {
	loop: true,
	speed: 1500,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	autoplay: {
		delay: 3500,
		disableOnInteraction: false,
	},
});

let $slides = document.querySelectorAll('.swiper-slide');
for (let i of $slides) {
	i.addEventListener('mouseover', function () {
		swiper.autoplay.stop();
	});
	i.addEventListener('mouseout', function () {
		swiper.autoplay.start();
	});
}
