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

callData('part/header.html', header);
callData('part/language.html', language);
callData('part/footer.html', footer);
callData('part/mobile.html', mobile);

/* 
// const lang = document.querySelector('html').getAttribute('lang');
// console.log(lang);

if (lang == 'ko') {
				el.innerHTML = '../part/ko/' + data;
			} else {
				el.innerHTML = '/part/' + data;
			} 



async function fetchHtmlAsText(url) {
	return await (await fetch(url)).text();
}

async function importPage(target) {
	document.querySelector('.' + target).innerHTML = await fetchHtmlAsText(target + '.html');
}
 */
