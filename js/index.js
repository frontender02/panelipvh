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

	// Modals
	const modalController = ({ modal, btnOpen, btnClose, time = 300 }) => {
		const buttonElems = document.querySelectorAll(btnOpen)
		const modalElem = document.querySelector(modal)

		modalElem.style.cssText = `
			display: flex;
			visibility: hidden;
			opacity: 0;
			transition: opacity ${time}ms ease-in-out;
		`

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