function sortTableByName() {
    test = data.sort(function (a, b) {
        var nameA = a.name.toUpperCase(); // bỏ qua hoa thường
        var nameB = b.name.toUpperCase(); // bỏ qua hoa thường
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }

        // name trùng nhau
        return 0;
    });
    renderContent(test);
}

function sortTableByNation() {
    test = data.sort(function (a, b) {
        var nameA = a.nation.toUpperCase(); // bỏ qua hoa thường
        var nameB = b.nation.toUpperCase(); // bỏ qua hoa thường
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }

        // name trùng nhau
        return 0;
    });
    renderContent(test);
}

function sortTableByBlood() {
    test = data.sort(function (a, b) {
        var nameA = a.blood.toUpperCase(); // bỏ qua hoa thường
        var nameB = b.blood.toUpperCase(); // bỏ qua hoa thường
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }

        // name trùng nhau
        return 0;
    });
    renderContent(test);
}

$(function () {
    renderContent(data);
})

data = [
    {
        name: 'Jihyo',
        nation: 'Korean',
        blood: 'O',
        image: '<img style="display:block;" width="100%" height="70%" class="picture" src="img/jihyo.jpg" alt="Jihyo">',
    },

    {
        name: 'Nayeon',
        nation: 'Korean',
        blood: 'A',
        image: '<img style="display:block;" width="100%" height="70%" class="picture" src="img/nayeon.jpg" alt="Nayeon">',
    },

    {
        name: 'Jeongyeon',
        nation: 'Korean',
        blood: 'O',
        image: '<img style="display:block;" width="100%" height="70%" class="picture" src="img/jeongyeon.jpg" alt="Jeongyeon">',
    },

    {
        name: 'Momo',
        nation: 'Japanese',
        blood: 'A',
        image: '<img style="display:block;" width="100%" height="70%" class="picture" src="img/momo.jpg" alt="Momo">',
    },

    {
        name: 'Sana',
        nation: 'Japanese',
        blood: 'B',
        image: '<img style="display:block;" width="100%" height="70%" class="picture" src="img/sana.jpg" alt="Sana">',
    },

    {
        name: 'Mina',
        nation: 'Japanese',
        blood: 'A',
        image: '<img style="display:block;" width="100%" height="70%" class="picture" src="img/mina.jpg" alt="Mina">',
    },

    {
        name: 'Dahyun',
        nation: 'Korean',
        blood: 'O',
        image: '<img style="display:block;" width="100%" height="70%" class="picture" src="img/dahyun.jpg" alt="Dahyun">',
    },

    {
        name: 'Chaeyoung',
        nation: 'Korean',
        blood: 'B',
        image: '<img style="display:block;" width="100%" height="70%" class="picture" src="img/chaeyoung.jpg" alt="Chaeyoung">',
    },

    {
        name: 'Tzuyu',
        nation: 'Taiwanese',
        blood: 'A',
        image: '<img style="display:block;" width="100%" height="70%" class="picture" src="img/tzuyu.jpg" alt="Tzuyu">',
    }
]

// copy1= JSON.parse(JSON.stringify(data));
// copy2= JSON.parse(JSON.stringify(data));

// asc = copy1.sort(function (a, b) {
//     var nameA = a.name.toUpperCase(); // bỏ qua hoa thường
//     var nameB = b.name.toUpperCase(); // bỏ qua hoa thường
//     if (nameA < nameB) {
//         return -1;
//     }
//     if (nameA > nameB) {
//         return 1;
//     }

//     // name trùng nhau
//     return 0;
// });

// desc = copy2.sort(function (a, b) {
//     var nameA = a.name.toUpperCase(); // bỏ qua hoa thường
//     var nameB = b.name.toUpperCase(); // bỏ qua hoa thường
//     if (nameA < nameB) {
//         return 1;
//     }
//     if (nameA > nameB) {
//         return -1;
//     }

//     // name trùng nhau
//     return 0;
// });

function renderContent(data) {
    var htmlContent = '';

    for (let i = 0; i < data.length; i++) {
        htmlContent += '<tr>';

        htmlContent += '<td>' + data[i].name + '</td>';
        htmlContent += '<td>' + data[i].nation + '</td>';
        htmlContent += '<td>' + data[i].blood + '</td>';
        htmlContent += '<td>' + data[i].image + '</td>';

        htmlContent += '</tr>';
    }

    $('#myTable tbody').html(htmlContent);
}

click = 0;
$('#name').on("click",function () {
    click++;
    $('#icon2').attr('src',"img/sort-arrows-couple-pointing-up-and-down.png");
    $('#icon3').attr('src',"img/sort-arrows-couple-pointing-up-and-down.png");
    if(click%2 !==0){
        $('#icon1').attr('src',"img/down.png")
    }else{
        $('#icon1').attr('src',"img/up.png")
    }
});

$('#nation').on("click",function () {
    click++;
    $('#icon1').attr('src',"img/sort-arrows-couple-pointing-up-and-down.png");
    $('#icon3').attr('src',"img/sort-arrows-couple-pointing-up-and-down.png");
    if(click%2 !==0){
        $('#icon2').attr('src',"img/down.png")
    }else{
        $('#icon2').attr('src',"img/up.png")
    }
});

$('#blood').on("click",function () {
    click++;
    $('#icon2').attr('src',"img/sort-arrows-couple-pointing-up-and-down.png");
    $('#icon1').attr('src',"img/sort-arrows-couple-pointing-up-and-down.png");
    if(click%2 !==0){
        $('#icon3').attr('src',"img/down.png")
    }else{
        $('#icon3').attr('src',"img/up.png")
    }
});