// TRANSFER PAYMENT INFO TO CONFIRM PAGE
let isValid = true;

function paymentInfo() {
	validationInfo();
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
