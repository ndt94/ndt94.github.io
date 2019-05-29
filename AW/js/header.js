// FUNCTION TO ADD TOTAL CART ITEM NEXT TO CART ICON IN HEADER & BOTTOM OF INDEX PAGE
function cartItem() {
	itemsArray = JSON.parse(localStorage.getItem('item'));
	if (itemsArray !== null) {
		htmlContent = `<i class="fas fa-shopping-cart"> (${itemsArray.length ||
			0}) </i>`;
		$('.fa-shopping-cart')
			.parent()
			.html(htmlContent);
	} else {
		htmlContent = `<i class="fas fa-shopping-cart"> (0) </i>`;
		$('.fa-shopping-cart')
			.parent()
			.html(htmlContent);
	}
}
