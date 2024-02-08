/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
  'use strict';




  $(function () {
    $('#datetimepicker54').datetimepicker({
      daysOfWeekDisabled: [0, 2, 3, 4, 5, 6],
      format: 'L'
    });
  });



  $(document).on('scroll', function () {
    var headr = $("#mainNav");
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      headr.addClass('scrolled');
    } else {
      headr.removeClass('scrolled');

    }
  });


  $(function () {
    var headr = $("#mainNav");
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      headr.addClass('scrolled');
    } else {
      headr.removeClass('scrolled');

    }

  });

  $(".side-open").click(function () {
    $('#fixed-side').addClass("active");
    $("body").addClass("modal-open");
    $('#lay').addClass("active");

  });
  $(".side-close").click(function () {
    $('#fixed-side').removeClass("active");
    $("body").removeClass("modal-open");
    $('#lay').removeClass("active");
  });



  var swiper = new Swiper('.pic-slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    grabCursor: true,
    loop: true,
    navigation: {
      nextEl: '.pic-next',
      prevEl: '.pic-prev',
    },


  });

  var swiper2 = new Swiper('.vid-slider', {

    observer: true,
    observeParents: true,
    loop: true,
    navigation: {
      nextEl: '.bb22',
      prevEl: '.bb33',

    },
  });




  var swiper3 = new Swiper('.pic-slider2', {
    slidesPerView: 1,
    spaceBetween: 0,
    grabCursor: true,
    loop: true,
    navigation: {
      nextEl: '.pic-next2',
      prevEl: '.pic-prev2',
    },


  });

  var swiper4 = new Swiper('.vid-slider2', {

    observer: true,
    observeParents: true,
    loop: true,
    navigation: {
      nextEl: '.bb222',
      prevEl: '.bb332',

    },
  });








});