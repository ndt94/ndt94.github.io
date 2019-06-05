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
		$('.payment-btn').attr('href', 'confirm.html');
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
	}
}

// VALIDATION FOR PAYMENT INFO
function validationInfo() {
	if (
		$('#name')
			.val()
			.trim() == ''
	) {
		htmlContent = `
			Hãy điền thông tin này!!
			<button type="button" class="close" data-dismiss="alert" aria-label="Close">
				<span aria-hidden="true">&times;</span>
			</button>
		`;
		$('#name')
			.siblings('div')
			.html(htmlContent);
		isValid = false;
		showAlert1();
	} else {
		isValid = true;
	}

	if (
		$('#address')
			.val()
			.trim() == ''
	) {
		htmlContent = `
			Hãy điền đúng thông tin!
			<button type="button" class="close" data-dismiss="alert" aria-label="Close">
				<span aria-hidden="true">&times;</span>
			</button>
		`;
		$('#address')
			.siblings('div')
			.html(htmlContent);
		isValid = false;
		showAlert2();
	} else {
		isValid = true;
	}

	if (
		$('#phone')
			.val()
			.trim() == ''
	) {
		htmlContent = `
			Hãy điền đúng thông tin!
			<button type="button" class="close" data-dismiss="alert" aria-label="Close">
				<span aria-hidden="true">&times;</span>
			</button>
		`;
		$('#phone')
			.siblings('div')
			.html(htmlContent);
		isValid = false;
		showAlert3();
	} else {
		isValid = true;
	}
	return isValid;
}

function validationPayment() {
	if (!$('input:checked').val()) {
		htmlContent = `
		Hãy chọn phương thức thanh toán!
			<button type="button" class="close" data-dismiss="alert" aria-label="Close">
				<span aria-hidden="true">&times;</span>
			</button>
		`;
		$('#payment_method').html(htmlContent);
		isValid = false;
		showAlert4();
	} else {
		isValid = true;
	}

	if (
		$('#international').prop('checked') &&
		$('#card-number')
			.val()
			.match(
				'^((67d{2})|(4d{3})|(5[1-5]d{2})|(6011))-?s?d{4}-?s?d{4}-?s?d{4}|3[4,7]d{13}$'
			) == null
	) {
		htmlContent = `
		Hãy điền đúng thông tin!
			<button type="button" class="close" data-dismiss="alert" aria-label="Close">
				<span aria-hidden="true">&times;</span>
			</button>
		`;
		$('.alert5').html(htmlContent);
		isValid = false;
		showAlert5();
	}

	if (
		$('#international').prop('checked') &&
		$('#card-holder')
			.val()
			.match('[A-Z ]+') == null
	) {
		htmlContent = `
		Hãy điền đúng thông tin!
			<button type="button" class="close" data-dismiss="alert" aria-label="Close">
				<span aria-hidden="true">&times;</span>
			</button>
		`;
		$('.alert6').html(htmlContent);
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
		htmlContent = `
		Hãy điền đúng thông tin!
			<button type="button" class="close" data-dismiss="alert" aria-label="Close">
				<span aria-hidden="true">&times;</span>
			</button>
		`;
		$('.alert7').html(htmlContent);
		isValid = false;
		showAlert7();
	}
	return isValid;
}

// SHOW ALERT WHEN INFO IS NOT SUBMITTED
function showAlert1() {
	$('.payment-btn').on('click', function() {
		$('.alert1').removeClass('d-none');
		$('.alert1').addClass('d-block');
	});
}

function showAlert2() {
	$('.payment-btn').on('click', function() {
		$('.alert2').removeClass('d-none');
		$('.alert2').addClass('d-block');
	});
}

function showAlert3() {
	$('.payment-btn').on('click', function() {
		$('.alert3').removeClass('d-none');
		$('.alert3').addClass('d-block');
	});
}

function showAlert4() {
	$('.payment-btn').on('click', function() {
		$('.alert4').removeClass('d-none');
		$('.alert4').addClass('d-block');
	});
}

function showAlert5() {
	$('.payment-btn').on('click', function() {
		$('.alert5').removeClass('d-none');
		$('.alert5').addClass('d-block');
	});
}

function showAlert6() {
	$('.payment-btn').on('click', function() {
		$('.alert6').removeClass('d-none');
		$('.alert6').addClass('d-block');
	});
}

function showAlert7() {
	$('.payment-btn').on('click', function() {
		$('.alert7').removeClass('d-none');
		$('.alert7').addClass('d-block');
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

	$('#national').on('click', function() {
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

	$('#international').on('click', function() {
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

	$('#purse').on('click', function() {
		$('#card_info')
			.removeClass('d-block')
			.addClass('d-none');
		$('#account_info')
			.removeClass('d-block')
			.addClass('d-none');
	});
}
