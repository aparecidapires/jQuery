$(function () {

	var ex = $('.mensagem');
	var ex2 = $('.mensagem2');

	var button = $(':button');

	button.click(function(){
		ex.fadeTo(5000,0.2,function(){
			ex2.fadeTo("slow",0.3); 
		});       
	});

});
