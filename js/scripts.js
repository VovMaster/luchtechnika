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
				e.preventDefault()
				var swiper = $(this).siblings('.swiper-container').data('swiper');
				swiper.swipePrev();
			});
			$('.swiper-button-next').on('click', function(e){
			e.preventDefault()
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
				e.preventDefault()
				var swiper = $(this).siblings('.swiper-container').data('swiper');
				swiper.swipePrev();
			});
			$('.swiper-button-next').on('click', function(e){
			e.preventDefault()
				var swiper = $(this).siblings('.swiper-container').data('swiper');
				swiper.swipeNext();
			});

		}



	});

}



ajax_slaider();

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

});