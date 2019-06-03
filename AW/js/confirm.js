payment_info = JSON.parse(localStorage.getItem('payment'));
console.log(payment_info);
itemsArray = JSON.parse(localStorage.getItem('item'));
console.log(itemsArray);
total = JSON.parse(localStorage.getItem('total'));
console.log(total);

$(function() {
	renderContent();
	renderCartContent();
});

function renderContent() {
	let htmlContent = '';
	htmlContent += `
        <div class="col-md-6 info-left">
            <p class="info-title">Thông tin người nhận</p>
            <p class="info-content" id="name">${payment_info[0]}</p>
            <p class="info-content" id="phone">${payment_info[2]}</p>
            <p class="info-content" id="address">${payment_info[1]}</p>
            <p class="info-title">Hình thức thanh toán</p>
            <p class="info-content">${payment_info[3]}</p>
        </div>

        <div class="col-md-6 info-right">
            <p class="info-title">Thông tin đơn hàng</p>
            <div class="row product-info"></div>
            <div class="row total">
                <div class="col-md-6">
                    <p class="info-content">Tạm tính</p>
                </div>
                <div class="col-md-6">
                    <p class="info-content">${total[0]}</p>
                </div>

                <div class="col-md-6">
                    <p class="info-content">Coupon</p>
                </div>
                <div class="col-md-6">
                    <p class="info-content">${total[1]}</p>
                </div>

                <div class="col-md-6">
                    <p class="info-content info-content-bold">Thành tiền</p>
                </div>
                <div class="col-md-6">
                    <p class="info-content info-content-bold">${total[2]}</p>
                </div>
            </div>
        </div>
    `;
	$('.info .row').html(htmlContent);
}

function renderCartContent() {
	let htmlContent = '';
	itemsArray.forEach(function(item, index) {
		htmlContent += `
            <div class="col-md-6">
                ${item.image}
            </div>

            <div class="col-md-6">
                <p class="info-content info-content-bold">${item.name}</p>
                <p class="info-content">${item.price + ' đ'} x ${JSON.parse(
			localStorage.getItem('quantity' + index)
		) || item.quantity}</p> 
            </div>
        `;
	});
	$('.info-right .product-info').html(htmlContent);
}
