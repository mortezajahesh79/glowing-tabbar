const links = document.querySelectorAll('.nav__link');
const light = document.querySelector('.nav__light');

function moveLight(link) {
    const { offsetLeft, offsetWidth } = link;
    light.style.left = `${offsetLeft}px`;
    light.style.width = `${offsetWidth}px`;
}

function activeLink(linkActive) {
    links.forEach(link => {
        link.classList.remove('active');
    });
    linkActive.classList.add('active');
}

links.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevents the default link navigation
        const targetLink = event.currentTarget;
        moveLight(targetLink);
        activeLink(targetLink);
    });
});
