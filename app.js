(function($) {
	var pages = [
		"Era un día normal en la cárcel. Todo lo normal que puede ser un día en un sitio así. Estábamos animados porque hoy algo cambiaba nuestra rutina. Unos amables señores venían a visitar nuestras celdas con los chicos de mantenimiento para valorar unas reformas."
	],
	indice = 0

	var addPage = (_indice) => {
		let index = _indice || indice

		$('#main')
			.empty()
			.append("<p>" + pages[index] + "</p>")
	}

	// métodos de manipulación del DOM
	$('.nav-left').on('click', evt => {
		evt.preventDefault()

		indice = (indice == 0) ? 0 : indice++

		if (indice < pages.length) {
			$('.nav-right').addClass('disabled')
		}
	})

	addPage()


} (jQuery))