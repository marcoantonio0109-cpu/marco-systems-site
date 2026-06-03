function revealElements() {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealElements);
window.addEventListener('load', revealElements);
particlesJS("particles-js", {
    particles: {
        number: {
            value: 80
        },

        color: {
            value: "#0d6efd"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.4
        },

        size: {
            value: 3
        },

        line_linked: {
            enable: true,
            distance: 150,
            color: "#0d6efd",
            opacity: 0.3,
            width: 1
        },

        move: {
            enable: true,
            speed: 2
        }
    },

    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: "grab"
            }
        },

        modes: {
            grab: {
                distance: 180,
                line_linked: {
                    opacity: 0.8
                }
            }
        }
    },

    retina_detect: true
});