(function($) {
	var pages = [
		"Era un d&iacute;a normal en la c&aacute;rcel. Todo lo normal que puede ser un d&iacute;a en un sitio as&iacute;. Est&aacute;bamos animados porque hoy algo cambiaba nuestra rutina. Unos amables se&ntilde;ores ven&iacute;an a visitar nuestras celdas con los chicos de mantenimiento para valorar unas reformas.",
		"Nos hab&iacute;an hecho salir a la galer&iacute;a y no hab&iacute;a mucho que hacer all&iacute;, salvo rajar con los dem&aacute;s. Uno de los veteranos se acerc&oacute; y empezamos a hablar. Era un tipo raro. Nunca me hab&iacute;a dirigido la palabra.",
		"Me extra&ntilde;&oacute; que me dijera:<br>&mdash; Llevo tiempo observ&aacute;ndote. &iquest;Te gusta estar aqu&iacute;?<br>&mdash; &iquest;T&uacute; qu&eacute; crees? Esto no tiene pinta de hotel' &mdash; respond&iacute; &mdash;. Adem&aacute;s, no deber&iacute;a estar aqu&iacute;: mi abogado la cag&oacute; &mdash; a&ntilde;ad&iacute; con un gui&ntilde;o."
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

		indice--

		if (indice < pages.length) {
			$('.nav-right').removeClass('disabled')
		}

		if (indice == 0) {
			$('.nav-left').addClass('disabled')
		}

		return false
	})

	$('.nav-right').on('click', evt => {
		evt.preventDefault()

		indice++

		if (indice > 0) {
			$('.nav-left').removeClass('disabled')
		}

		if (indice == pages.length) {
			$('.nav-right').addClass('disabled')
		}

		return false
	})

	addPage()


} (jQuery))