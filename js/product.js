$(function () {
    $(document).on("click",".list-gift__item",function (event) {
        let srcImg = $(event.currentTarget).find("img").attr("src");
        $("#gift-img-show").attr("src",srcImg);
        return false;
    })
    $('.carousel-samecat').owlCarousel({
        margin: 30,
        responsiveClass: false,
        dots: false,
        navText: ["<i class='ti-angle-left'></i>","<i class='ti-angle-right'></i>"],
        responsive: {
            0: {
                items: 2,
                nav: true,
                loop: false
            },
            600: {
                items: 3,
                nav: true,
                loop: false
            },
            1000: {
                items: 4,
                nav: true,
                loop: false

            },
            1200: {
                items: 5,
                nav: true,
                loop:false
            }
        }
    })
});
$(document).ready(function() {

    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var slidesPerPage = 4; //globaly define number of elements per page
    var syncedSecondary = true;

    sync1.owlCarousel({
        items : 1,
        slideSpeed : 2000,
        nav: true,
        dots: false,
        loop: true,
        responsiveRefreshRate : 200,
        navText: ["<i class='ti-angle-left'></i>","<i class='ti-angle-right'></i>"],
    }).on('changed.owl.carousel', syncPosition);

    sync2
        .on('initialized.owl.carousel', function () {
            sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items : slidesPerPage,
            nav: false,
            dots:false,
            smartSpeed: 200,
            slideSpeed : 500,
            slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate : 100
        }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        //if you set loop to false, you have to restore this next line
        //var current = el.item.index;

        //if you disable loop you have to comment this block
        var count = el.item.count-1;
        var current = Math.round(el.item.index - (el.item.count/2) - .5);

        if(current < 0) {
            current = count;
        }
        if(current > count) {
            current = 0;
        }

        //end block

        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

        if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if(syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
        }
    }

    sync2.on("click", ".owl-item", function(e){
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });
    const bg_main = "#008744";
    const color_white ="#ffffff";
    $(".nav-detail__item").click(function (e) {
        $(e.currentTarget).css({
            "background-color":bg_main,
            "color":color_white
        });
        $(".nav-detail__item").not(e.currentTarget).css({
            "background-color":"#f2f2f2",
            "color":"#444"
        });
        return false;
    });
    for (let i =1 ;i<=3;i++){
        $(`#tab-${i}-toggle`).click(function () {
            $(`.tab-${i}`).show();
            $(`.product-detail__tab__item`).not($(`.tab-${i}`)).hide();
        })
    }
    let toggle_tab = 0;
        $("#toggle-tab").click(function () {
            if (toggle_tab===0) {
                $(".tab-1").css("height", "unset");
                $(".tab-flur").hide();
                toggle_tab = 1;
                $(this).text("Thu gọn");
                return false;
            }else {
                $(".tab-1").css("height", "250px");
                $(".tab-flur").show();
                toggle_tab = 0;
               $(this).text("Xem đầy đủ");
                return false;
            }

        });
    $(".tab-3__list__review").click(function () {
        $(".tab__popup-review").show();
        $(".popup-review__form").animate({ "opacity" : "1" },300);
        return false;
    });
    $("#popup-review__form__close").click(function () {
        $(".popup-review__form").animate({ "opacity" : "0" },300);
        $(".tab__popup-review").delay(300).fadeOut();
        return false;
    })
    $(".popup-review__opacity").click(function () {
        $(".popup-review__form").animate({ "opacity" : "0" },300);
        $(".tab__popup-review").delay(300).fadeOut();
        return false;
    })
});