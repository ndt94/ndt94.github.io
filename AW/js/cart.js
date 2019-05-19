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
			</div>

			<div class="col-md-2">
				<p class="cart-title">Tổng</p>
				<p class="cart-content">${formatNumber(
					parseInt(item.price.replace(/\./g, '')) * item.quantity
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
	$('.cart .row' + id).empty();
	index = itemsArray.indexOf(itemsArray[id]);
	if (index > -1) {
		itemsArray.splice(index, 1);
	}
	localStorage.setItem('item', JSON.stringify(itemsArray));
}

function formatNumber(num) {
	return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}
