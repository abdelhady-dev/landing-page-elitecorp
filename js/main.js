/*jslint browser: true*/
/*global $, document, window*/
$(document).ready(function () {
    'use strict';

    var winH     = $(window).height(),
        upperH   = $('.upper-bar').innerHeight(),
        navH     = $('.navbar').innerHeight(),
        colorLi = $('.option-box .option ul li'),
        scrBotton = $('.scroll-button i');
    // adjust slider hight
    $('.slider .carousel-item').height(winH - (upperH + navH));
    // adjust slider hight

    // form
    $('.sign-up input').on('focusout', function () {
        if ($(this).val() !== '') {
            $(this).parent().addClass('data');
        } else {
            $(this).parent().removeClass('data');
        }
    });
    // form

    // gallery
    $('.gallery .thumbnails img').on('click', function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
        $('.master-img img').hide().attr('src', $(this).attr('src')).fadeIn(500);
    });
    // Previous and next Botton
    $('.gallery i').on('click', function () {
        if ($(this).hasClass('fa-chevron-right')) {
            if ($('.gallery .thumbnails .active').is(':last-child')) {
                $('.gallery .thumbnails .col').eq(0).children('img').click();
            } else {
                $('.gallery .thumbnails .active').next().children('img').click();
            }
        } else if ($(this).hasClass('fa-chevron-left')) {
            if ($('.gallery .thumbnails .active').is(':first-child')) {
                $('.gallery .thumbnails .col').eq(4).children('img').click();
            } else {
                $('.gallery .thumbnails .active').prev().children('img').click();
            }
        }
    });
    // gallery

    // featured work shuffle
    $('.featured-work ul li, .navbar-light .navbar-nav .nav-item.tag').on('click', function () {
        // another way to add and remove class active
        //
        // $('.navbar-nav a').removeClass('active');
        // $(this).addClass('active');
        //
        //
        $(this).addClass('active').siblings().removeClass('active');

        if ($(this).data('class') === 'all') {
            $('.shuffle-images .col-lg').css('opacity', 1);
        } else {
            $('.shuffle-images .col-lg').css('opacity', '.09');
            $($(this).data('class')).parent().css('opacity', 1);
        }
    });
    $('.featured-work .shuffle-images .row .col-lg, .Pricing-Table .card').hover(function () {
        $(this).addClass('active').siblings().removeClass('active');
    }, function () {
        $(this).removeClass('active');
    });
    // featured work shuffle

    // option box
    $('.option-box i').on('click', function () {
        $('.option-box .option').slideToggle();
    });

    // change color theme by click from option box
    colorLi
        .eq(0).css('backgroundColor', '#08526d').end() // defult
        .eq(1).css('backgroundColor', '#19449A').end() // blue
        .eq(2).css('backgroundColor', '#590099').end() // purple
        .eq(3).css('backgroundColor', '#000').end() // black
        .eq(4).css('backgroundColor', '#A01B03'); // red

    colorLi.on('click', function () {
        $(':root').css({
            '--fristcolor': $(this).data('frist'),
            '--secondcolor': $(this).data('second')
        });
        // console.log( $(this).attr('data-value') );
    });
    /*
    * colorLi.on('click', function () {
    *     $("link[href*='theme']").attr('href', $(this).attr('data-value'));
    *     // console.log( $(this).attr('data-value') );
    * });
    */
    // change color theme by click from option box

    // option box

    // scroll top button
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 800) {
            scrBotton.fadeIn();
        } else { scrBotton.fadeOut(); }
    });

    scrBotton.on('click', function () {
        $('html, body').animate({ scrollTop : 0 }, 1000);
    });
    // scroll top button

    // scroll to element
    $('.navbar ul li.tag a').on('click', function (e) {
        e.preventDefault();
        var scroll = $('#' + $(this).data('scroll'));
        $('html, body').animate({
            scrollTop : scroll.offset().top
        }, 1000);
        // console.log($(this).data('scroll'));
    });
    // scroll to element

    // pop up
    $('.bottom').on('click', function (e) {
        e.preventDefault();
        $($(this).data('pop')).fadeIn(600);
    });

    $('.pop-up').on('click', function () {
        $(this).fadeOut(600);
    });

    $('.pop-up .pa').on('click', function (e) {
        e.stopPropagation();
    });

    $('.pop-up .pop-close').on('click', function (e) {
        e.preventDefault();
        $('.pop-up').fadeOut(600);
        // $(this).parentsUntil('.pop-up').parent().fadeOut(600);
    });


    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            $('.pop-up').fadeOut(600);
        }
    });
    // pop up

    /*
    *
    * // plugin center
    * $.fn.center = function () {
    *     $(this).css({
    *         'position': 'absolute',
    *         'top': ($(window).height() - $(this).innerHeight()) / 2,
    *         'left': ($(window).width() - $(this).innerWidth()) / 2
    *     });
    * };
    *
    * // plugin center
    * $('.loading-overlay .spinner').center();
    * $('.log-in-pop .pa').center();
    *
    */

    // bottom effects
    // from center

    $('.from-center').hover(function () {
        $(this).find('span').eq(1).animate({
            width: '100%',
            left: 0
        }, 200);
    }, function () {
        $(this).find('span').eq(1).animate({width: 0, left: '50%'}, 200);
    });

    // bottom effects

});

// loading screen
$(window).on('load', function () {
    'use strict';
    $('body').css('overflow', 'auto');
    $('.loading-overlay .spinner').fadeOut(1500, function () {
        $(this).parent().fadeOut(1000, function () {
            $(this).remove();
        });
    });
});
// loading screen
