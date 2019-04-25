$("#myCarousel").carousel({
    interval: 3000
});

$("#prev").on("click", function() {
    $("#myCarousel").carousel("prev");
});

$("#next").on("click", function() {
    $("#myCarousel").carousel("next");
});
