watches = JSON.parse(localStorage.getItem('watches'));

// FUNCTION WHEN LOAD PAGE
$(function() {
	renderContent(watches);
	sortByPriceAsc();
	sortByPriceDesc();
	sortByPriceNormal();
	showFilter();
});

// FUNCTION TO FORMAT PRICE FROM STRING TO NUMBER
function formatString(string) {
	return parseInt(string.replace(/\./g, ''));
}

// FUNCTION TO RENDER CONTENT ON PRODUCTS RIGHT PART
function renderContent(arr) {
	let htmlContent = '';
	arr.forEach(function(item, index) {
		htmlContent += `
		<div class="col-md-4 text-center">
			<a id="product_${index}" href="detail_product.html" onclick="transferId(${index})">${
			item.image
		}</a>
			<p class="products-name">${item.name}</p>
			<p class="products-name">Year: ${item.year}</p>
            <p class="products-price">${item.price} đ</p>
            <a href="cart.html" class="products-btn products-btn-buy btn btn-sm btn-primary" onclick="pushInfoById(${index})">Mua ngay</a>
            <a id="product_${index}" href="detail_product.html" class="products-btn products-btn-more btn btn-sm btn-primary" onclick="transferId(${index})">Xem thêm</a>
        </div>
        `;
	});
	$('.products .col-md-9 .row').html(htmlContent);
}

// FUNCTION TO RENDER CONTENT AFTER FILTER BY TYPE OF WATCH
function renderContentByType(id) {
	watch = [];
	if ($('#' + id).prop('checked')) {
		watches.forEach(function(item, index) {
			if (item.type === id) {
				watch.push(item);
			}
		});
		renderContent(watch);
	} else {
		renderContent(watches);
	}
}

// FUNCTION TO RENDER CONTENT AFTER FILTER BY YEAR
function renderContentByYear(year) {
	watch = [];
	if ($('#' + year).prop('checked')) {
		watches.forEach(function(item, index) {
			if (parseInt(item.year) < year) {
				watch.push(item);
			}
		});
		renderContent(watch);
	} else {
		renderContent(watches);
	}
}

function renderContentByYear2() {
	watch = [];
	if ($('#1970').prop('checked')) {
		watches.forEach(function(item, index) {
			if (parseInt(item.year) < 1979 && parseInt(item.year) >= 1960) {
				watch.push(item);
			}
		});
		renderContent(watch);
	} else {
		renderContent(watches);
	}
}

function renderContentByYear3() {
	watch = [];
	if ($('#1980').prop('checked')) {
		watches.forEach(function(item, index) {
			if (parseInt(item.year) < 1999 && parseInt(item.year) >= 1980) {
				watch.push(item);
			}
		});
		renderContent(watch);
	} else {
		renderContent(watches);
	}
}

// FUNCTION TO RENDER CONTENT AFTER FILTER BY PRICE
function renderContentByPrice1() {
	watch = [];
	if ($('#20m').prop('checked')) {
		watches.forEach(function(item, index) {
			if (formatString(item.price) < 20000000) {
				watch.push(item);
			}
		});
		renderContent(watch);
	} else {
		renderContent(watches);
	}
}

function renderContentByPrice2() {
	watch = [];
	if ($('#20plus').prop('checked')) {
		watches.forEach(function(item, index) {
			if (
				formatString(item.price) <= 30000000 &&
				formatString(item.price) >= 20000000
			) {
				watch.push(item);
			}
		});
		renderContent(watch);
	} else {
		renderContent(watches);
	}
}

function renderContentByPrice3() {
	watch = [];
	if ($('#30plus').prop('checked')) {
		watches.forEach(function(item, index) {
			if (formatString(item.price) > 30000000) {
				watch.push(item);
			}
		});
		renderContent(watch);
	} else {
		renderContent(watches);
	}
}

// FUNCTION TO SORT ITEM BY PRICE
clone_watches = JSON.parse(JSON.stringify(watches));
function sortByPriceAsc() {
	$('.custom-select').change(function() {
		if (
			$(this)
				.children('option:selected')
				.val() === 'low'
		) {
			clone_watches.sort((a, b) =>
				formatString(a.price) > formatString(b.price) ? 1 : -1
			);
			renderContent(clone_watches);
		}
	});
}

function sortByPriceDesc() {
	$('.custom-select').change(function() {
		if (
			$(this)
				.children('option:selected')
				.val() === 'high'
		) {
			clone_watches.sort((a, b) =>
				formatString(a.price) < formatString(b.price) ? 1 : -1
			);
			renderContent(clone_watches);
		}
	});
}

function sortByPriceNormal() {
	$('.custom-select').change(function() {
		if (
			$(this)
				.children('option:selected')
				.val() === 'normal'
		) {
			renderContent(watches);
		}
	});
}

// CLICK LOCSP TO SHOW AND HIDE FILTER
function showFilter() {
	$('.select-left').click(function() {
		$('#filter').toggle('slow');
	});
}
