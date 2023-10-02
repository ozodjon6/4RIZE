function changeOnResizeText() {
	const btnDemo = document.querySelector('.btn-demo');

	if(window.matchMedia('(max-width: 767px)').matches) {
		btnDemo.textContent = 'Демо';
	} else {
		btnDemo.textContent = 'Получить демо доступ';
	}
}

function changeTextAndIcon() {
	const btnChangeLanguage = document.querySelector('.header__button-lang');
	const languageFlag = document.getElementById('languageFlag');
	const languageText = document.getElementById('languageText');

	const texts = ['Eng', 'Rus', 'Uzb'];
	const icons = ['./assets/icons/flag.svg', './assets/icons/flag-ru.svg', './assets/icons/flag-uz.svg',]

	let currentIndex = 0;

	function changeLanguage() {
		if(currentIndex === texts.length - 1) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }

        languageFlag.src = icons[currentIndex];
        languageText.textContent = texts[currentIndex];
	}

	btnChangeLanguage.addEventListener('click', (e) => {
		e.preventDefault();
		changeLanguage();
	});
}

changeTextAndIcon();
changeOnResizeText();