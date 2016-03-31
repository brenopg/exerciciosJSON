$.ajax({
	method: "GET",
	dataType: "json",
	url: "data/imagens.json",
	success: function(data) {

		for(var i in data.imagens) {
			$('#imgs').append('<img src="' + data.imagens[i].src + '"></img>');

		}

}

	
});

