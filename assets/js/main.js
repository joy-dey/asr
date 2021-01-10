$(document).ready(function() {
    $('.slider-block').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
    });
})

// $(window).on('load', function() {
//     var portfolioIsotope = $('.doctors').isotope({
//         itemSelector: '.col-md-3',
//         layoutMode: 'fitRows'
//     });

//     $('#doctor-filter li').on('click', function() {
//         $("#doctor-filter li").removeClass('filter-active');
//         $(this).addClass('filter-active');
//         portfolioIsotope.isotope({
//             filter: $(this).data('filter')
//         });
//     });

// });

let counters = document.querySelectorAll('.counter'),
    speed = 200;

counters.forEach(counter => {
    function updateCounter() {
        let target = +counter.getAttribute('data-target'),
            count = +counter.innerHTML,
            incrementSpeed = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + incrementSpeed);
            setTimeout(updateCounter, 1);
        } else {
            counter.innerText = target;
        }
    }
    updateCounter();
})