$(function() {

	const $body = document.body;

// Аixing the menu when scrolling
const $navigationWrap = document.querySelector('.main-header-wrap');
const navigationHeight = $navigationWrap.offsetHeight;

window.onscroll = () => {
	let scrollTop = window.pageYOffset;

	if(scrollTop > navigationHeight) {
		$navigationWrap.classList.add('fix-nav');
		$body.style.paddingTop = navigationHeight + 'px';
	}	else {
		$navigationWrap.classList.remove('fix-nav');
		$body.style.paddingTop = null;
	}
}


// Initialization slider testimonials 
$('.testimonials__slider').slick({
	infinite: false,
	slidesToShow: 2,
	slidesToScroll: 1,
	dots: true,
	arrows: true,
	  // autoplay: true,
  	  // autoplaySpeed: 2000,
  	  nextArrow: '<button type="button" class="slider-next slick-next"><span class="next-icon"></span></button>',
  	  prevArrow: '<button type="button" class="slider-prev slick-prev"><span class="prev-icon"></span></button>',
  	  responsive: [
  	  {
  	  	breakpoint: 767,
  	  	settings: {
  	  		slidesToShow: 1,
  	  		arrows: false
  	  	}
  	  }
  	  ]
  	});


// Toogle text
// $('.more-btn').click(function(event) {
// 	event.preventDefault();

// 	const testimonialsText =  $(this).siblings('.testimonials__item-content').find('.testimonials__text');
// 	const testimonialsTextFull =  $(this).siblings('.testimonials__item-content').find('.testimonials__text-full');

// 	if(testimonialsText.is(':visible')) {
// 		testimonialsText.hide();
// 		testimonialsTextFull.show();
// 		$(this).text('View less');
// 	} else {
// 		testimonialsText.show();
// 		testimonialsTextFull.hide();
// 		$(this).text('View More');
// 	}
// })

// Toogle text
const $showBtn = document.querySelectorAll('.more-btn');
let tempTextHeight = null;

for(let i = 0; i < $showBtn.length; i++) {

	const $textContainer = $showBtn[i].previousElementSibling;
	const $hideText = $textContainer.children[0];
	const textHeight = $hideText.offsetHeight;
	const $showText = $textContainer.children[1];
	const fullHeighText = $showText.scrollHeight;

	$showBtn[i].addEventListener('click', function(event) {
		event.preventDefault();

		if(!$showText.style.height) {
			tempTextHeight = textHeight;
			const showTextPromise = new Promise(function(resolve, reject) {
				$hideText.style.display = 'none';
				$showText.style.height = textHeight + 'px';
				resolve();
			})
			showTextPromise.then(function() {
				setTimeout(function() {
					$showText.style.transition = 'height 0.5s';
					$showText.style.height = fullHeighText + 'px';
				}, 100)
			})
		} else {			
			const hideTextPromise = new Promise(function(resolve, reject) {
				$showText.style.height = tempTextHeight + 'px';
				resolve();
			})
			hideTextPromise.then(function() {				
				setTimeout(function() {
					$hideText.style.display = 'block';
					$showText.removeAttribute('style');
				}, 400)
			})
		}
	});
}

})
