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

let watches = [
	{
		id: 1,
		name: 'name1',
		price: '20.000.000'
	},
	{
		id: 2,
		name: 'name2',
		price: '20.000.000'
	},
	{
		id: 3,
		name: 'name3',
		price: '20.000.000'
	}
];

localStorage.setItem('watches', JSON.stringify(watches));
info_parse = JSON.parse(localStorage.getItem('watches'));
// console.log(info_parse);

function renderContentById(id) {
	let htmlContent = '';
	htmlContent += `
	<div class="col-md-3">
			<p>Sản phẩm</p>
			<img src="img/index/OMEGA-PATINA-01-02-19-1-450x300.png" class="img-fluid">
			<p>${watches[id - 1].name}</p>
		</div>
		<div class="col-md-3">
			<p>Giá</p>
			<p id='test'>${watches[id - 1].price}</p>
		</div>
		<div class="col-md-3">
			<p>Số lượng</p>
			<p>1</p>
		</div>
		<div class="col-md-2">
			<p>Tổng</p>
			<p>20.000.000</p>
		</div>
		<div class="col-md-1">
			<i class="fas fa-trash"></i>
		</div>

	`;

	$('.cart .row').append(htmlContent);
}

// renderContentById(2);
