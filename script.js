$(document).ready(function() {
    $(".nav_list li").ready(function() {
        $(".nav_list li").addClass('block')
    })
});

$(document).ready(function() {
    $(".wlc_txt1").ready(function() {
        $(".wlc_txt1").fadeIn(300).css("display", "block")
    })
});

$(document).ready(function() {
    $(".wlc_txt1").ready(function() {
        $(".wlc_txt1").animate({
            paddingLeft: "0px",
        });  
    })
});

$(document).ready(function() {
    $(".wlc_txt1").ready(function() {
        $(".wlc_txt2, .welcome_txtblock button, .welcome_image").fadeIn(700);
    })
});

$(document).ready(function() {
    $(".hw_play1, .hw_play2, .hw_play3").click(function() {
        if ($(".play_video").css("display") == "none") {
        $(".play_video").slideDown("slow",function(){}).css("display", "block"); 
        }
        else {
            $(".play_video").slideUp('medium', function(){})
        }
    });
});

var block_show1 = null;
 
function scrollTracking1(){
	var wt1 = $(window).scrollTop();
	var wh1 = $(window).height();
	var et1 = $('.our_mission').offset().top;
	var eh1 = $('.our_mission').outerHeight();
 
	if (wt1 + wh1 >= et1 && wt1 + wh1 - eh1 * 2 <= et1 + (wh1 - eh1)){
		if (block_show1 == null || block_show1 == false) {
			$(".our_mission").css("opacity", "1");
			$(".our_mission").css("margin-left", "0");
		}
		block_show1 = true;
	}
}

var block_show2 = null;
 
function scrollTracking2(){
	var wt2 = $(window).scrollTop();
	var wh2 = $(window).height();
	var et2 = $('.projects').offset().top;
	var eh2 = $('.projects').outerHeight();
 
	if (wt2 + wh2 >= et2 && wt2 + wh2 - eh2 * 2 <= et2 + (wh2 - eh2)){
		if (block_show2 == null || block_show2 == false) {
			$(".project1").css("opacity", "1");
			$(".project2").css("opacity", "1");
			$(".project3").css("opacity", "1");
		}
		block_show2 = true;
	}
}

var block_show3 = null;
 
function scrollTracking3(){
	var wt3 = $(window).scrollTop();
	var wh3 = $(window).height();
	var et3 = $('.review').offset().top;
	var eh3 = $('.review').outerHeight();
 
	if (wt3 + wh3 >= et3 && wt3 + wh3 - eh3 * 2 <= et3 + (wh3 - eh3)){
		if (block_show3 == null || block_show3 == false) {
			$(".review").css("opacity", "1");
			$(".review").css("margin-left", "0");
		}
		block_show3 = true;
	}
}

$(window).scroll(function(){
	scrollTracking1();
	scrollTracking2();
	scrollTracking3();
});
	
$(document).ready(function(){
	scrollTracking1();
	scrollTracking2();
	scrollTracking3();
});

function windowSize(){
    if ($(window).width() <= '1550'){
        $('.play_video iframe').attr('width', '560');
		$('.play_video iframe').attr('height', '315');
    } else {
        $('.play_video iframe').attr('width', '1280');
		$('.play_video iframe').attr('height', '720');
    }
}

$(document).ready(function(){
	windowSize()
})

$(window).resize(function(){
	windowSize()
});

$(document).ready(function() {
	$('.single-slide').slick({
		dots: true,
	});
})