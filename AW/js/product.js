watches = JSON.parse(localStorage.getItem('watches'));
console.log(watches);

$(function() {
    renderContent(watches);
});

// FUNCTION TO FORMAT PRICE FROM STRING TO NUMBER
function formatString(string) {
    return parseInt(string.replace(/\./g, ''));
}

function renderContent(arr) {
    let htmlContent = '';
    arr.forEach(function(item, index) {
        htmlContent += `
        <div class="col-md-4 text-center">
            ${item.image}
			<p class="products-name">${item.name}</p>
			<p class="products-name">Year: ${item.year}</p>
            <p class="products-price">${item.price}</p>
            <a href="cart.html" class="products-btn products-btn-buy btn btn-primary" onclick="pushInfoById(${index})">Mua ngay</a>
            <a id="product_${index}" href="detail_product.html" class="products-btn products-btn-more btn btn-primary" onclick="transferId(${index})">Xem thêm</a>
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
