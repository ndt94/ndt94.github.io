// FUNCTION TO RENDER HEADER + FOOTER
function includeHTML() {
	var z, i, elmnt, file, xhttp;
	/* Loop through a collection of all HTML elements: */
	z = document.getElementsByTagName('*');
	for (i = 0; i < z.length; i++) {
		elmnt = z[i];
		/*search for elements with a certain atrribute:*/
		file = elmnt.getAttribute('w3-include-html');
		if (file) {
			/* Make an HTTP request using the attribute value as the file name: */
			xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4) {
					if (this.status == 200) {
						elmnt.innerHTML = this.responseText;
					}
					if (this.status == 404) {
						elmnt.innerHTML = 'Page not found.';
					}
					/* Remove the attribute, and call this function once more: */
					elmnt.removeAttribute('w3-include-html');
					includeHTML();
				}
			};
			xhttp.open('GET', file, true);
			xhttp.send();
			/* Exit the function: */
			return;
		}
	}
}

// DATA FOR RENDERING
let watches = [
	{
		id: 0,
		name: 'CARTIER TANK LOUIS',
		price: '20.000.000',
		image:
			'<img src="img/index/VACHERON-CONSTANTIN-22-03-14-19-1-850x566.png" class="img-fluid" alt="cartier_tank_louis">'
	},
	{
		id: 1,
		name: 'VACHERON CONSTANTIN 222',
		price: '20.000.000',
		image:
			'<img src="img/index/AP-Rolyal-Oak-03-12-19-1-450x300.png" class="img-fluid" alt="vacheron">'
	},
	{
		id: 2,
		name: 'AUDEMARS PIGUET ROYAL OAK 14790',
		price: '20.000.000',
		image:
			'<img src="img/index/CARTIER-MUST-DE-TANK-02-16-19-1-450x300.png" class="img-fluid" alt="audemars">'
	},
	{
		id: 3,
		name: 'CARTIER “STEPPED” TANK',
		price: '20.000.000',
		image:
			'<img src="img/index/CARTIER-TANK-BLUE-01-29-19-1-450x300.png" class="img-fluid" alt="cartier_stepped_tank">'
	},
	{
		id: 4,
		name: 'OMEGA SPEEDMASTER CO-AXIAL',
		price: '20.000.000',
		image:
			'<img src="img/index/OMEGA-SPEEDMASTER-COAXIAL-CHRONO-02-16-19-1-450x300.png" class="img-fluid" alt="omega">'
	},
	{
		id: 5,
		name: 'ROLEX DAY DATE REF. 1803',
		price: '20.000.000',
		image:
			'<img src="img/index/ROLEX-DATEJUST-1801-YG-02-16-19-1-450x300.png" class="img-fluid" alt="rolex_1803">'
	},
	{
		id: 6,
		name: 'UNIVERSAL GENEVE POLEROUTER',
		price: '20.000.000',
		image:
			'<img src="img/index/UNIVERSAL-GENEVE-GOLD-12-25-18-1-450x300.png" class="img-fluid" alt="universal_geneve">'
	},
	{
		id: 7,
		name: 'OMEGA SUVERAN',
		price: '20.000.000',
		image:
			'<img src="img/index/OMEGA-PATINA-01-02-19-1-450x300.png" class="img-fluid" alt="omega_patina">'
	},
	{
		id: 8,
		name: 'OMEGA GENEVE DYNAMIC',
		price: '20.000.000',
		image:
			'<img src="img/index/Omega-Geneve-Dynamic-12-04-18-1-450x300.png" class="img-fluid" alt="omega_geneve">'
	}
];
localStorage.setItem('watches', JSON.stringify(watches));
// THREE FUNCTION TO RENDER INDEX PAGE
function renderContentRow1() {
	let htmlContent = '';
	for (var i = 0; i < 3; i++) {
		htmlContent += `
		<div class="col-md-4 text-center">
			${watches[i].image}
			<p class="products-name">${watches[i].name}</p>
			<p class="products-price">${watches[i].price}</p>
			<a id="product${i}" href="cart.html" class="products-btn products-btn-buy btn btn-primary" onclick="pushInfoById(${i})">Mua ngay</a>
			<a id="product_${i}" href="detail_product.html" class="products-btn products-btn-more btn btn-primary" onclick="transferId(${i})">Xem thêm</a>
		</div>
	`;
		$('.row1').html(htmlContent);
	}
}

function renderContentRow2() {
	let htmlContent = '';
	for (var i = 3; i < 6; i++) {
		htmlContent += `
		<div class="col-md-4 text-center">
			${watches[i].image}
			<p class="products-name">${watches[i].name}</p>
			<p class="products-price">${watches[i].price}</p>
			<a id="product${i}" href="cart.html" class="products-btn products-btn-buy btn btn-primary" onclick="pushInfoById(${i})">Mua ngay</a>
			<a id="product_${i}" href="detail_product.html" class="products-btn products-btn-more btn btn-primary" onclick="transferId(${i})">Xem thêm</a>
		</div>
	`;
		$('.row2').html(htmlContent);
	}
}

function renderContentRow3() {
	let htmlContent = '';
	for (var i = 6; i < 9; i++) {
		htmlContent += `
		<div class="col-md-4 text-center">
			${watches[i].image}
			<p class="products-name">${watches[i].name}</p>
			<p class="products-price">${watches[i].price}</p>
			<a id="product${i}" href="cart.html" class="products-btn products-btn-buy btn btn-primary" onclick="pushInfoById(${i})">Mua ngay</a>
			<a id="product_${i}" href="detail_product.html" class="products-btn products-btn-more btn btn-primary" onclick="transferId(${i})">Xem thêm</a>
		</div>
	`;
		$('.row3').html(htmlContent);
	}
}

// FUNCTION TO RENDER CART ITEM
function pushInfoById(id) {
	let itemsArray = localStorage.getItem('item')
		? JSON.parse(localStorage.getItem('item'))
		: [];
	if (containObject(itemsArray, watches[id]) === false) {
		itemsArray.push(watches[id]);
	}
	localStorage.setItem('item', JSON.stringify(itemsArray));
}

// TRANSFER ID TO DETAIL_PRODUCT PAGE FOR RENDERING
function transferId(id) {
	productId = $('#product_' + id)
		.attr('id')
		.slice(-1);
	localStorage.setItem('productId', productId);
}

// FUNCTION TO CHECK IF ID IS ALREADY IN LOCAL STORAGE
function containObject(array, object) {
	let arr = [];
	for (i = 0; i < array.length; i++) {
		if (array[i].id !== object.id) {
			arr.push(0);
		} else {
			arr.push(1);
		}
	}
	console.log(arr);
	if (arr.includes(1)) {
		return true;
	}
	return false;
}
