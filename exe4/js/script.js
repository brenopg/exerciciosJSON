$.ajax({
		method: "GET",
		dataType: "json",
		url: "data/noticias.json",
		success: function(data) {		

			for(i in data.noticias){		
			$('#not' + i + '').append('<p>' + data.noticias[i].noticia + '</p>');
		}
		   
		},
        error: function(data){
	     console.log(data);
      
}
	});
