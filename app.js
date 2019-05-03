(function($) {
	var pages = [
		"Era un d&iacute;a normal en la c&aacute;rcel. Todo lo normal que puede ser un d&iacute;a en un sitio as&iacute;. Est&aacute;bamos animados porque hoy algo cambiaba nuestra rutina. Unos amables se&ntilde;ores ven&iacute;an a visitar nuestras celdas con los chicos de mantenimiento para valorar unas reformas.",
		"Nos hab&iacute;an hecho salir a la galer&iacute;a y no hab&iacute;a mucho que hacer all&iacute;, salvo rajar con los dem&aacute;s. Uno de los veteranos se acerc&oacute; y empezamos a hablar. Era un tipo raro. Nunca me hab&iacute;a dirigido la palabra.",
		"Me extra&ntilde;&oacute; que me dijera:<br><em>&mdash; Llevo tiempo observ&aacute;ndote. &iquest;Te gusta estar aqu&iacute;?<br>&mdash; &iquest;T&uacute; qu&eacute; crees? Esto no tiene pinta de hotel' &mdash;</em> respond&iacute; <em>&mdash;. Adem&aacute;s, no deber&iacute;a estar aqu&iacute;: mi abogado la cag&oacute; &mdash;</em> a&ntilde;ad&iacute; con un gui&ntilde;o.",
		"<em>&mdash; Lo que me imaginaba, un tipo listo &mdash;</em>.respondi&oacute; &eacute;l.  <em>&mdash; &iquest;Te gustar&iacute;a escapar de estas paredes? Te necesitamos &mdash;</em> a&ntilde;adi&oacute;.<br><em>&mdash; &iquest;Qu&eacute; pasa, tienes algo preparado, viejo? &mdash;</em> respond&iacute; con sorna, pensando que me estaba tomando el pelo."
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

		$('.nav-right').removeClass('disabled')

		if (--indice == 0) {
			$('.nav-left').addClass('disabled')
			indice = 0
		}

		addPage()

		return false
	})

	$('.nav-right').on('click', evt => {
		evt.preventDefault()

		$('.nav-left').removeClass('disabled')

		if (++indice == pages.length) {
			$('.nav-right').addClass('disabled')
			indice = pages.length - 1
		}

		addPage()

		return false
	})

	addPage()


} (jQuery))