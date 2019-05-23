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
	`;
	$('.detail-right').html(htmlContent);
}

function renderProduct(id) {
	let htmlContent = '';
	htmlContent = `
    <div class="col-md-9 carousel slide detail-left" id="myCarousel" data-ride="carousel">
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

    <div class="col-md-3 detail-right"></div>
    `;
	$('.detail > .row').append(htmlContent);
}
