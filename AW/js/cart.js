itemsArray = JSON.parse(localStorage.getItem('item'));
console.log(itemsArray, typeof itemsArray);

function renderContent() {
    let htmlContent = '';
    itemsArray.forEach(function(item, index) {
        htmlContent += `
        <div class="row row${index}">
			<div class="col-md-3">
				<p>Sản phẩm</p>
				${item.image}
				<p>${item.name}</p>
			</div>

			<div class="col-md-3">
				<p>Giá</p>
				<p>${item.price}</p>
			</div>

			<div class="col-md-3">
				<p>Số lượng</p>
				<p>1</p>
			</div>

			<div class="col-md-2">
				<p>Tổng</p>
				<p>20.000.000</p>
			</div>

			<div class="col-md-1">
            <button onclick="removeFromCart(${index})" type="button" class="btn btn-light"><i
            class="fas fa-trash"></i></button>
            </div>
        </div>
		`;
        $('.cart').html(htmlContent);
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
