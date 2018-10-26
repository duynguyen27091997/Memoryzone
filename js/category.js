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
});