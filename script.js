document.addEventListener('DOMContentLoaded', function() {
    // Inicializar Swiper
    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        zoom: {
            maxRatio: 3,
            minRatio: 1,
            toggle: true
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 1,
                spaceBetween: 40,
            },
        }
    });

    // Manejar el zoom de las imágenes
    const slides = document.querySelectorAll('.swiper-slide img');
    slides.forEach(img => {
        img.addEventListener('click', function() {
            if (!this.classList.contains('zoomed')) {
                this.classList.add('zoomed');
                this.style.transform = 'scale(1.5)';
            } else {
                this.classList.remove('zoomed');
                this.style.transform = 'scale(1)';
            }
        });
    });

    // Preguntar por la descarga del PDF solo la primera vez
    if (!localStorage.getItem('pdfPromptShown')) {
        if (confirm('¿Desea descargar el manual de preguntas en PDF?')) {
            const link = document.createElement('a');
            link.href = 'project/MANUAL DE PREGUNTAS BDT MC.pdf';
            link.download = 'MANUAL DE PREGUNTAS BDT MC.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
        localStorage.setItem('pdfPromptShown', 'true');
    }
});