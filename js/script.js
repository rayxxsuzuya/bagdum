$('.slickBlock').slick({
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 2,
	arrows: false,
	dots: true,
	autoplay: true,
	autoplaySpeed: 2000,
});


const menu = document.querySelector('#menu-btn');
const headerLinks = document.querySelector('.header__links');
const menuActive = document.querySelector('.header__menu');

menu.addEventListener('click', function () { 
	headerLinks.classList.toggle('header__links--active');
	menuActive.classList.toggle('active');
});