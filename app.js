(function($) {
	var pages = [
		"Era un d&iacute;a normal en la c&aacute;rcel. Todo lo normal que puede ser un d&iacute;a en un sitio as&iacute;. Est&aacute;bamos animados porque hoy algo cambiaba nuestra rutina. Unos amables se&ntilde;ores ven&iacute;an a visitar nuestras celdas con los chicos de mantenimiento para valorar unas reformas.",
		"Nos hab&iacute;an hecho salir a la galer&iacute;a y no hab&iacute;a mucho que hacer all&iacute;, salvo rajar con los dem&aacute;s. Uno de los veteranos se acerc&oacute; y empezamos a hablar. Era un tipo raro. Nunca me hab&iacute;a dirigido la palabra.",
		"Me extra&ntilde;&oacute; que me dijera:<br><em>&mdash; Llevo tiempo observ&aacute;ndote. &iquest;Te gusta estar aqu&iacute;?<br>&mdash; &iquest;T&uacute; qu&eacute; crees? Esto no tiene pinta de hotel &mdash;</em> respond&iacute; <em>&mdash;. Adem&aacute;s, no deber&iacute;a estar aqu&iacute;: mi abogado la cag&oacute; &mdash;</em> a&ntilde;ad&iacute; con un gui&ntilde;o.",
		"<em>&mdash; Lo que me imaginaba, un tipo listo &mdash;</em>.respondi&oacute; &eacute;l.  <em>&mdash; &iquest;Te gustar&iacute;a escapar de estas paredes? Te necesitamos &mdash;</em> a&ntilde;adi&oacute;.<br><em>&mdash; &iquest;Qu&eacute; pasa, tienes algo preparado, viejo? &mdash;</em> respond&iacute; con sorna, pensando que me estaba tomando el pelo.",
		"<em>&mdash; S&iacute;. Llevo meses prepar&aacute;ndolo &mdash;</em> me respondi&oacute; muy serio, casi en un susurro.<br><em>&mdash; &iquest;De verdad? &iquest;Y qu&eacute; pasa con la seguridad, con los guardias? &mdash;</em> pregunt&eacute;, intrigado.<em>&mdash; Los guardias lo saben. No parece importarles mucho.<br>&mdash; Co&ntilde;o. Pues me apunto.</em>",
		"<em>&mdash; Perfecto. Contigo somos cinco, el n&uacute;mero perfecto &mdash;</em> respondi&oacute; &eacute;l, con un nuevo brillo en los ojos.<br><em>&mdash; &iquest;Qu&eacute; tengo que hacer? &iquest;De qu&eacute; me encargo?<br>&mdash; Tan s&oacute;lo tienes que buscar la manera de acabar en la enfermer&iacute;a. Del resto me encargo yo.</em>",
		"A la ma&ntilde;ana siguiente me llevaron a la enfermer&iacute;a. No sabr&iacute;a describir c&oacute;mo me sent&iacute;a. Entre nervioso e incr&eacute;dulo. Expectante por saber qu&eacute; me deparar&iacute;a aquella extra&ntilde;a reuni&oacute;n.",
		"All&iacute; estaba mi nuevo amigo, aunque quiz&aacute;s deb&iacute;a empezar a llamarle 'jefe'. Se lo preguntar&iacute;a m&aacute;s tarde, cuando nos explicara su plan. Por la forma que me miraban algunos, pude identificar al resto del grupo: Antonio 'el rana', Luis 'el poca ropa' y Paquito 'el callao'.",
		"Tras una mirada de aprobaci&oacute;n, el 'jefe' me se&ntilde;al&oacute; un rinc&oacute;n de la enfermer&iacute;a donde el personal se sol&iacute;a reunir durante sus horas de servicio. Por la noche estar&iacute;a desocupado, y estaba lo suficientemente alejado para poder hablar tranquilamente.",
		"Aquella noche me cost&oacute; quedarme dormido, pero cuando lo hice, ca&iacute; en un profundo sue&ntilde;o. Me despert&eacute; alarmado, pensando que se habr&iacute;an fugado sin mi. Al volver la vista, pude ver a mi grupo sentados en la mesa, esper&aacute;ndome.",
		"El 'jefe' presid&iacute;a la mesa, y todos los dem&aacute;s le miraban con atenci&oacute;n mientras hablaba. Hab&iacute;a papeles con garabatos por todos lados, con esquemas y bocetos de estructuras y edificios.",
		"<em>&mdash; Excelente. Ya est&aacute;s aqu&iacute; &mdash;</em> coment&oacute; el 'jefe' al verme <em>&mdash;. Por favor, toma asiento. Tenemos poco tiempo. Me queda disponible un Elfo Arquero y un Mago de las Islas Orientales. &iquest;Qu&eacute; prefieres?</em>"

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

			$('#main').append('<p style="font-size:1.2em"><strong><em>Fin</em></strong></p>')
		}

		addPage()

		return false
	})

	addPage()


} (jQuery))