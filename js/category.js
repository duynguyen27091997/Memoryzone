$(function () {

    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 18500000,
        values: [ 0, 18500000 ],
        slide: function( event, ui ) {
            $( "#min-value-filter" ).val(+ ui.values[0]).simpleMoneyFormat(true);
            $("#max-value-filter").val(ui.values[1]).simpleMoneyFormat(true);
        }
    });
    $( "#min-value-filter" ).val($( "#slider-range" ).slider( "values", 0)).simpleMoneyFormat(true);
    $("#max-value-filter").val($( "#slider-range" ).slider( "values", 1 )).simpleMoneyFormat(true);

    $(".sortby__list-lv2__item").click(function (ite) {
        let text=$(ite.currentTarget).find("a").text();
        switch (text) {
            case "A - Z" :
                document.getElementsByClassName("val")[0].innerHTML = "Tên A - Z";
                break;
            case "Z - A" :
                document.getElementsByClassName("val")[0].innerHTML = "Tên Z - A";
                break;
            default:
                document.getElementsByClassName("val")[0].innerHTML= text;
                break
        }
        return false;
    });
    $("#display-list").click(function () {
        $(".product-colection__list").css("display","none");
        $(".product-colection__list-w").css("display","inline-block");
    });
    $("#display-grid").click(function () {
        $(".product-colection__list-w").css("display","none");
        $(".product-colection__list").css("display","flex");
    });
    if (window.innerWidth <=991) {
       $(document).on("click",".product-filter__open",function () {
           $(this).css("display","none");
           $(".product-filter").animate({right:0},500);
            $(".product-filter__close").css("display","inline-block");
       })
        $(document).on("click",".product-filter__close",function () {
            $(this).css("display","none");
            $(".product-filter").animate({right:"-245px"},500);
            $(".product-filter__open").css("display","inline-block");
        });

    }
    $(window).on("resize",function () {
        if (window.innerWidth <=991) {
            $(".product-filter__open").css("display", "inline-block");
            $(".product-filter").animate({right: "-245px"});
            $(document).on("click", ".product-filter__open", function () {
                $(this).css("display", "none");
                $(".product-filter").animate({right: 0}, 500);
                $(".product-filter__close").css("display", "inline-block");
                return false;
            });
            $(document).on("click", ".product-filter__close", function () {
                $(this).css("display", "none");
                $(".product-filter").animate({right: "-245px"}, 500);
                $(".product-filter__open").css("display", "inline-block");
                return false;
            });
        }else if(window.innerWidth >=992){
            $(".product-filter").css({right:0});
            $(".product-filter__open").css("display","none");
            $(".product-filter__close").css("display","none");
        }
    })
});