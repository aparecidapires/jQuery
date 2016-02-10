$(function () {

	var ex = $('.mensagem');

	var button = $(':button');

	button.click(function(){
		ex.fadeToggle("slow");       //Alterna: some e aparece o elemento
	});

});