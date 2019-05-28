// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
	scrollFunction();
};

function scrollFunction() {
	if (
		document.body.scrollTop > 20 ||
		document.documentElement.scrollTop > 20
	) {
		document.getElementById('myBtn').style.display = 'block';
		document.getElementById('myCart').style.display = 'block';
	} else {
		document.getElementById('myBtn').style.display = 'none';
		document.getElementById('myCart').style.display = 'none';
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// FUNCTION TO ADD TOTAL CART ITEM NEXT TO CART ICON IN INDEX PAGE
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
