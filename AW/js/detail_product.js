// PRODUCT ID TRANSFER FROM INDEX PAGE WHEN CLICK SEE MORE
productId = JSON.parse(localStorage.getItem('productId'));

// DATA FROM MAIN.JS FILE
watches = JSON.parse(localStorage.getItem('watches'));

// IMAGE LINK FOR DETAIL PRODUCT PAGE
images = [
	[
		'<img src="img/detail_product/CARTIER_TANK_LOUIS/VACHERON-CONSTANTIN-22-03-14-19-1a-1080x720.jpg" class="img-fluid" alt="big_slider">',
		'<img src="img/detail_product/CARTIER_TANK_LOUIS/VACHERON-CONSTANTIN-22-03-14-19-2-1080x720.jpg" class="img-fluid" alt="big_slider">',
		'<img src="img/detail_product/CARTIER_TANK_LOUIS/VACHERON-CONSTANTIN-22-03-14-19-3-1080x720.jpg" class="img-fluid" alt="big_slider">',
		'<img src="img/detail_product/CARTIER_TANK_LOUIS/VACHERON-CONSTANTIN-22-03-14-19-6-1080x720.jpg" class="img-fluid" alt="big_slider">'
	],
	[
		'<img src="img/detail_product/VACHERON_CONSTANTIN_222/AP-Rolyal-Oak-03-12-19-1a-1080x720.jpg" class="img-fluid" alt="big_slider">',
		'<img src="img/detail_product/VACHERON_CONSTANTIN_222/AP-Rolyal-Oak-03-12-19-2-1080x720.jpg" class="img-fluid" alt="big_slider">',
		'<img src="img/detail_product/VACHERON_CONSTANTIN_222/AP-Rolyal-Oak-03-12-19-4-1080x720.jpg" class="img-fluid" alt="big_slider">',
		'<img src="img/detail_product/VACHERON_CONSTANTIN_222/AP-Rolyal-Oak-03-12-19-6-1080x720.jpg" class="img-fluid" alt="big_slider">'
	],
	[
		'<img src="img/detail_product/AUDEMARS_PIGUET_ROYAL_OAK_14790/CARTIER-MUST-DE-TANK-02-16-19-1-850x566.jpg" class="img-fluid" alt="big_slider">',
		'<img src="img/detail_product/AUDEMARS_PIGUET_ROYAL_OAK_14790/CARTIER-MUST-DE-TANK-02-16-19-2-850x566.jpg" class="img-fluid" alt="big_slider">',
		'<img src="img/detail_product/AUDEMARS_PIGUET_ROYAL_OAK_14790/CARTIER-MUST-DE-TANK-02-16-19-3-850x566.jpg" class="img-fluid" alt="big_slider">',
		'<img src="img/detail_product/AUDEMARS_PIGUET_ROYAL_OAK_14790/CARTIER-MUST-DE-TANK-02-16-19-4-850x566.jpg" class="img-fluid" alt="big_slider">'
	],
	[
		'<img src="img/detail_product/CARTIER_“STEPPED”_TANK/CARTIER-TANK-BLUE-01-29-19-1b-1080x720.jpg" class="img-fluid" alt="big_slider">',
		'<img src="img/detail_product/CARTIER_“STEPPED”_TANK/CARTIER-TANK-BLUE-01-29-19-2-1080x720.jpg" class="img-fluid" alt="big_slider">',
		'<img src="img/detail_product/CARTIER_“STEPPED”_TANK/CARTIER-TANK-BLUE-01-29-19-3-1080x720.jpg" class="img-fluid" alt="big_slider">',
		'<img src="img/detail_product/CARTIER_“STEPPED”_TANK/CARTIER-TANK-BLUE-01-29-19-5-1080x720.jpg" class="img-fluid" alt="big_slider">'
	],
	[
		'<img src="img/detail_product/OMEGA_SPEEDMASTER_CO-AXIAL/OMEGA-SPEEDMASTER-COAXIAL-CHRONO-02-16-19-1a-1080x720.jpg" class="img-fluid" alt="big_slider">',
		'<img src="img/detail_product/OMEGA_SPEEDMASTER_CO-AXIAL/OMEGA-SPEEDMASTER-COAXIAL-CHRONO-02-16-19-2-1080x720.jpg" class="img-fluid" alt="big_slider">',
		'<img src="img/detail_product/OMEGA_SPEEDMASTER_CO-AXIAL/OMEGA-SPEEDMASTER-COAXIAL-CHRONO-02-16-19-3-1080x720.jpg" class="img-fluid" alt="big_slider">',
		'<img src="img/detail_product/OMEGA_SPEEDMASTER_CO-AXIAL/OMEGA-SPEEDMASTER-COAXIAL-CHRONO-02-16-19-8-1080x720.jpg" class="img-fluid" alt="big_slider">'
	],
	[
		'<img src="img/detail_product/ROLEX_DAY_DATE_REF.1803/ROLEX-DATEJUST-1801-YG-02-16-19-1a-1080x720.jpg" class="img-fluid" alt="big_slider">',
		'<img src="img/detail_product/ROLEX_DAY_DATE_REF.1803/ROLEX-DATEJUST-1801-YG-02-16-19-2-1080x720.jpg" class="img-fluid" alt="big_slider">',
		'<img src="img/detail_product/ROLEX_DAY_DATE_REF.1803/ROLEX-DATEJUST-1801-YG-02-16-19-3-1080x720.jpg" class="img-fluid" alt="big_slider">',
		'<img src="img/detail_product/ROLEX_DAY_DATE_REF.1803/ROLEX-DATEJUST-1801-YG-02-16-19-4-1080x720.jpg" class="img-fluid" alt="big_slider">'
	],
	[
		'<img src="img/detail_product/UNIVERSAL_GENEVE_POLEROUTER/UNIVERSAL-GENEVE-GOLD-12-25-18-1-1080x720.jpg" class="img-fluid" alt="big_slider">',
		'<img src="img/detail_product/UNIVERSAL_GENEVE_POLEROUTER/UNIVERSAL-GENEVE-GOLD-12-25-18-2-1080x720.jpg" class="img-fluid" alt="big_slider">',
		'<img src="img/detail_product/UNIVERSAL_GENEVE_POLEROUTER/UNIVERSAL-GENEVE-GOLD-12-25-18-3-1080x720.jpg" class="img-fluid" alt="big_slider">',
		'<img src="img/detail_product/UNIVERSAL_GENEVE_POLEROUTER/UNIVERSAL-GENEVE-GOLD-12-25-18-4-1080x720.jpg" class="img-fluid" alt="big_slider">'
	],
	[
		'<img src="img/detail_product/OMEGA_SUVERAN/OMEGA-PATINA-01-02-19-1-1080x720.jpg" class="img-fluid" alt="big_slider">',
		'<img src="img/detail_product/OMEGA_SUVERAN/OMEGA-PATINA-01-02-19-2-1080x720.jpg" class="img-fluid" alt="big_slider">',
		'<img src="img/detail_product/OMEGA_SUVERAN/OMEGA-PATINA-01-02-19-3-1080x720.jpg" class="img-fluid" alt="big_slider">',
		'<img src="img/detail_product/OMEGA_SUVERAN/OMEGA-PATINA-01-02-19-5-1080x720.jpg" class="img-fluid" alt="big_slider">'
	],
	[
		'<img src="img/detail_product/OMEGA_GENEVE_DYNAMIC/Omega-Geneve-Dynamic-12-04-18-1-1-1080x720.jpg" class="img-fluid" alt="big_slider">',
		'<img src="img/detail_product/OMEGA_GENEVE_DYNAMIC/Omega-Geneve-Dynamic-12-04-18-2-1080x720.jpg" class="img-fluid" alt="big_slider">',
		'<img src="img/detail_product/OMEGA_GENEVE_DYNAMIC/Omega-Geneve-Dynamic-12-04-18-4-1080x720.jpg" class="img-fluid" alt="big_slider">',
		'<img src="img/detail_product/OMEGA_GENEVE_DYNAMIC/Omega-Geneve-Dynamic-12-04-18-5-1080x720.jpg" class="img-fluid" alt="big_slider">'
	]
];

