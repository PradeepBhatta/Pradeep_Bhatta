$(document).ready(function(){
    "use strict";

    /*=========== TABLE OF CONTENTS ===========
    1. Scroll To Top 
    2. Smooth Scroll spy
    3. Progress-bar
    4. Owl Carousel
        - Clients Section
    5. Welcome animation support
    ======================================*/
    
    // 1. Scroll To Top 
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 600) {
            $('.return-to-top').fadeIn();
        } else {
            $('.return-to-top').fadeOut();
        }
    });
    
    $('.return-to-top').on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        }, 1500);
        return false;
    });
    
    // 2. Smooth Scroll spy
    $('.header-area').sticky({
        topSpacing: 0
    });

    $('li.smooth-menu a').bind("click", function(event) {
        event.preventDefault();
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 0
        }, 1200, 'easeInOutExpo');
    });

    $('body').scrollspy({
        target: '.navbar-collapse',
        offset: 0
    });

    // 3. Progress-bar
    var dataToggleTooTip = $('[data-toggle="tooltip"]');
    var progressBar = $(".progress-bar");
    if (progressBar.length) {
        progressBar.appear(function () {
            dataToggleTooTip.tooltip({
                trigger: 'manual'
            }).tooltip('show');
            progressBar.each(function () {
                var each_bar_width = $(this).attr('aria-valuenow');
                $(this).width(each_bar_width + '%');
            });
        });
    }
    
    // 4. Owl Carousel

    // i. Clients Section
    $('#client-carousel').owlCarousel({
        items: 4, // Display 4 items at a time
        loop: true,
        margin: 10, // Space between items
        nav: true, // Show navigation arrows
        dots: false, // Hide dots
        autoplay: true, // Enable autoplay
        autoplayTimeout: 3000, // Autoplay interval in milliseconds
        autoplayHoverPause: true, // Pause autoplay on hover
        responsive: {
            0: {
                items: 1 // Show 1 item on small screens
            },
            600: {
                items: 2 // Show 2 items on medium screens
            },
            1000: {
                items: 4 // Show 4 items on large screens
            }
        }
    });

    // 5. Welcome animation support
    $(window).load(function(){
        $(".header-text h2, .header-text p").removeClass("animated fadeInUp").css({'opacity': '0'});
        $(".header-text a").removeClass("animated fadeInDown").css({'opacity': '0'});
    });

    $(window).load(function(){
        $(".header-text h2, .header-text p").addClass("animated fadeInUp").css({'opacity': '0'});
        $(".header-text a").addClass("animated fadeInDown").css({'opacity': '0'});
    });

});
