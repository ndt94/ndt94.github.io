productId = JSON.parse(localStorage.getItem('productId'));

watches = JSON.parse(localStorage.getItem('watches'));

$(function() {
	renderProductContent(productId);
});

function renderProductContent(id) {
	let htmlContent = '';
	htmlContent += `
    <p class="detail-right-title">${watches[id].name}</p>
    <p class="detail-right-price">${
		watches[id].price
	}<i class="fas fa-cart-plus"></i></p>
    <p class="detail-right-title">FROM THE CURATOR</p>
    <p class="detail-right-content">When it comes to dress watches, it doesn’t
        get much more classic than the Cartier Tank.
        Its iconic shape, incredible proportions,
        and clean aesthetic help to make it truly the
        stuff of legends. Naturally, a Tank wouldn’t be
        complete without its legendary sapphire
        capped crown,a nice pop of color on
        an otherwise understated watch.

        And of course, it comes complete with a
        certificate of authenticity and appraisal
        and is shipped carefully and
        fully insured via UPS expedited service.</p>
    <p class="detail-right-title">NUTS & BOLTS</p>
    <p class="detail-right-content">Maker: Cartier</p>
    <p class="detail-right-content">Model: Must de Tank</p>
    <p class="detail-right-content">Case Diameter: 23mm x 32mm</p>
    <p class="detail-right-content">Lug Width: 16 millimeters</p>
    <p class="detail-right-content">Case Material: Gold plated</p>
    <p class="detail-right-content">Case Condition: Great condition</p>
    <p class="detail-right-content">Dial Condition: Great condition</p>
    <p class="detail-right-content">Movement: Quartz</p>
	`;
	$('.detail-right').html(htmlContent);
}
