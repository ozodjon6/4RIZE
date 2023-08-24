! function() {
    const t = document.querySelector(".btn-demo");
    window.matchMedia("(max-width: 767px)").matches ? t.textContent = "Демо" : t.textContent = "Получить демо доступ"
}();