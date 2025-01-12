const header = document.querySelector('.header');
const language = document.querySelector('.language');
const footer = document.querySelector('.footer');

const mobile = document.querySelector('.mobile');

function callData(data, el, lang) {
	fetch(data)
		.then((response) => response.text())
		.then((data) => {
			el.innerHTML = data;
		});
}

callData('/part/header.html', header);
callData('/part/language.html', language);
callData('/part/footer.html', footer);
callData('/part/mobile.html', mobile);
