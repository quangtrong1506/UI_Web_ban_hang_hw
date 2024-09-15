tailwind.config = {
    theme: {
        extend: {
            colors: {
                main: '#8ac400',
            },
        },
    },
};
const formatToVND = (numberString) => {
    const number = parseFloat(numberString);
    if (isNaN(number)) {
        return 'Invalid number';
    }
    return number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
};
window.addEventListener('load', () => {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
    });
    document.querySelectorAll('.text-to-string-vnd').forEach((element) => {
        element.textContent = formatToVND(element.textContent);
    });
});
