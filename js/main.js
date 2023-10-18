document.addEventListener('DOMContentLoaded', () => {
    const body = document.body

    // Menu
    const menu = document.querySelector('.menu__body')
	const menuBtn = document.querySelector('.menu__icon')
	if (menu && menuBtn) {
		menuBtn.addEventListener('click', () => {
			menu.classList.toggle('active')
			menuBtn.classList.toggle('active')
			body.classList.toggle('lock')
		})
		menu.querySelectorAll('.menu__link').forEach(link => {
			link.addEventListener('click', () => {
				menu.classList.remove('active')
				menuBtn.classList.remove('active')
				body.classList.remove('lock')
			})
		})
	}

	// Slider
	const swiperHome = new Swiper('.home__slider', {
		// loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	})
})