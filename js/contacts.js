document.addEventListener('DOMContentLoaded', () => {
	// Карта
    let mapCenter = [60.063819172290714, 30.30896628769685]
	function init() {
		let map = new ymaps.Map('map', {
			center: mapCenter,
			zoom: 18,
		})

        let placemark = new ymaps.Placemark(mapCenter)
        map.geoObjects.add(placemark)

		map.controls.remove('geolocationControl')
		map.controls.remove('searchControl')
		map.behaviors.disable(['scrollZoom'])
	}
    ymaps.ready(init)
})