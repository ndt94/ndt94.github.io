watches = JSON.parse(localStorage.getItem('watches'));
console.log(watches);

$(function() {
	renderContent(watches);
});

function renderContent(arr) {
	let htmlContent = '';
	arr.forEach(function(item, index) {
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

function renderContentByType1() {
	watch = [];
	if ($('#watch').prop('checked')) {
		watches.forEach(function(item, index) {
			if (item.type === 'watch') {
				watch.push(item);
			}
		});
		renderContent(watch);
	} else {
		renderContent(watches);
	}
}

function renderContentByType2() {
	watch = [];
	if ($('#pocket_watch').prop('checked')) {
		watches.forEach(function(item, index) {
			if (item.type === 'pocket_watch') {
				watch.push(item);
			}
		});
		renderContent(watch);
	} else {
		renderContent(watches);
	}
}

function renderContentByType3() {
	watch = [];
	if ($('#other').prop('checked')) {
		watches.forEach(function(item, index) {
			if (item.type === 'other') {
				watch.push(item);
			}
		});
		renderContent(watch);
	} else {
		renderContent(watches);
	}
}
