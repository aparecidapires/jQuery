$(function () {

	var ex = $('.mensagem');

	var button = $(':button');

	button.click(function(){
		ex.fadeOut('slow');       //Some o elemento 100%
	}).dblclick(function(){
		ex.fadeIn("slow");        //Aparece o elemento 100%
	});

});
