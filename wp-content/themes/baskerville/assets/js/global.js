jQuery(document).ready(function ($) {

	$wrapper = $('.posts');
	if ($wrapper.length) {
		$grid = $wrapper.imagesLoaded(function () {
			$grid = $wrapper.masonry({
				itemSelector: '.post-container',
				stagger: 0,
				transitionDuration: 0,
			});
		});

		setTimeout(function () { $grid.masonry(); }, 500);
		setTimeout(function () { $grid.masonry(); }, 1000);
		setTimeout(function () { $grid.masonry(); }, 1500);
		setTimeout(function () { $grid.masonry(); }, 2000);
		setTimeout(function () { $grid.masonry(); }, 2500);
	}

	// Toggle mobile-menu
	$(".nav-toggle").on("click", function () {
		$(this).toggleClass("active");
		$(".mobile-navigation").slideToggle();
	});


	// Toggle search form
	$(".search-toggle").on("click", function () {
		$(this).toggleClass("active");
		$(".header-search-block").slideToggle();
		if ($(this).hasClass('active')) {
			$(".header-search-block .search-field").focus();
		} else {
			$(".header-search-block .search-field").blur();
		}
		return false;
	});


	// Hide mobile-menu > 1000
	$(window).resize(function () {
		if ($(window).width() > 1000) {
			$(".nav-toggle").removeClass("active");
			$(".mobile-navigation").hide();
		}
	});


	// Display dropdown menus on focus.
	$('.main-menu a').on('blur focus', function (e) {
		$(this).parents('li.menu-item-has-children').toggleClass('focus');
	});


	// Load Flexslider
	$(".flexslider").flexslider({
		animation: "slide",
		controlNav: false,
		prevText: "Previous",
		nextText: "Next",
		smoothHeight: true
	});


	// resize videos after container
	var vidSelector = ".post iframe, .post object, .post video, .widget-content iframe, .widget-content object, .widget-content iframe";
	var resizeVideo = function (sSel) {
		$(sSel).each(function () {
			var $video = $(this),
				$container = $video.parent(),
				iTargetWidth = $container.width();

			if (!$video.attr("data-origwidth")) {
				$video.attr("data-origwidth", $video.attr("width"));
				$video.attr("data-origheight", $video.attr("height"));
			}

			var ratio = iTargetWidth / $video.attr("data-origwidth");

			$video.css("width", iTargetWidth + "px");
			$video.css("height", ($video.attr("data-origheight") * ratio) + "px");
		});
	};

	resizeVideo(vidSelector);

	$(window).resize(function () {
		resizeVideo(vidSelector);
	});


	// Smooth scroll to header
	$('.tothetop').click(function () {
		$('html,body').animate({ scrollTop: 0 }, 500);
		$(this).unbind("mouseenter mouseleave");
		return false;
	});

	// Comment Toggle Logic
	$(document).on("click", ".comment-toggle-button", function () {
		var $container = $(this).next(".comment-toggle-container");
		var $button = $(this);
		$container.slideToggle(400, function () {
			if ($container.is(":visible")) {
				$button.text("收起歷史留言");
			} else {
				$button.text("打開歷史留言");
			}
		});
	});

	// Auto-expand if hash matches a comment or respond section
	function checkCommentHash() {
		if (window.location.hash && (window.location.hash.indexOf("#comment-") !== -1 || window.location.hash === "#comments" || window.location.hash === "#respond")) {
			var $button = $(".comment-toggle-button");
			var $container = $(".comment-toggle-container");
			if ($button.length && $container.length) {
				$button.text("收起歷史留言");
				$container.show();

				var targetId = window.location.hash;
				var $target = $(targetId);
				if ($target.length) {
					$('html, body').animate({
						scrollTop: $target.offset().top - 100
					}, 500);
				}
			}
		}
	}

	checkCommentHash();
	$(window).on('hashchange', checkCommentHash);

});