$(function() {
	show1();
	show2();
	show3();
});
// TRANSFER PAYMENT INFO TO CONFIRM PAGE
let isValid = true;

function paymentInfo() {
	validationInfo();
	validationPayment();
	if (isValid == false) {
		$('.payment-btn').attr('href', 'javascript:void(0)');
	} else {
		arr = [];
		arr.push($('#name').val());
		arr.push($('#address').val());
		arr.push($('#phone').val());
		arr.push(
			$('input:checked')
				.next()
				.text()
		);
		localStorage.setItem('payment', JSON.stringify(arr));
		window.location.href = 'confirm.html';
	}
}

// VALIDATION FOR PAYMENT INFO
function validationInfo() {
	if (
		$('#name')
			.val()
			.match('^[a-zA-Z ]+$') == null
	) {
		$('#name')
			.siblings('div')
			.text('Hãy điền đúng thông tin!');
		isValid = false;
		showAlert1();
	}

	if (
		$('#address')
			.val()
			.trim() == ''
	) {
		$('#address')
			.siblings('div')
			.text('Hãy điền thông tin này!');
		isValid = false;
		showAlert2();
	}

	if (
		$('#phone')
			.val()
			.match('^[0]{1}[19]{1}[0-9]{8,9}$') == null
	) {
		$('#phone')
			.siblings('div')
			.text('Hãy điền đúng thông tin!');
		isValid = false;
		showAlert3();
	}
	return isValid;
}

function validationPayment() {
	if (!$('input:checked').val()) {
		$('#payment_method').text('Hãy chọn phương thức thanh toán!');
		isValid = false;
		showAlert4();
	}

	if (
		$('#international').prop('checked') &&
		$('#card-number')
			.val()
			.match(
				'^((67d{2})|(4d{3})|(5[1-5]d{2})|(6011))-?s?d{4}-?s?d{4}-?s?d{4}|3[4,7]d{13}$'
			) == null
	) {
		$('.alert5').text('Hãy điền đúng thông tin!');
		isValid = false;
		showAlert5();
	}

	if (
		$('#international').prop('checked') &&
		$('#card-holder')
			.val()
			.match('[A-Z ]+') == null
	) {
		$('.alert6').text('Hãy điền đúng thông tin!');
		isValid = false;
		showAlert6();
	}

	if (
		$('#international').prop('checked') &&
		$('#exp-date')
			.val()
			.match(
				'(((0[123456789]|10|11|12)([/])(([1][9][0-9][0-9])|([2][0-9][0-9][0-9]))))'
			) == null
	) {
		$('.alert7').text('Hãy điền đúng thông tin!');
		isValid = false;
		showAlert7();
	}
}

// SHOW ALERT WHEN INFO IS NOT SUBMITTED
function showAlert1() {
	$('.payment-btn').on('click', function() {
		$('.alert1').removeClass('d-none');
		$('.alert1').addClass('d-block');
		setTimeout(function() {
			$('.alert1').removeClass('d-block');
			$('.alert1').addClass('d-none');
		}, 2000);
	});
}

function showAlert2() {
	$('.payment-btn').on('click', function() {
		$('.alert2').removeClass('d-none');
		$('.alert2').addClass('d-block');
		setTimeout(function() {
			$('.alert2').removeClass('d-block');
			$('.alert2').addClass('d-none');
		}, 2000);
	});
}

function showAlert3() {
	$('.payment-btn').on('click', function() {
		$('.alert3').removeClass('d-none');
		$('.alert3').addClass('d-block');
		setTimeout(function() {
			$('.alert3').removeClass('d-block');
			$('.alert3').addClass('d-none');
		}, 2000);
	});
}

function showAlert4() {
	$('.payment-btn').on('click', function() {
		$('.alert4').removeClass('d-none');
		$('.alert4').addClass('d-block');
		setTimeout(function() {
			$('.alert4').removeClass('d-block');
			$('.alert4').addClass('d-none');
		}, 2000);
	});
}

function showAlert5() {
	$('.payment-btn').on('click', function() {
		$('.alert5').removeClass('d-none');
		$('.alert5').addClass('d-block');
		setTimeout(function() {
			$('.alert5').removeClass('d-block');
			$('.alert5').addClass('d-none');
		}, 2000);
	});
}

function showAlert6() {
	$('.payment-btn').on('click', function() {
		$('.alert6').removeClass('d-none');
		$('.alert6').addClass('d-block');
		setTimeout(function() {
			$('.alert6').removeClass('d-block');
			$('.alert6').addClass('d-none');
		}, 2000);
	});
}

function showAlert7() {
	$('.payment-btn').on('click', function() {
		$('.alert7').removeClass('d-none');
		$('.alert7').addClass('d-block');
		setTimeout(function() {
			$('.alert7').removeClass('d-block');
			$('.alert7').addClass('d-none');
		}, 2000);
	});
}

// SHOW PAYMENT INFO WHEN LABEL IS CLICK
function show1() {
	$('label[for="national"]').on('click', function() {
		$('#account_info')
			.removeClass('d-none')
			.addClass('d-block');
		$('#card_info')
			.removeClass('d-block')
			.addClass('d-none');
	});
}

function show2() {
	$('label[for="international"]').on('click', function() {
		$('#card_info')
			.removeClass('d-none')
			.addClass('d-block');
		$('#account_info')
			.removeClass('d-block')
			.addClass('d-none');
	});
}

function show3() {
	$('label[for="purse"]').on('click', function() {
		$('#card_info')
			.removeClass('d-block')
			.addClass('d-none');
		$('#account_info')
			.removeClass('d-block')
			.addClass('d-none');
	});
}
