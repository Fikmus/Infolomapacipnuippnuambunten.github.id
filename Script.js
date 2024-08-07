// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Highlight active section in navigation bar
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('nav ul li');

    window.addEventListener('scroll', function() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }

            // Check if section is in viewport for animation
            const sectionHeight = section.offsetHeight;
            if (pageYOffset >= sectionTop - window.innerHeight + 100 && pageYOffset < sectionTop + sectionHeight) {
                section.style.opacity = 1;
                section.style.animation = 'slideIn 1s ease-in-out forwards';
            }
        });

        navItems.forEach(li => {
            li.classList.remove('active');
            if (li.querySelector('a').getAttribute('href').substring(1) === current) {
                li.classList.add('active');
            }
        });
    });
});
