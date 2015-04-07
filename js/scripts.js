$(document).ready(function(){


// HEADER BUTTON MENU
///////////////////////////////////////


	function hederButton(){
		if($('.button-menu').hasClass('open-menu')){
		
			var bodyHeight = $('body').height();
			bodyWidth = $('body').outerWidth();
			wrapMenu = $('.wrapper-main-nav').width();
			$('.wrapper, .footer-main').width(bodyWidth);
			$('.wrapper-main-nav').height(bodyHeight).css({'right': '100%', 'left': 'auto'});

			$('body').animate({
				'padding-left': wrapMenu,
			}, 600);
		}
	}

	function menuOpen(){
		hederButton();
		$('body').animate({
			'padding-left': wrapMenu,
		}, 600);
	}

	function resizeMenu(){
		$(window).resize(function(){
			hederButton();
			$('.wrapper, .footer-main').width(bodyWidth);

			$('body').stop().css({
				'padding-left': wrapMenu,
			});
		});
	}


	function closeMenu(){
		$('body').stop().animate({
			'padding-left': 0,
		}, 600, menuClose);
		function menuClose(){
			bodyWidth = 'auto';
			wrapMenu = 0;
			resizeMenu();
			$('.background-body').remove();
			$('body').removeClass('footer-bottom');
			$('html').removeClass('body-overflow')
			$('.button-menu').removeClass('open-menu');
			$('.wrapper-main').css('height', 'auto');
			$('.wrapper-main-nav').outerHeight(0);
			return false
		}
	}



	$('.button-menu').click(function(){
		
		if($('.button-menu').hasClass('open-menu')){

			closeMenu();

		}else{

			$(this).addClass('open-menu');
			if($('.background-body').length === 0){
				$('.wrapper').append('<div class="background-body"></div>').click();
				$('html').addClass('body-overflow');
			}



			bodyClose();
			hederButton();
			resizeMenu();
			

		}

		return false
	});


	$('.close-nav-main').click(function(){

		closeMenu();

		return false

	});


	function bodyClose(){

		$('.background-body').on('click', function(){

			closeMenu();

		});
		
	}


// END HEADER BUTTON MENU
///////////////////////////////////////



// SWIPER
///////////////////////////////////////


function ajax_slaider(){



	$('.swiper-container').each(function(){
		thisSwiper = $(this);



		if(thisSwiper.hasClass('swiper-container-carousel')){


			 var mySwiper = thisSwiper.swiper({
				loop:true,
				grabCursor: true,
				slidesPerView: 4,
				spaceBetween: 24, 
				paginationClickable: true
			});
			$('.swiper-button-prev').on('click', function(e){
				e.preventDefault();
				var swiper = $(this).siblings('.swiper-container').data('swiper');
				swiper.swipePrev();
			});
			$('.swiper-button-next').on('click', function(e){
				e.preventDefault();
				var swiper = $(this).siblings('.swiper-container').data('swiper');
				swiper.swipeNext();
			});


		}

		if(thisSwiper.hasClass('swiper-container-main')){

		    
			 var mySwiper = thisSwiper.swiper({
			    pagination: '.swiper-pagination',
				loop:true,
				grabCursor: true,
				slidesPerView: 1,
				spaceBetween: 24, 
				paginationClickable: true
			});
			$('.swiper-button-prev').on('click', function(e){
				e.preventDefault();
				var swiper = $(this).siblings('.swiper-container').data('swiper');
				swiper.swipePrev();
			});
			$('.swiper-button-next').on('click', function(e){
				e.preventDefault();
				var swiper = $(this).siblings('.swiper-container').data('swiper');
				swiper.swipeNext();
			});

		}

		if(thisSwiper.hasClass('swiper-container-partners')){

		   	var mySwiper = thisSwiper.swiper({
				loop:true,
				grabCursor: true,
				slidesPerView: 5,
					spaceBetween: 24, 
				paginationClickable: true
			});
			$('.swiper-button-prev').on('click', function(e){
				e.preventDefault();
				var swiper = $(this).siblings('.swiper-container').data('swiper');
				swiper.swipePrev();
			});
			$('.swiper-button-next').on('click', function(e){
				e.preventDefault();
				var swiper = $(this).siblings('.swiper-container').data('swiper');
				swiper.swipeNext();
			});

		}

		if(thisSwiper.hasClass('swiper-container-product')){

			$('html').addClass('title-none');

			if($('.swiper-container-product .swiper-slide').length > 3 ){

				$('.swiper-wrap-product').addClass('swiper-yes');

				console.log($('.swiper-container-product .swiper-slide').length);

			   	var mySwiper = thisSwiper.swiper({
					loop:true,
					grabCursor: true,
					slidesPerView: 3,
					spaceBetween: 5, 
					paginationClickable: true
				});
				$('.swiper-button-prev').on('click', function(e){
					e.preventDefault();
					var swiper = $(this).siblings('.swiper-container').data('swiper');
					swiper.swipePrev();
				});
				$('.swiper-button-next').on('click', function(e){
					e.preventDefault();
					var swiper = $(this).siblings('.swiper-container').data('swiper');
					swiper.swipeNext();
				});

			}
			

		}



	});

}

    // AJAX

	function showDesctop(){  

	    $.ajax({  
	        url: "slaider-ajax1.html",  
	        cache: false,
	        dataType : "html",  
	        success: function(html){ 
	            $(".slaider-ajax1").html(html);  
	        }  
	    });    

	    $.ajax({  
	        url: "slaider-ajax2.html",  
	        cache: false,
	        dataType : "html",  
	        success: function(html){ 
	            $(".slaider-ajax2").html(html);  
	        }  
	    });    

	    $.ajax({  
	        url: "slaider-ajax3.html",  
	        cache: false,
	        dataType : "html",  
	        success: function(html){ 
	            $(".slaider-ajax3").html(html);  
	        }  
	    });  

	}



	function showMobile(){  

	    $.ajax({  
	        url: "slaider-ajax1-mobile.html",  
	        cache: false,
	        dataType : "html",  
	        success: function(html){ 
	            $(".slaider-ajax1").html(html);  
	        }  
	    });  

	    $.ajax({  
	        url: "slaider-ajax2-mobile.html",  
	        cache: false,
	        dataType : "html",  
	        success: function(html){ 
	            $(".slaider-ajax2").html(html);  
	        }  
	    });  

	    $.ajax({  
	        url: "slaider-ajax3-mobile.html",  
	        cache: false,
	        dataType : "html",  
	        success: function(html){ 
	            $(".slaider-ajax3").html(html);  
	        }  
	    });  

	}  


	$(document).ajaxStop(function() {
		if($('.swiper-container').length !== 0){
			ajax_slaider();
		}
	});

	function mobileDecktopFun(){

		wrapperWidth = $('.wrapper').width();

		if(wrapperWidth > 767){

			showDesctop();

		}else{

			showMobile();

		}

	}


	function mobileDecktopFunResize(){	
		
		// wrapperWidthResize = $('.wrapper').width();

		// if( wrapperWidthResize > wrapperWidth)

	}



	mobileDecktopFun();





	// END AJAX



// END SWIPER
///////////////////////////////////////



// IK SElECT
///////////////////////////////////////

	$('select').each(function(){

		if( $(this).parent().hasClass('desctop-language') ){

			$(this).ikSelect({

				autoWidth: true,
				ddFullWidth: true,
				equalWidths: true,
				dynamicWidth: true,

			});

		}else{

			$(this).ikSelect({

				autoWidth: false,
				ddFullWidth: false,
				equalWidths: false,
				dynamicWidth: false,

			});

		}

	});





// END IK SElECT
///////////////////////////////////////



// FANCYBOX
///////////////////////////////////////

	$("a.gallery").fancybox({
		"padding" : 17
	});

// END FANCYBOX
///////////////////////////////////////


// ACCORDION
///////////////////////////////////////


	$('.wrap-accordion .open').click(function(){
		$(this).parent().next().stop();
		$(this).parent().next().slideDown(300, function(){
	 		$(this).closest('.wrap-accordion').addClass('open-accordion');
		});
		return false
	});


	$('.wrap-accordion .close').click(function(){
		$(this).parent().next().stop();
		$(this).parent().next().slideUp(300, function(){
	 		$(this).closest('.wrap-accordion').removeClass('open-accordion');
		});
		return false
	});




// END ACCORDION
///////////////////////////////////////



// SWIPER CONTAINER PRODUCT
///////////////////////////////////////

	$('.swiper-container-product a').click(function(){

		$('.swiper-container-product a').removeClass('active');
		$(this).addClass('active');
		var linkSrsSlide = $(this).attr('href');

		$('.product-img a').attr('href', linkSrsSlide);
		$('.product-img img').attr('src', linkSrsSlide);
		return false

	});

// END SWIPER CONTAINER PRODUCT
///////////////////////////////////////


// HEDER MENU SCROLL
///////////////////////////////////////

	menuTop = $('.main-wrap-header-main').offset();

	scrollFun();
	scrollFunResize();

function scrollFunResize(){

	$(window).resize(function(){

		menuTop = $('.main-wrap-header-main').offset();	

	});

}


function scrollFun(){

	$(window).scroll(function(){

		var scrollHeader = $(window).scrollTop();

		if(scrollHeader > menuTop.top){
			
			$('.wrap-header-main').addClass('position-fixed');

		}else{

			$('.wrap-header-main').removeClass('position-fixed');

		}
	});

}
// END HEDER MENU SCROLL
///////////////////////////////////////



});


// ISOTOPE
///////////////////////////////////////




$(window).load(function(){
    var $container = $('.portfolioContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
 
    $('.portfolioFilter a').click(function(){
        $('.portfolioFilter .active').removeClass('active');
        $(this).addClass('active');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    });
});


// END ISOTOPE
///////////////////////////////////////

