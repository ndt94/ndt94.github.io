let watches = [
	{
		name: 'name1',
		price: '20.000.000'
	},
	{
		name: 'name2',
		price: '20.000.000'
	},
	{
		name: 'name3',
		price: '20.000.000'
	},
	{
		name: 'name4',
		price: '20.000.000'
	},
	{
		name: 'name5',
		price: '20.000.000'
	},
	{
		name: 'name6',
		price: '20.000.000'
	},
	{
		name: 'name7',
		price: '20.000.000'
	},
	{
		name: 'name8',
		price: '20.000.000'
	},
	{
		name: 'name9',
		price: '20.000.000'
	}
];

$('#product0').on('click', function() {
	product0 = localStorage.setItem('watches0', JSON.stringify(watches[0]));
	console.log(product0);
});

$('#product1').on('click', function() {
	product1 = localStorage.setItem('watches1', JSON.stringify(watches[1]));
	console.log(product1);
});

$('#product2').on('click', function() {
	product2 = localStorage.setItem('watches2', JSON.stringify(watches[2]));
	console.log(product2);
});

$('#product3').on('click', function() {
	product3 = localStorage.setItem('watches3', JSON.stringify(watches[3]));
	console.log(product3);
});

$('#product4').on('click', function() {
	product4 = localStorage.setItem('watches4', JSON.stringify(watches[4]));
	console.log(product4);
});

$('#product5').on('click', function() {
	product5 = localStorage.setItem('watches5', JSON.stringify(watches[5]));
	console.log(product5);
});

$('#product6').on('click', function() {
	product6 = localStorage.setItem('watches6', JSON.stringify(watches[6]));
	console.log(product6);
});

$('#product7').on('click', function() {
	product7 = localStorage.setItem('watches7', JSON.stringify(watches[7]));
	console.log(product7);
});

$('#product8').on('click', function() {
	product8 = localStorage.setItem('watches8', JSON.stringify(watches[8]));
	console.log(product8);
});

let empty_arr = [];
info_parse_1 = JSON.parse(localStorage.getItem('watches0'));
info_parse_2 = JSON.parse(localStorage.getItem('watches1'));
info_parse_3 = JSON.parse(localStorage.getItem('watches2'));
info_parse_4 = JSON.parse(localStorage.getItem('watches3'));
info_parse_5 = JSON.parse(localStorage.getItem('watches4'));
info_parse_6 = JSON.parse(localStorage.getItem('watches5'));
info_parse_7 = JSON.parse(localStorage.getItem('watches6'));
info_parse_8 = JSON.parse(localStorage.getItem('watches7'));
info_parse_9 = JSON.parse(localStorage.getItem('watches8'));

empty_arr.push(info_parse_1);
empty_arr.push(info_parse_2);
empty_arr.push(info_parse_3);
empty_arr.push(info_parse_4);
empty_arr.push(info_parse_5);
empty_arr.push(info_parse_6);
empty_arr.push(info_parse_7);
empty_arr.push(info_parse_8);
empty_arr.push(info_parse_9);

console.log(empty_arr);

function renderContent() {
	let htmlContent = '';
	empty_arr.forEach(function(element) {
		htmlContent = `
			<div class="col-md-3">
				<p>Sản phẩm</p>
				<img src="img/index/OMEGA-PATINA-01-02-19-1-450x300.png" class="img-fluid">
				<p>${element.name}</p>
			</div>

			<div class="col-md-3">
				<p>Giá</p>
				<p id='test'>${element.price}</p>
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
	});
}
