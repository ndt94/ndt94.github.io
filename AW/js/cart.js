itemsArray = JSON.parse(localStorage.getItem('item'));
console.log(itemsArray, typeof itemsArray);

function renderContent() {
	let htmlContent = '';
	itemsArray.forEach(function(item, index) {
		htmlContent = `
        <div class="row row${index} text-center">
			<div class="col-md-3">
				<p class="cart-title inline-p">Sản phẩm</p>
				<button onclick="removeFromCart(${index})" type="button" class="float-right inline-btn btn btn-light"><i
				class="fas fa-trash"></i></button>
				${item.image}
				<p class="cart-content">${item.name}</p>
			</div>

			<div class="col-md-3">
				<p class="cart-title">Giá</p>
				<p class="cart-content">${item.price}</p>
			</div>

			<div class="col-md-3">
				<p class="cart-title">Số lượng</p>
				<p class="cart-content"><i class="fas fa-minus"></i>${
					item.quantity
				}<i class="fas fa-plus"></i></p>
				<button id="minus" onclick="decreaseQuantity()" type="button" class="btn btn-light"><i
				class="fas fa-minus"></i></button>
				<span id="quantity${index}" class="cart-content">${JSON.parse(
			localStorage.getItem('quantity' + index)
		) || 1}</span>
				<button id="plus" onclick="increaseQuantity(${index})" type="button" class="btn btn-light"><i
				class="fas fa-plus"></i></button>
			</div>

			<div class="col-md-2">
				<p class="cart-title">Tổng</p>
				<p id="total${index}" class="cart-content total_price">${formatNumber(
			parseInt(item.price.replace(/\./g, '')) *
				(JSON.parse(localStorage.getItem('quantity' + index)) ||
					item.quantity)
		)}</p>
			</div>

			<div class="col-md-1">
				<button onclick="removeFromCart(${index})" type="button" class="btn btn-light"><i
				class="fas fa-trash"></i></button>
            </div>
        </div>
		`;
		$('.cart').append(htmlContent);
	});
}

function removeFromCart(id) {
	$('.cart .row' + id).remove();
	index = itemsArray.indexOf(itemsArray[id]);
	if (index > -1) {
		itemsArray.splice(index, 1);
	}
	localStorage.setItem('item', JSON.stringify(itemsArray));
}

function formatNumber(num) {
	return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}

function formatString(string) {
	return parseInt(string.replace(/\./g, ''));
}

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
		)
	);
}

sub_total_arr = [];
function subtotal() {
	for (var i = 0; i < itemsArray.length; i++) {
		sub_total_arr.push(formatString($('#total' + i).text()));
	}
	return sub_total_arr.reduce(function(a, b) {
		return a + b;
	}, 0);
}

// $('#test').html(formatNumber(subtotal()))
