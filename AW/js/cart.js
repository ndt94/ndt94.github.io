itemsArray = JSON.parse(localStorage.getItem('item'));

// FUNCTION TO RENDER ITEM FROM CART
function renderContent() {
	let htmlContent = '';
	itemsArray.forEach(function(item, index) {
		htmlContent = `
        <div class="row row${index} text-center">
			<div class="col-md-3">
				<p class="cart-title inline-p">Sản phẩm</p>
				<button onclick="removeFromCart(${index})" type="button" class="float-right inline-btn btn btn-light" data-toggle="modal" data-target="#myModal"><i class="fas fa-trash"></i></button>
				${item.image}
				<p class="cart-content">${item.name}</p>
			</div>

			<div class="col-md-3">
				<p class="cart-title">Giá</p>
				<p class="cart-content">${item.price} đ</p>
			</div>

			<div class="col-md-3 mb-3">
				<p class="cart-title">Số lượng</p>
				<button id="minus" onclick="decreaseQuantity(${index})" type="button" class="btn btn-sm btn-light"><i
				class="fas fa-minus"></i></button>
				<span id="quantity${index}" class="cart-content">${JSON.parse(
			localStorage.getItem('quantity' + index)
		) || 1}</span>
				<button id="plus" onclick="increaseQuantity(${index})" type="button" class="btn btn-sm btn-light"><i
				class="fas fa-plus"></i></button>
			</div>

			<div class="col-md-2">
				<p class="cart-title">Tổng</p>
				<p id="total${index}" class="cart-content total_price">${formatNumber(
			parseInt(item.price.replace(/\./g, '')) *
				(JSON.parse(localStorage.getItem('quantity' + index)) ||
					item.quantity)
		)} đ</p>
			</div>

			<div class="col-md-1">
				<button onclick="removeFromCart(${index})" type="button" class="btn btn-light" data-toggle="modal" data-target="#myModal"><i class="fas fa-trash"></i></button>
            </div>
        </div>
		`;
		$('.cart').append(htmlContent);
	});
}

// FUNCTION TO REMOVE ITEM FROM CART
function removeFromCart(id) {
	$('#modal').click(function() {
		$('.cart .row' + id).remove();
		index = itemsArray.indexOf(itemsArray[id]);
		if (index > -1) {
			itemsArray.splice(index, 1);
		}
		localStorage.setItem('item', JSON.stringify(itemsArray));
		$('#subtotal').html(formatNumber(subtotal()) + ' đ');
		$('#total').html(total() + ' đ');
	});
}

// FUNCTION TO FORMAT PRICE FROM NUMBER TO STRING
function formatNumber(num) {
	return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}

// FUNCTION TO FORMAT PRICE FROM STRING TO NUMBER
function formatString(string) {
	return parseInt(string.replace(/\./g, ''));
}

// FUNCTION FOR INCREASING QUANTITY
function increaseQuantity(id) {
	let quantity = localStorage.getItem('quantity' + id)
		? JSON.parse(localStorage.getItem('quantity' + id))
		: 1;
	quantity += 1;
	$('#quantity' + id).html(quantity);
	localStorage.setItem('quantity' + id, JSON.stringify(quantity));
	$('#total' + id).html(
		formatNumber(
			parseInt(itemsArray[id].price.replace(/\./g, '')) * quantity
		) + ' đ'
	);
	$('#subtotal').html(formatNumber(subtotal()) + ' đ');
	$('#total').html(total() + ' đ');
}

// FUNCTION FOR DECREASING QUANTITY
function decreaseQuantity(id, event) {
	let quantity = localStorage.getItem('quantity' + id)
		? JSON.parse(localStorage.getItem('quantity' + id))
		: 1;
	quantity -= 1;
	if (quantity <= 0) {
		event.preventDefault();
	} else {
		$('#quantity' + id).html(quantity);
		localStorage.setItem('quantity' + id, JSON.stringify(quantity));
		$('#total' + id).html(
			formatNumber(
				parseInt(itemsArray[id].price.replace(/\./g, '')) * quantity
			) + ' đ'
		);
		$('#subtotal').html(formatNumber(subtotal()) + ' đ');
		$('#total').html(total() + ' đ');
	}
}

// FUNCTION TO CALCULATE SUBTOTAL PRICE
function subtotal() {
	sub_total_arr = [];
	for (var i = 0; i < itemsArray.length; i++) {
		sub_total_arr.push(formatString($('#total' + i).text()));
	}
	return sub_total_arr.reduce(function(a, b) {
		return a + b;
	}, 0);
}

// FUNCTION TO CALCULATE TOTAL PRICE
function total() {
	let total;
	if ($('#coupon').val() === 'DEPTRAI') {
		total = formatNumber(subtotal() * 0.9);
	}
	if ($('#coupon').val() === 'XINHGAI') {
		total = formatNumber(subtotal() * 0.85);
	}
	if ($('#coupon').val() === 'CHONGDAY') {
		total = formatNumber(subtotal() * 0.7);
	}
	if ($('#coupon').val() === '') {
		total = formatNumber(subtotal());
	}
	return total;
}

// RERENDER TOTAL AFTER ENTER COUPON
$(window).click(function(e) {
	coupon = ['', 'DEPTRAI', 'XINHGAI', 'CHONGDAY'];
	if (coupon.includes($('#coupon').val())) {
		$('#total').html(total());
	} else {
		$('.alert1').text('Coupon không hợp lệ');
		$('.alert1').removeClass('d-none');
		$('.alert1').addClass('d-block');
		setTimeout(function() {
			$('.alert1').removeClass('d-block');
			$('.alert1').addClass('d-none');
		}, 2000);
	}
});

// Transfer Total, Subtotal value to confirm page
function transferTotal() {
	arr = [];
	arr.push($('#subtotal').text());
	arr.push($('#coupon').val());
	arr.push($('#total').text());
	localStorage.setItem('total', JSON.stringify(arr));
}
