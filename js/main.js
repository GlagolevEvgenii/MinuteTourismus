const embedEngine = {
    init() {
        embedEngine.binds();
    },
    binds() {
        const swiper = new Swiper('.swiper', {
            slidesPerView: 1,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                767: {
                    slidesPerView: 3.32,
                    spaceBetween: 20
                }
            }
        });
        const timerElement = document.getElementById('timer');
        const timerElement1 = document.getElementById('timer1');
        let timerStarted = false;

        function startTimer(duration, display) {
            let timer = duration, minutes, seconds;
            const interval = setInterval(function () {
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                display.textContent = minutes + ":" + seconds;

                if (--timer < 0) {
                    clearInterval(interval);
                }
            }, 1000);
        }
        const observer = new IntersectionObserver(function (entries) {
            if (entries[0].isIntersecting && !timerStarted) {
                startTimer(60, timerElement); // 60 секунд
                timerStarted = true;
            }
        }, { threshold: 1.0 });


        observer.observe(timerElement);
        startTimer(60,timerElement1)
        const menuBtnRef = document.querySelector("[data-menu-button]");
        const mobileMenuRef = document.querySelector("[data-menu]");
        const expanded =
            menuBtnRef.getAttribute("aria-expanded") === "true" || false;

        menuBtnRef.addEventListener("click", () => {
            menuBtnRef.classList.toggle("is-open");
            menuBtnRef.setAttribute("aria-expanded", !expanded);

            mobileMenuRef.classList.toggle("is-open");
            document.body.classList.toggle("is-open");
        });
        mobileMenuRef.addEventListener("click", () => {
            menuBtnRef.classList.toggle("is-open");
            menuBtnRef.setAttribute("aria-expanded", !expanded);

            mobileMenuRef.classList.toggle("is-open");
            document.body.classList.toggle("is-open");
        });

        window.onscroll = function () {
            scrollFunction();
        };

        function scrollFunction() {
            if (
                document.body.scrollTop > 466 ||
                document.documentElement.scrollTop > 466
            ) {
                document.querySelector(".nav").classList.add("nav--sticky");
            } else {
                document.querySelector(".nav").classList.remove("nav--sticky");
            }
        }
        function scrollToTop() {
            document.querySelector(".hero").scrollTo({
                top: 0,
                behavior: "smooth",
            });
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }
    },
};
document.addEventListener("DOMContentLoaded", embedEngine.init);
