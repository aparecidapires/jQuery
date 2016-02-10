$(function () {

	var ex = $('.mensagem');

	$('.ev1').click(function(){
		ex.hide(2000);
	});

	$('.ev2').click(function(){
		ex.show(2000);
	});

	$('.ev3').click(function(){
		ex.toggle(2000);
	});

	$('.ev4').keyup(function(){
		var texto = $(this).val();

		if(texto == 'hide'){
			ex.hide('slow');
		}
		if(texto == 'show'){
			ex.show('slow');
		}
		if(texto == 'toggle'){
			ex.toggle('slow');
		}
	});
});
