watches = JSON.parse(localStorage.getItem('watches'));
console.log(watches);

$(function() {
	renderContent();
});

function renderContent() {
	let htmlContent = '';
	watches.forEach(function(item, index) {
		htmlContent += `
        <div class="col-md-4 text-center">
            ${item.image}
            <p class="products-name">${item.name}</p>
            <p class="products-price">${item.price}</p>
            <a href="cart.html" class="products-btn products-btn-buy btn btn-primary" onclick="pushInfoById(${index})">Mua ngay</a>
            <a id="product_${index}" href="detail_product.html" class="products-btn products-btn-more btn btn-primary" onclick="transferId(${index})">Xem thêm</a>
        </div>
        `;
	});
	$('.products .col-md-9 .row').html(htmlContent);
}
