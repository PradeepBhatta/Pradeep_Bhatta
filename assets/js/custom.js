$(document).ready(function() {
    "use strict";
    
    /*==================================
    * Author        : "ThemeSine"
    * Template Name : Khanas HTML Template
    * Version       : 1.0
    ==================================== */
    
    /*=========== TABLE OF CONTENTS ===========
    1. Scroll To Top 
    2. Smooth Scroll spy
    3. Progress-bar
    4. Owl Carousel
        - Clients Section
    5. Welcome animation support
    6. Course Details Toggle
    7. Navbar Shrink on Scroll
    ======================================*/
    
    // 1. Scroll To Top 
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 600) {
            $('.return-to-top').fadeIn();
        } else {
            $('.return-to-top').fadeOut();
        }
    });
    
    $('.return-to-top').on('click', function() {
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
    $(window).on('load', function() {
        $(".header-text h2, .header-text p").removeClass("animated fadeInUp").css({'opacity': '0'});
        $(".header-text a").removeClass("animated fadeInDown").css({'opacity': '0'});
    });

    $(window).on('load', function() {
        $(".header-text h2, .header-text p").addClass("animated fadeInUp").css({'opacity': '0'});
        $(".header-text a").addClass("animated fadeInDown").css({'opacity': '0'});
    });

    // 6. Course Details Toggle
    $('.course-header').on('click', function() {
        var courseItem = $(this).closest('.course-item');
        var courseDetails = courseItem.find('.course-details');
        
        // Toggle course details visibility
        if (courseDetails.is(':visible')) {
            courseDetails.slideUp(); // Collapse details with slide-up animation
            courseItem.removeClass('expanded');
            $(this).find('.expand-arrow').html('&darr;'); // Change arrow back to down
        } else {
            courseDetails.slideDown(); // Expand details with slide-down animation
            courseItem.addClass('expanded');
            $(this).find('.expand-arrow').html('&uarr;'); // Change arrow to up
        }
    });

    // 7. Navbar Shrink on Scroll
    $(window).on('scroll', function() {
        var navbar = $('nav.navbar.bootsnav');
        var logo = $('.nav-logo');
        
        if ($(this).scrollTop() > 50) { // If scrolled more than 50px
            navbar.addClass('scrolled'); // Add the 'scrolled' class for smaller navbar
            logo.addClass('scrolled'); // Add 'scrolled' class to reduce logo size
        } else {
            navbar.removeClass('scrolled'); // Remove 'scrolled' class when at the top
            logo.removeClass('scrolled'); // Restore original logo size
        }
    });
});