$(function() {
	renderProduct(productId);
	renderProductContent(productId);
	addName(productId);
});

function renderProductContent(id) {
	let htmlContent = '';
	htmlContent += `
    <p class="detail-right-title">${watches[id].name}</p>
    <p class="detail-right-price">${
		watches[id].price
	} đ <a href="#/" onclick="pushInfoById(${id}), showAlert()"><i id="addtocart" class="fas fa-cart-plus"></i></a></p>

    <a href="cart.html" class="detail-right-btn btn btn-primary btn-block" onclick="pushInfoById(${id})">Mua ngay</a>
    <p class="detail-right-title">THÔNG TIN SẢN PHẨM</p>
    <p class="detail-right-content">Khi nói đến đồng hồ đeo tay, không có gì cổ điển hơn một chiếc Cartier Tank. Hình dạng biểu tượng của nó cùng với tỷ lệ đáng kinh ngạc, và bề ngoài đầy tính nghệ thuật giúp cho nó thực sự trở thành một sản phẩm huyền thoại. Đương nhiên, một chiếc Tank sẽ không thể hoàn thành nếu như thiếu đi chiếc vương miện phủ sapphire huyền thoại. Và tất nhiên, nó đi kèm với một chứng chỉ xác thực và đã được thẩm định và được vận chuyển cẩn thận kèm bảo hiểm đầy đủ thông qua dịch vụ cấp tốc của UPS.</p>
    <p class="detail-right-title">THÔNG SỐ KỸ THUẬT</p>
    <p class="detail-right-content">Nhà sản xuất: Cartier</p>
    <p class="detail-right-content">Model: Must de Tank</p>
    <p class="detail-right-content">Kích cỡ mặt đồng hồ: 23mm x 32mm</p>
    <p class="detail-right-content">Bề ngang dây: 16 millimeters</p>
	`;
	$('.detail-right').html(htmlContent);
}

