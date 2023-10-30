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

	const swiperProductCard = new Swiper('.product-card__slider', {
		// loop: true,
		navigation: {
			nextEl: '.product-card__slider-button-next',
			prevEl: '.product-card__slider-button-prev',
		},
	})

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

	// Modals
	const modalController = ({ modal, btnOpen, btnClose, time = 300 }) => {
		const buttonElems = document.querySelectorAll(btnOpen)
		const modalElem = document.querySelector(modal)

		const closeModal = event => {
			const target = event.target

			if (
				target === modalElem ||
				(btnClose && target.closest(btnClose)) ||
				event.code === 'Escape'
			) {
				modalElem.style.opacity = 0

				setTimeout(() => {
					modalElem.style.visibility = 'hidden'
				}, time)

				window.removeEventListener('keydown', closeModal)
			}
		}

		const openModal = () => {
			modalElem.style.visibility = 'visible'
			modalElem.style.opacity = 1
			window.addEventListener('keydown', closeModal)
		}

		buttonElems.forEach(btn => {
			btn.addEventListener('click', openModal)
		})

		modalElem.addEventListener('click', closeModal)
	}
	modalController({
		modal: '.modal-feedback',
		btnOpen: '.header__btn',
		btnClose: '.modal-feedback__close',
	})
	modalController({
		modal: '.modal-feedback-product',
		btnOpen: '.product-card__btn--order',
		btnClose: '.modal-feedback-product__close',
	})
	modalController({
		modal: '.modal-buy',
		btnOpen: '.product-card__btn--buy',
		btnClose: '.modal-buy__close',
	})
})
