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

	// Tabs
	function showTabs(btn, body) {
		const tabsBtn = document.querySelectorAll(btn)
		const tabsContent = document.querySelectorAll(body)

		if (tabsContent.length > 0 || tabsBtn.length > 0) {
			function hideTabContent() {
				tabsContent.forEach(item => {
					item.classList.remove('active')
				})

				tabsBtn.forEach(item => {
					item.classList.remove('active')
				})
			}

			function showTabContent(i = 0) {
				tabsContent[i].classList.add('active')
				tabsBtn[i].classList.add('active')
			}

			hideTabContent()
			showTabContent()

			tabsBtn.forEach((tab, index) => {
				tab.addEventListener('click', () => {
					hideTabContent()
					showTabContent(index)
				})
			})
		}
	}
	showTabs('.tabs-application__btn', '.tab-application')

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

	const swiperCompany = new Swiper('.certificate-company__slider', {
		slidesPerView: 1.5,
		spaceBetween: 10,
		breakpoints: {
			480: {
				slidesPerView: 2.5,
				spaceBetween: 20,
			},
			640: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
		},
	})
})