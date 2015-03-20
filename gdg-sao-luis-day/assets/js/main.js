// 21 Dez 2012, 4:42
;(function ($, window, document, undefined) {
	'use strict';
	({
		animateScroll : function () {
			$("#nav").find('.nav-link').on('click', function (event) {

				var $this = $(this),
					$htmlBody = $('html, body'),
					linkTarget = $this.attr('href'),
					offSetTop;

				// If not start with #, stop here!
				if (linkTarget[0] !== '#') {
					return false;
				}

				event.preventDefault();

				// Get distance of top
				offSetTop = $(linkTarget).offset().top;

				// Animate the scroll
				$htmlBody.stop().animate({scrollTop : offSetTop}, function () {
					location.hash = linkTarget;
				});
			});
		},

		menu : function () {
			var nav = $('#nav');

    		$(window).scroll(function () {
        		if ($(this).scrollTop() > 136) {
            		nav.addClass("f-nav");
        		} else {
            		nav.removeClass("f-nav");
        		}
    		});
		},

		speakersEffect : function () {
			$('.hover').hover(function(){
				$(this).addClass('flip');
			},function(){
				$(this).removeClass('flip');
			});
		},

		init : function () {
			var that = this;

			$(function () {
				that.animateScroll();
				that.menu();
				that.speakersEffect();
			});
		}
	}).init();
}(jQuery, window, document));
