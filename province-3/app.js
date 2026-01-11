document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. Scroll Reveal: การ์ดลอยขึ้นเมื่อเลื่อนถึง --- */
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150; 

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // เรียกใช้ทันทีตอนโหลด

    /* --- 2. Parallax Header: ภาพหัวเลื่อนช้าๆ --- */
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        let offset = window.pageYOffset;
        header.style.backgroundPositionY = offset * 0.5 + 'px';
    });

    /* --- 3. Back to Top Button --- */
    const backToTopBtn = document.getElementById("backToTop");

    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});