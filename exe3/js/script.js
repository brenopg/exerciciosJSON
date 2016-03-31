 var jogo;
$("button").on('click', function() {
	document.getElementById('mostra').innerHTML = "";
	
	if ($(this).attr("id") == "jogo1") {
		jogo = 0;
	}else if ($(this).attr("id") == "jogo2") {
		jogo = 1;
	}else if ($(this).attr("id") == "jogo3") {
		jogo = 2;
	}
	console.log(jogo);

	$.ajax({
		method: "GET",
		dataType: "json",
		url: "data/jogos.json",
		success: function(data) {
			$('#mostra').append('<h1>' + data.jogos[jogo].nome + '</h1>');
			$('#mostra').append('<img src="' + data.jogos[jogo].src + '">');
			$('#mostra').append('<h4>Data de Lançamento: ' + data.jogos[jogo].lancamento + '</h4>');	
			$('#mostra').append('<p>' + data.jogos[jogo].descricao + '</p>');	
			$('#mostra').append('<h2>' + data.jogos[jogo].nota + '</h2>');			
		},
        error: function(data){
	     console.log(data);
      }
	
	});


});

	


