$(function () {
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 10000000,
        values: [ 0, 10000000 ],
        slide: function( event, ui ) {
            $( "#min-value-filter" ).val(+ ui.values[ 0 ]+"đ");
            $("#max-value-filter").val(ui.values[ 1 ]+"đ");
        }
    });
    $( "#min-value-filter" ).val($( "#slider-range" ).slider( "values", 0 ) );
    $("#max-value-filter").val($( "#slider-range" ).slider( "values", 1 )+"đ" );

    $(".sortby__list-lv2__item").click(function (ite) {
        let text=$(ite.currentTarget).find("a").text();
        switch (text) {
            case (text="A - Z") :
                document.getElementsByClassName("val")[0].innerHTML = "Tên A - Z";
                break;
            case (text="Z - A") :
                document.getElementsByClassName("val")[0].innerHTML = "Tên Z - A";
                break;
            default:
                document.getElementsByClassName("val")[0].innerHTML= text;
                break
        }
        return false;
    });
});