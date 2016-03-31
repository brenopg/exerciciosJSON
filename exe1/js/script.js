$.ajax({
	method: "GET",
	dataType: "json",
	url: "data/estados.json",
	success: function(data) {

		for(var i in data.estados) {
			$('#combobox').append('<option>' + data.estados[i].nome + '</option>');
		}

},
error: function(data){
	console.log(data);
}

});
