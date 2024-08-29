const scroll = document.querySelector('.scroll');
const container = document.querySelector('.container');

scroll.addEventListener('scroll', () => {
    if (scroll.scrollLeft + scroll.clientWidth >= container.scrollWidth) {
        scroll.scrollLeft = 0;
    } else if (scroll.scrollLeft === 0) {
        scroll.scrollLeft = container.scrollWidth / 2
    }
})