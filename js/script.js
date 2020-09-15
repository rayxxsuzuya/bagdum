
// Slick slider

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

 
//  Header Menu Button

const menu = document.querySelector('#menu-btn');
const headerLinks = document.querySelector('.header__links');
const menuActive = document.querySelector('.header__menu');

menu.addEventListener('click', function () { 
	headerLinks.classList.toggle('header__links--active');
	menuActive.classList.toggle('active');
});


// Scroll animations

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() { 
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 15;                            // Чем больше коэффициент, тем меньше надо делать скролл для появления анимации

			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if (animItemHeight > window.innerHeight) {
				let animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.remove('_active');
			} else {
				if(animItem.classList.contains('anim-no-hide')) {
					animItem.classList.add('_active');	
				}
			}
		}
	}
	function offset(el) { 
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
	}

	animOnScroll();
}

let stats = document.querySelectorAll('.stats__number');

function controle(elem, time) {
	let i = 0;
	let start = setInterval(move, 0);
	function move() {
	  if (i >= time) {
		clearInterval(start);
	  } else {
		i++;
		elem.textContent = i;
	  }
	}
}
  
let countOfUse = 0;

window.addEventListener('scroll', function(){
	if(window.pageYOffset >= document.querySelector('.stats').offsetTop - 500) {
		countOfUse++;

		if (countOfUse >= 2) {
			return;
		} else {
		controle(stats[0], 345);	
		controle(stats[1], 983);	
		controle(stats[2], 478);	
		controle(stats[3], 48);	
		}
	}
});

