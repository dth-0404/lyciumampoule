$(document).ready(function () {
	"use strict";
	$('#back-top a').on("click", function () {
		$('body,html').animate({
			scrollTop: 0
		}, 1000);
		return !1
	});
	if (document.getElementById("default-select")) {
		$('select').niceSelect()
	};
	if (document.getElementById("service-select")) {
		$('select').niceSelect()
	};
	$(window).on('load', function () {
		$(".preloader-area").delay(200).fadeOut(500)
	})
	$('.img-gal').magnificPopup({
		type: 'image',
		gallery: {
			enabled: !0
		}
	});
	$('.play-btn').magnificPopup({
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: !1,
		fixedContentPos: !1
	});
	$(window).on("load", function () {
		$('.filters ul li').on("click", function () {
			$('.filters ul li').removeClass('active');
			$(this).addClass('active');
			var data = $(this).attr('data-filter');
			$grid.isotope({
				filter: data
			})
		});
		if (document.getElementById("work")) {
			var $grid = $(".grid").isotope({
				itemSelector: ".all",
				percentPosition: !0,
				masonry: {
					columnWidth: ".all"
				}
			})
		}
	});
	jQuery(document).ready(function ($) {
		if (document.getElementById("accordion")) {
			var accordion_1 = new Accordion(document.getElementById("accordion"), {
				collapsible: !1,
				slideDuration: 500
			})
		}
	});
	if (document.getElementById("skills")) {
		$('.skill-1').percentcircle({
			animate: !0,
			diameter: 400,
			guage: 5,
			coverBg: '#fff',
			bgColor: '#efefef',
			fillColor: '#988fff',
			percentSize: '24px',
			percentWeight: 'normal'
		});
		$('.skill-2').percentcircle({
			animate: !0,
			diameter: 400,
			guage: 5,
			coverBg: '#fff',
			bgColor: '#efefef',
			fillColor: '#988fff',
			percentSize: '24px',
			percentWeight: 'normal'
		});
		$('.skill-3').percentcircle({
			animate: !0,
			diameter: 400,
			guage: 5,
			coverBg: '#fff',
			bgColor: '#efefef',
			fillColor: '#988fff',
			percentSize: '24px',
			percentWeight: 'normal'
		});
		$('.skill-4').percentcircle({
			animate: !0,
			diameter: 400,
			guage: 5,
			coverBg: '#fff',
			bgColor: '#efefef',
			fillColor: '#988fff',
			percentSize: '24px',
			percentWeight: 'normal'
		})
	};
	$('.nav-menu').superfish({
		animation: {
			opacity: 'show'
		},
		speed: 400
	});
	if ($('#nav-menu-container').length) {
		var $mobile_nav = $('#nav-menu-container').clone().prop({
			id: 'mobile-nav'
		});
		$mobile_nav.find('> ul').attr({
			'class': '',
			'id': ''
		});
		$('body').append($mobile_nav);
		$('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="lnr lnr-menu"></i></button>');
		$('body').append('<div id="mobile-body-overly"></div>');
		$('#mobile-nav').find('.menu-has-children').prepend('<i class="lnr lnr-chevron-down"></i>');
		$(document).on('click', '.menu-has-children i', function (e) {
			$(this).next().toggleClass('menu-item-active');
			$(this).nextAll('ul').eq(0).slideToggle();
			$(this).toggleClass("lnr-chevron-up lnr-chevron-down")
		});
		$(document).on('click', '#mobile-nav-toggle', function (e) {
			$('body').toggleClass('mobile-nav-active');
			$('#mobile-nav-toggle i').toggleClass('lnr-cross lnr-menu');
			$('#mobile-body-overly').toggle()
		});
		$(document).click(function (e) {
			var container = $("#mobile-nav, #mobile-nav-toggle");
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				if ($('body').hasClass('mobile-nav-active')) {
					$('body').removeClass('mobile-nav-active');
					$('#mobile-nav-toggle i').toggleClass('lnr-cross lnr-menu');
					$('#mobile-body-overly').fadeOut()
				}
			}
		})
	} else if ($("#mobile-nav, #mobile-nav-toggle").length) {
		$("#mobile-nav, #mobile-nav-toggle").hide()
	}
	$('.nav-menu a, #mobile-nav a, .scrollto').on('click', function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			if (target.length) {
				var top_space = 0;
				if ($('#header').length) {
					top_space = $('#header').outerHeight();
					if (!$('#header').hasClass('header-fixed')) {
						top_space = top_space
					}
				}
				$('html, body').animate({
					scrollTop: target.offset().top - top_space
				}, 1500, 'easeInOutExpo');
				if ($(this).parents('.nav-menu').length) {
					$('.nav-menu .menu-active').removeClass('menu-active');
					$(this).closest('li').addClass('menu-active')
				}
				if ($('body').hasClass('mobile-nav-active')) {
					$('body').removeClass('mobile-nav-active');
					$('#mobile-nav-toggle i').toggleClass('lnr-times lnr-bars');
					$('#mobile-body-overly').fadeOut()
				}
				return !1
			}
		}
	});
	$(document).ready(function () {
		$('html, body').hide();
		if (window.location.hash) {
			setTimeout(function () {
				$('html, body').scrollTop(0).show();
				$('html, body').animate({
					scrollTop: $(window.location.hash).offset().top - 108
				}, 1000)
			}, 0)
		} else {
			$('html, body').show()
		}
	});
	if ($('.active-brand-carusel').length) {
		$('.active-brand-carusel').owlCarousel({
			items: 5,
			loop: !0,
			autoplayHoverPause: !0,
			autoplay: !0,
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 3,
				},
				991: {
					items: 4,
				},
				1024: {
					items: 5,
				}
			}
		})
	}
	if ($('.testi_slider').length) {
		$('.testi_slider').owlCarousel({
			loop: !0,
			margin: 30,
			items: 1,
			nav: !0,
			autoplay: 2500,
			smartSpeed: 1500,
			dots: !0,
			responsiveClass: !0,
			navText: ["<i class='lnr lnr-arrow-left'></i>", "<i class='lnr lnr-arrow-right'></i>"]
		})
	}
	if (document.getElementById("count")) {
		var countDownDate = new Date("Sep 5, 2018 15:37:25").getTime();
		var x = setInterval(function () {
			var now = new Date().getTime();
			var distance = countDownDate - now;
			var days = Math.floor(distance / (1000 * 60 * 60 * 24));
			var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((distance % (1000 * 60)) / 1000);
			document.getElementById("count").innerHTML = "<div class='col'><span>" + days + "</span><br> Days " + "</div>" + "<div class='col'><span>" + hours + "</span><br> Hours " + "</div>" + "<div class='col'><span>" + minutes + "</span><br> Minutes " + "</div>" + "<div class='col'><span>" + seconds + "</span><br> Seconds </div>";
			if (distance < 0) {
				clearInterval(x);
				document.getElementById("count").innerHTML = "EXPIRED"
			}
		}, 1000)
	}
	$('.nav-menu li a').click(function () {
		$('.nav-menu li a').removeClass('active');
		$(this).addClass('active')
	});
	$('.page-item').click(function () {
		$('.page-item').removeClass('active');
		$(this).addClass('active')
	});
	$('.btn-blog').click(function () {
		$('.btn-blog').removeClass('active-btn');
		$(this).addClass('active-btn');
		var data = $(this).attr('data-sidebar');
		$('.single-sidebar-widget').hide();
		$('html').find('.single-sidebar-widget#' + data).show()
	});
	$('.dropdown-toggle').click(function () {
		console.log('click');
		$('.dropdown-menu').fadeToggle()
	});
})
$('.icon-modal').click(function () {
	console.log('click');
	$('#myModal').modal('hide')
})
$(window).scroll(function () {
	var h = $(this).scrollTop();
	if (h > 600) {
		$('#back-top').css('opacity', '1');
	} else {
		$('#back-top').css('opacity', '0');
	}
});
$('.text-ques').eq(2).slideDown('slow');
$('.text-ques').eq(2).attr('data-status', 'block');
$('.list-ques li').each(function (index) {
	$(this).click(function () {
		var data = $(this).attr('data-ques');
		$('.text-ques').each(function () {
			var id = $(this).attr('id');
			if (id == data) {
				var status = $(this).attr('data-status');
				if (status == 'block') {
					$(this).slideUp('slow');
					$(this).attr('data-status', 'none')
				} else if (status == 'none') {
					$('.text-ques').slideUp('slow');
					$(this).slideDown('slow');
					$('.text-ques').each(function () {
						$(this).attr('data-status', 'none')
					});
					$(this).attr('data-status', 'block')
				}
			}
		})
	})
});
$('.owl-carousel').owlCarousel({
	loop: true,
	margin: 10,
	nav: false,
	dots: true,
	responsive: {
		0: {
			items: 1
		},
		600: {
			items: 1
		},
		1000: {
			items: 3
		}
	}
})
$(document).ready(function () { $('.see-more').click(function () { $('html, body').animate({ scrollTop: $(".sec-3").offset().top }, 1000) }) });
AOS.init();