function renderProduct(id) {
	let htmlContent = '';
	htmlContent = `
    <div class="col-md-8 carousel slide detail-left" id="myCarousel" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                ${images[id][0]}
            </div>

            <div class="carousel-item">
                ${images[id][1]}
            </div>

            <div class="carousel-item">
                ${images[id][2]}
            </div>

            <div class="carousel-item">
                ${images[id][3]}
            </div>

            <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>

            <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>

        <div class="row inside-row">
            <div class="col-md-3">
                ${images[id][0]}
            </div>
            <div class="col-md-3">
                ${images[id][1]}
            </div>
            <div class="col-md-3">
                ${images[id][2]}    
            </div>
            <div class="col-md-3">
                ${images[id][3]}
            </div>
        </div>
    </div>

    <div class="col-md-4 detail-right"></div>
    `;
	$('.detail > .row').append(htmlContent);
}

// function showAlert() {
// 	$('#addtocart').on('click', function() {
// 		$('.alert').removeClass('d-none');
// 		$('.alert').addClass('d-block');
// 		setTimeout(function() {
// 			$('.alert').removeClass('d-block');
// 			$('.alert').addClass('d-none');
// 		}, 2000);
// 	});
// }

function showAlert() {
	$('#addtocart').on('click', function() {
		htmlContent =
			'<div class="alert alert-success alert-dismissible fade show" role="alert">Đã thêm vào giỏ hàng<button type="button" class="close" data-dismiss="alert">&times;</button></div>';
		$(htmlContent).insertAfter('.detail-right-price');
	});
}

function addName(id) {
	htmlContent = `${watches[id].name}`;
	$('.breadcrumb li.active').html(htmlContent);
}
