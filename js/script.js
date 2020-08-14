$('.slickBlock').slick({
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 2,
	arrows: false,
	dots: true,
	autoplay: true,
	autoplaySpeed: 2000,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 2,
				dots: true
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 435,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});


const menu = document.querySelector('#menu-btn');
const headerLinks = document.querySelector('.header__links');
const menuActive = document.querySelector('.header__menu');

menu.addEventListener('click', function () { 
	headerLinks.classList.toggle('header__links--active');
	menuActive.classList.toggle('active');
});