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

export default modalController