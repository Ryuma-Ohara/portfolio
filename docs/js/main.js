// loading
$(function() {
	var h = $(window).height();

	$('.wrapper').css('display','none');
	$('.loader-bg ,.loader').height(h).css('display','block');
});

$(function(){
	setTimeout('stopload()',4000);
});

function stopload(){
	$('.wrapper').css('display','block');
	$('.loader-bg').delay(900).fadeOut(800);
	$('.loader').delay(600).fadeOut(300);
}



// Slider
var swiper = new Swiper('.swiper-container', {
		pagination: {
			el: '.swiper-pagination',
			type: 'progressbar',
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});


// pagetop
// function get scroll amount
function getScrolled() {
 return ( window.pageYOffset !== undefined ) ? window.pageYOffset: document.documentElement.scrollTop;
}

// Get button element
var topButton = document.getElementById( 'page-top' );

// function move to top
function scrollToTop() {
  var scrolled = getScrolled();
  window.scrollTo( 0, Math.floor( scrolled / 1.2 ) );
  if ( scrolled > 0 ) {
    window.setTimeout( scrollToTop, 20 );
  }
};
