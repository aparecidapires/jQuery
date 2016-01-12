$(function () {
/*
	$('img').error(function(){
		$('img').attr("src", "img/indisponivel.jpg");
	});
*/

	$('img').error(function(){
		var imagem = $(this).attr("src");
		alert('Imagem ' + imagem+ ' indisponivel');
		$('img').attr("src", "img/indisponivel.jpg");
	});

});