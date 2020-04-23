$(function(){

    $('.section-top_slider').slick({
        arrows: true,
        dots: true,
        dotsClass: 'header_dots',
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        infinite: false
    });

    $('.section-testimonials_items').slick({
        arrows: false,
        dots: true,
        dotsClass: 'dots'
    });

});

// Hamburger btn start.

$(document).ready(function(){
    $(".toggle").click(function(){
      $(this).toggleClass("is-active");
    });
});

function toggle(){
    let containerNav = document.getElementById('containerNav');
    containerNav.classList.toggle('active')
};

// Hamburger btn end.

$('.header-page_hamburger').on('click', function(){
    $('.nav-main ul').slideToggle();
});