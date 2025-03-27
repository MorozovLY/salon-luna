// Инициализация AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
});

// Форматирование номера телефона с Cleave.js
new Cleave('#phone', {
    phone: true,
    phoneRegionCode: 'RU',
});

// Обработка формы
const bookingForm = document.getElementById('bookingForm');

bookingForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(bookingForm);
    const data = Object.fromEntries(formData.entries());

    console.log('Данные формы:', data);
    alert('Ваша заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    bookingForm.reset();
});

// Исправление смещения при переходе по ссылкам
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100, // Смещение на 100px вниз
                behavior: 'smooth'
            });
        }
    });
});
