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
            <button type="button" class="products-btn products-btn-buy btn btn-primary">Mua ngay</button>
            <button type="button" class="products-btn products-btn-more btn btn-primary">Xem thêm</button>
        </div>
        `;
    });
    $('.products .col-md-9 .row').html(htmlContent);
}
