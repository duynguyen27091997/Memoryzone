$(function() {
    $(".icon-colapse").click(function() {
        $(".side__bar").animate({ left: "0" }, 500);
        $(".opacity-fullscreen").show();
    })
    $(".opacity-fullscreen").click(function() {
        $(".side__bar").animate({ left: "-300px" }, 500);
        $(this).hide();
    })
    if (window.innerWidth <= 991) {
        $(".drop-icon").switchClass("ti-angle-right", "ti-angle-down");
        $(".menu-toogle-text").click(function() {
            $(".list_menu_header ").slideToggle("300");
            return false;	
        })
    } else {
        $(".drop-icon").switchClass("ti-angle-down", "ti-angle-right");
    }
    $(window).on("resize", function() {
        if (window.innerWidth <= 991) {
            $(".drop-icon").switchClass("ti-angle-right", "ti-angle-down");
        } else {
            $(".drop-icon").switchClass("ti-angle-down", "ti-angle-right");
        }
    })
    $(".ti-angle-down").on("click", function() {
        let pa = $(this).parent();
        let parent = pa.parent();
        parent.find(">ul").slideToggle("300");
        return false;

    })
 

$('.carousel-product').owlCarousel({
    margin: 30,
    responsiveClass: false,
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
            items: 3,
            nav: true,
            loop: false

        },
        1200: {
            items: 4,
            nav: true,
            loop:false
        }
    }	
})

$('.carousel-product-hot').owlCarousel({
    margin: 30,
    responsiveClass: false,
    responsive: {
        0: {
            items: 2,
            nav: false,
            loop: false
        },
        600: {
            items: 3,
            nav: false,
            loop: false
        },
        1000: {
            items: 4,
            nav: false,
            loop: false

        },
        1200: {
            items: 5,
            nav: false
        }
    }
})

$('.carousel-product-w').owlCarousel({
    margin: 10,
    responsiveClass: false,
    responsive: {
        0: {
            items: 1,
            nav: false,
            loop: false
        },
        600: {
            items: 2,
            nav: false,
            loop: false
        },
        1000: {
            items: 3,
            nav: false,
            loop: false

        },
        1200: {
            items: 3,
            nav: false
        }
    }
})

$(".category__title__toogle").click(function(){
	let pa = $(this).parent();
	pa.children(".category__title__list").slideToggle("300");
})
const countSection = $(".category__list").find(">div");
for(let i=0;i<countSection.length;i+=2){
	
	if (window.innerWidth >= 992) {
			$(countSection[i]).find(".category__down").addClass("order-2");
	}
	else if (window.innerWidth <=991) {
			$(countSection[i]).find(".category__down").removeClass("order-2");
	}
	$(window).on("resize", function() {
		if (window.innerWidth >= 992) {
			$(countSection[i]).find(".category__down").addClass("order-2");
	}
	else if (window.innerWidth <=991) {
			$(countSection[i]).find(".category__down").removeClass("order-2");
	}
	})
}
$(window).on("scroll",function(){
	if (window.pageYOffset >=400 && window.innerWidth >= 992) {
		$(".scroll-menu").fadeIn();
	}else {
		$(".scroll-menu").fadeOut();
	}
})

$('.carousel-producer').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    dots:false,
    autoWidth:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:4,

        },
        600:{
            items:5,      
        },
        1000:{
            items:7,       
            loop:true
        }
    }
})
$('.carousel-footer').owlCarousel({
    loop:false,
    margin:30,
    nav:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:2

        },
        900:{
            items:3     
        },
        1200:{
            items:4      
        }
    }
})
$(".toggle-footer").click(function(){
	let pa = $(this).parent();
	pa.find(">ul").slideToggle("200");
	
	if ($(this).attr("class").search("fa-plus")>=0) {
            $(this).switchClass("fa-plus", "fa-minus");
    }else {
         $(this).switchClass("fa-minus", "fa-plus");
    }
})
})