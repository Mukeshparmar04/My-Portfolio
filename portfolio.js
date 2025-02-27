document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".section");
    const navLi = document.querySelectorAll("nav ul li");

    window.onscroll = () => {
        var current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute("id");
            }
        });

        navLi.forEach(li => {
            li.classList.remove("active");
            if (li.querySelector('a').getAttribute('href').includes(current)) {
                li.classList.add("active");
            }
        });
    };

    const homeContent = document.querySelector('.home-content');
    const aboutSection = document.querySelector('#about');

    window.addEventListener('scroll', () => {
        let value = window.scrollY;

        homeContent.style.transform = `translateY(${value * 0.5}px)`;
        aboutSection.style.backgroundPositionY = `${value * 0.5}px`;
    });

    const form = document.querySelector('#contact form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;

        alert(`Thank you, ${name}! Your message has been sent successfully.`);

        form.reset();
    });
});
