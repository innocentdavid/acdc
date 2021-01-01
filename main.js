function closeNav() {
    $('.navbar').fadeOut();
}

function openNav() {
    $('.navbar').fadeIn();
}

$(document).ready(function () {

    $(window).scroll(function () {
        if (window.pageYOffset >= 511) {
            document.querySelector('header .nav').style.background = 'rgba(0, 0, 0, 0.9)';
        } else {
            document.querySelector('header .nav').style.background = 'transparent';
        }
    })

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 4,
        loop: true,
        margin: 30,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                nav: true,
                loop: false
            }
        },
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
    });

});

function donate() {
    var modal = $('.donate');
    modal.fadeIn();
    modal.css('display', 'flex');
}

function excosDetails(id) {
    var modal = $('.exco-details');
    modal.fadeIn();
    modal.css('display', 'flex');
}

$('.close').on('click', function () {
    $('.modal').fadeOut()
})


$('.post-master').on('click', function () {
    setTimeout(() => {
        window.location = 'single-post.html'
    }, 500);
})
