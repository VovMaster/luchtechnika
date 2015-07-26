$(document).ready(function(){

// HEADER BUTTON MENU
///////////////////////////////////////

	function hederButton(){
		if($('.button-menu').hasClass('open-menu')){
		
			var heightViewingArea = $('main').height();
			var heightMenu = $('.main-nav-js').height();

			if(heightMenu > heightViewingArea){
				$('.wrapper-main').height(heightMenu);
				$('.wrapper-main-nav').height(heightMenu);
			}else{
				$('.wrapper-main').css('height', 'auto');
				$('.wrapper-main-nav').height(heightMenu);
			}
		}
	}

	function resizeMenu(){
		$(window).resize(function(){
			hederButton();
		});
	}


	function closeMenu(){
		$('.background-body').remove();
		$('body').removeClass('footer-bottom');
		$('.button-menu').removeClass('open-menu');
		$('.wrapper-main').css('height', 'auto');
		$('.wrapper-main-nav').outerHeight(0);
		return false
	}



	$('.button-menu').click(function(){
		
		if($('.button-menu').hasClass('open-menu')){

			closeMenu();

		}else{

			$(this).addClass('open-menu');
			closeSingUp();
			if($('.background-body').length === 0){
				$('.wrapper').append('<div class="background-body"></div>').click();
				$('body').addClass('footer-bottom');
			}
			bodyClose();
			hederButton();
			resizeMenu();
			closeSidebar();

		}

	});


	$('.close-nav-main').click(function(){

		closeMenu();

		return false

	});


	function bodyClose(){

		$('.background-body').on('click', function(){

			closeMenu();
			closeSidebar();
		});
		
	}


// END HEADER BUTTON MENU
///////////////////////////////////////



// SIGN-FORM
///////////////////////////////////////

	function closeSingUp(){

		$('.sign-form').removeClass('open-sing-up').hide();
		$('.background-body').remove();
		$('body').removeClass('footer-bottom');
	}





	 $('[data-link="data-link-header"]').click(function(){

		linkHref = $(this).attr('href');

		if($(linkHref).hasClass('open-sing-up')){

			closeSingUp();

		}else{
			$('.sign-form').removeClass('open-sing-up').hide();
			$(linkHref).addClass('open-sing-up').show();
			closeMenu();
			if($('.background-body').length === 0){
				$('.wrapper').append('<div class="background-body"></div>');
				$('body').addClass('footer-bottom');
			}
			bodyClose2();

			heightSingUpFun();

			resizeSingUp();
			closeSidebar();

		}
		return false
	 });



	function bodyClose2(){


		$('.background-body').on('click', function(){

			closeSingUp();
			closeSidebar();

		});
		
	}


	function heightSingUpFun(){
		if($('.sign-form').hasClass('open-sing-up')){

			var heightViewingArea = $('main').height();
			var heighSingUp = $('.open-sing-up').height();

			if(heighSingUp > heightViewingArea){
				$('.wrapper-main').height(heighSingUp);
			}else{
				$('.wrapper-main').css('height', 'auto');

			}
		}
	}


	function resizeSingUp(){
		$(window).resize(function(){
			heightSingUpFun();
		});
	}



// sidebar-header
///////////////////////////////////////




	 $('.basket-header-button').click(function(){

		$('.sidebar-header .sidebar').toggleClass('sidebar-header-open');
		heightSingUpFun2();

	 });


	 function heightSingUpFun2(){
		if($('.sidebar-header .sidebar').hasClass('sidebar-header-open')){
			closeMenu();
			closeSingUp();

			var heightViewingArea = $('main').height();
			var heighSingUp = $('.sidebar-header .sidebar').height();

			$('.sidebar-header').height('auto');

			if(heighSingUp > heightViewingArea){
				$('.wrapper-main').height(heighSingUp);
			}else{
				$('.wrapper-main').css('height', 'auto');
			}

			if($('.background-body').length === 0){
				$('.wrapper').append('<div class="background-body"></div>');
				bodyClose4();

			}


		}else{

			$('.sidebar-header').height('0');
			$('.wrapper-main').css('height', 'auto');
			$('.background-body').remove();

		}
	}


	function closeSidebar(){
		$('.sidebar-header .sidebar').removeClass('sidebar-header-open');
		$('.sidebar-header').height('0');
		$('.wrapper-main').css('height', 'auto');

	}


function bodyClose4(){

		$('.background-body').on('click', function(){

			closeMenu();
			closeSidebar();
		});
		
	}



// sidebar-header
///////////////////////////////////////




// SWIPER
///////////////////////////////////////



	function ajax_slaider(){



		$('.swiper-container').each(function(){
			thisSwiper = $(this);

			if(thisSwiper.hasClass('swiper-container-carousel')){



			    var appendNumber = 0;
			    var prependNumber = 0;
			    var swiper = new Swiper(this, {
					pagination: $(this).find('.swiper-pagination'),
					nextButton: $(this).find('.swiper-button-next'),
					prevButton: $(this).find('.swiper-button-prev'),
					slidesPerView: 3,
					paginationClickable: true,
					loop: true,
					spaceBetween: 24, 
			    });

			}

			if(thisSwiper.hasClass('swiper-container-main')){


			    var appendNumber = 0;
			    var prependNumber = 0;
			      var mySwiper = new Swiper('.swiper-container',{
				    pagination: '.swiper-pagination',
				    loop:true,
				    grabCursor: true,
				    paginationClickable: true,
				    autoResize : true
				    
				  })

			}

			if(thisSwiper.hasClass('swiper-container-partners')){

			    var appendNumber = 0;
			    var prependNumber = 0;
			    var swiper = new Swiper(this, {
					pagination: $(this).find('.swiper-pagination'),
					nextButton: $(this).find('.swiper-button-next'),
					prevButton: $(this).find('.swiper-button-prev'),
					slidesPerView: 5,
					paginationClickable: true,
					loop: true,
			    });


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


// ACCORDION
///////////////////////////////////////


	$('.header-accordion .open').click(function(){
		$(this).parent().next().stop();
		$(this).parent().next().slideDown(300, function(){
			$(this).parent().addClass('open-accordion')
		});
		return false
	});

	$('.header-accordion .close').click(function(){
		$(this).parent().next().stop();
		$(this).parent().next().slideUp(300, function(){
			$(this).parent().removeClass('open-accordion')
		});
		return false
	});


// END ACCORDION
///////////////////////////////////////



// SCROLL TOP
///////////////////////////////////////

	$('.top-scroll').click(function(){

		$('body, html').animate({scrollTop:0}, '300');
		return false
	});



// SCROLL TOP
///////////////////////////////////////
	


// Datapicker timepicker
///////////////////////////////////////



$('.time-picker .form-control').timepicker();

$('.date-picker .form-control').datepicker();


// END Datapicker timepicker
///////////////////////////////////////



$('.filter-more').click(function(){
	$(this).parent().addClass('open-filter');
	return false
});
$('.filter-close').click(function(){
	$(this).parent().removeClass('open-filter');
	return false
});






// ATTENTION!

function attention(){
	$('.attention-block').show();
	$('body').addClass('allert-open');
	$('.wrapper').append('<div class="background-body3"></div>');
}

function attentionClose(){
	$('.attention-block').hide();
	$('body').removeClass('allert-open');
	$('.background-body3').remove();
}


$(document).mouseup(function (e) {
    var container = $(".attention-block");
    if (container.has(e.target).length === 0){
        attentionClose();
    }
});

$('.close-attention').click(function(){
	attentionClose();
	return false
});






// attention();








// END ATTENTION!


// modal

$('.modal-block.attention')
$('.modal-block.success')
$('.wrap-header-main').addClass('modal-open');

function modalClose(){
	$('.wrap-header-main').removeClass('modal-open');
}


$('.modal-close').click(function(){
	modalClose();
	return false
});


function modalSuccess(){
	$('.modal-block.success').show();
	$('.wrapper').append('<div class="background-body4"></div>');
	$('.wrap-header-main').addClass('modal-open');
}

function modalAttention(){
	$('.modal-block.attention').show();
	$('.wrapper').append('<div class="background-body4"></div>');
	$('.wrap-header-main').addClass('modal-open');
}

function modalClose(){
	$('.modal-block').hide();
	$('.background-body4').remove();
	$('.wrap-header-main').removeClass('modal-open');
}


$(document).mouseup(function (e) {
    var container = $(".modal-block");
    if (container.has(e.target).length === 0){
        modalClose();
    }
});

$('.modal-close').click(function(){
	modalClose();
	return false
});








// modalSuccess();
// modalAttention();











// END modal


});