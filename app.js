($ => {
	var pages = [
	"Era un día normal en la cárcel. Todo lo normal que puede ser un día en un sitio así. Estábamos animados porque hoy algo cambiaba nuestra rutina. Unos amables señores venían a visitar nuestras celdas con los chicos de mantenimiento para valorar unas reformas."
	],
	indice = 0

	var addPage = (_indice) => {
		let index = _indice || indice

		$('#main').append("<p>" + pages[index] + "</p>")
	}

	addPage()


} (jQuery))