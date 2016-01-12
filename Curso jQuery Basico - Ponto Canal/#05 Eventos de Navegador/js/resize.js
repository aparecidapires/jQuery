$(function () {

// Escalonar a imagem

	$('img').width($(window).width()).height($(window).height());    //Ao atualizar a página
	$(window).resize(function(){
		$('img').width($(window).width()).height($(window).height());   //ao redimensionar
	});

});