function changeOnResizeText() {
	const btnDemo = document.querySelector('.btn-demo');

	if(window.matchMedia('(max-width: 767px)').matches) {
		btnDemo.textContent = 'Демо';
	} else {
		btnDemo.textContent = 'Получить демо доступ';
	}
}

export default changeOnResizeText();