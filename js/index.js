/* fadeleft 
$(document).ready(function() {
    $(window).scroll( function(){
        $('.fadeinleft').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-left':'0px'},1000);
            }
            
        }); 
    });
});
*/


$(document).ready(function(){		
    $("#menu").mmenu({
       "slidingSubmenus": false,
       "navbar": { "title":"회사명" },
       "extensions": [
          "pagedim-black",
          "position-right",
          "theme-dark"
       ]
    });
});



$(function(){
    $(".up_btn").click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
	});
	$(window).scroll(function() {
		var height = $(window).scrollTop();
		if (height > 100) {
			$('.up_btn').fadeIn();
		} else {
			$('.up_btn').fadeOut();
		}
	});
});


$(function(){
    $(".business_it").click(function(){
            $(".business_it_text").fadeIn();
            $(".business_rent_text").fadeOut();
            $(".business_enforcement_text").fadeOut();
    });	
    $(".business_rent").click(function(){
            $(".business_it_text").fadeOut();
            $(".business_rent_text").fadeIn();
            $(".business_enforcement_text").fadeOut();
    });
    $(".business_enforcement").click(function(){
            $(".business_it_text").fadeOut();
            $(".business_rent_text").fadeOut();
            $(".business_enforcement_text").fadeIn();
    });
  
  });


  $(function(){
	$(".business_img > li").click(function(){
		$(this).addClass("business_img_up").siblings().removeClass("business_img_up");
	});
});
  
