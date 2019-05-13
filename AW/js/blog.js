$('.page1').on('click', function() {
	$('.page2')
		.parent()
		.removeClass('active');
	$('.page3')
		.parent()
		.removeClass('active');
	$('.page1')
		.parent()
		.addClass('active');
	$('#blog1').css('display', 'block');
	$('#blog3').css('display', 'none');
	$('#blog2').css('display', 'none');
});

$('.page2').on('click', function() {
	$('.page1')
		.parent()
		.removeClass('active');
	$('.page3')
		.parent()
		.removeClass('active');
	$('.page2')
		.parent()
		.addClass('active');
	$('#blog1').css('display', 'none');
	$('#blog3').css('display', 'none');
	$('#blog2').css('display', 'block');
});

$('.page3').on('click', function() {
	$('.page1')
		.parent()
		.removeClass('active');
	$('.page2')
		.parent()
		.removeClass('active');
	$('.page3')
		.parent()
		.addClass('active');
	$('#blog1').css('display', 'none');
	$('#blog2').css('display', 'none');
	$('#blog3').css('display', 'block');
});
