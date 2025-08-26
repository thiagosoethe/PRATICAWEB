// Adiciona o comportamento do menu hambúrguer
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Alterna o menu
        nav.classList.toggle('active');
        burger.classList.toggle('toggle');

        // Adiciona animação nos links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    });
}
