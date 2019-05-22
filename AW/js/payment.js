function paymentInfo() {
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
