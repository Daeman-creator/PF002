$(document).ready(function () {
	var swiper = new Swiper('.main_visual', {
		//autoHeight: true, //enable auto height
		//spaceBetween: 96,
		//		slidesPerView: 3,

		loop: true,
		slidesPerView: 'auto',
		slidesPerView: 3,
		centeredSlides: true,
			autoplay: {
			delay: 3000,
		  },

		//		observer: true,
		//		observeParents: true,
		//		spaceBetween: 50,

		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.pc .swiper-button-next',
			prevEl: '.pc .swiper-button-prev',
		},
		breakpoints: {
			1400: {

				//initialSlide : 0,
				slidesPerView: 1,
				centeredSlides: true,
				loop: true,
				initialSlide: 0,
				//slideVisibleClass:'swiper-slide-active',

				//updateOnWindowResize: true,
				//runCallbacksOnInit:false,
				//roundLengths: true,
				//loop: true,
				//loopAdditionalSlides: 30,
			},
			// when window width is >= 480px
		},


	});


});



$(document).ready(function () {
	var mswiper = new Swiper('.mobile', {
		//autoHeight: true, //enable auto height
		//spaceBetween: 96,
		//		slidesPerView: 3,

		//loop: true,
		//slidesPerView: 'auto',
		slidesPerView: 1,
		centeredSlides: true,
		observer: true,
		observeParents: true,



		pagination: {
			el: '.swiper-pagination.mb',
			clickable: true,
		},
		navigation: {
			nextEl: '.mb .swiper-button-next.mb_n',
			prevEl: '.mb .swiper-button-prev.mb_p',
		},

	});

	//햄버거 메뉴
	var hamWidth = $(".hamNavibar").width();
	var hamSt = 0;
	

	$(function () {
		$('.ham_btn').click(function () {
			$(".hamWrap2").toggleClass('Fixed');
			$(".site_map_wrap").toggleClass('on');
			$("#ham").toggleClass('on');
			$("body").toggleClass("hidden")
		})
		$('.click1').click(function () {
			$('.child').toggle('display', 'block')
		})
		$('.click2').click(function () {
			$('.child').toggle('display', 'block')
		})

	});

	$(function () {
		$(".click").click(function () {
			//$(".child").slideUp();
			if (!$(this).next().is(":visible")) {
				$(this).next().slideDown();
			} else {
				$(this).next().slideUp();
			}

		})
		


		//		$(".Mmain_menu>li").click(function () {
		//			$(this).toggleClass("on")
		//		})

	});
	



});

//Tweenmax를 이용한 header  
$(function(){



 //mainTab();
    //calSelect();
	gnbSubMenu();
	
});


function gnbSubMenu(){
	var gnb = $(".gnb");
	var gnbChild = $(".gnb > div");
	var gnbTitle = gnb.find('a');

	gnbChild.on({
		mouseover: function(){
			$(this).addClass('on')			
		},
		mouseleave: function(){
			$(this).removeClass('on');
		}
	});
	gnbTitle.mouseover(function(){
		headerOpen();
	});
	$('.header').mouseleave(function(){
		headerClose();
		$('body').css('overflow', 'initail')
	});

	function headerOpen() {  //Tweenmax를 이용한 헤더 메뉴 슬라이드 open
		TweenMax.killAll();
		TweenMax.to($(".header"), .5, {
			height : 350,
			ease : 'easeOutExpo'
		});
		$(".header").addClass("on");
	}

	function headerClose() {  //Tweenmax를 이용한 헤더 메뉴 슬라이드 close
		TweenMax.killAll();
		TweenMax.to($(".header"), .5, {
			height : 110,
			ease : 'easeOutExpo',
			onComplete : function() {
				$(".header").removeClass("on");
			}
		});
		$('.overlay').removeClass('on');
		$(".gnb-hover-bar").removeClass("on");
	}

}






$(document).ready(function () {
	$('.slick_wrap').slick({
		dots: true,
		arrows: false,
		fade: true,
		infinite: true,
		pauseOnHover: false,
		pauseOnFocuse: false,
		autoplay: true, // 자동 스크롤 사용 여부
		autoplaySpeed: 3000,
		adaptiveHeight: true,

	});


	var $sec = $(".cont2");

	$(window).on("scroll", function () {
		var sTop = $(window).scrollTop(),
			winH = $(window).outerHeight();

		$.each($sec, function () {
			if ($(this).offset().top < sTop + winH - 250) {
				$(this).addClass("active");
				$(this).find(".slide").slick("slickSetOption", "autoplay", true, true);
			} else {
				$(this).removeClass("active");
				$(this).find(".slide").slick("slickSetOption", "autoplay", false, false);
			}
		});

	});

	var $sed = $(".cont3");

	$(window).on("scroll", function () {
		var sTop = $(window).scrollTop(),
			winH = $(window).outerHeight();

		$.each($sed, function () {
			if ($(this).offset().top < sTop + winH - 265) {
				$(this).addClass("animated_child");

			} else {

				$(this).removeClass("animated_child");
			}
		});
	});

	$('.banner').slick({
		//dots: true,
		arrows: true,
		slidesToShow:4,
		slidesToScroll: 1,
		infinite: true,
		autoplay: true, // 자동 스크롤 사용 여부
		autoplaySpeed: 3000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
		pauseOnHover: true, // 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
		prevArrow: "<button type='button' class='slick-prev'>Previous</button>", // 이전 화살표 모양 설정
		nextArrow: "<button type='button' class='slick-next'>Next</button>", // 다음 화살표 모양 설정
		dotsClass: "slick-dots", //아래 나오는 페이지네이션(점) css class 지정
		draggable: true,

			//slidesToShow: 3



		responsive: [ // 반응형 웹 구현 옵션
			{
				breakpoint: 1500, //화면 사이즈 960px

				settings: {
					//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
					slidesToShow: 3
				}
					},
			{
				breakpoint: 1200, //화면 사이즈 768px
				settings: {
					//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
					slidesToShow: 3
				}
					},
			{
				breakpoint: 800, //화면 사이즈 768px
				settings: {
					//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
					//variableWidth: true,
					slidesToShow: 2
				}
					},


				]
	});

	$('.img_m_wrap').slick({
		//dots: true,
		arrows: true,
		prevArrow: "<button type='button' class='slick-prev'>Prev</button>", // 이전 화살표 모양 설정
		nextArrow: "<button type='button' class='slick-next'>Next</button>",
		fade: true,
		slidesToShow: 3,
		infinite: true,
		pauseOnHover: false,
		pauseOnFocuse: false,
		//autoplay: true, // 자동 스크롤 사용 여부
		//autoplaySpeed: 5000,
	});
	schFn();

});



/* search */ 


function schFn(){
	$(".btn-search").click(function () {
		//$(".sch-wrap").addClass("active")
		//$(".sch-bg").addClass("active")
		$(".sch-wrap").show();
		$(".sch-bg").show();


	});
	$(".btn_close").click(function () {
		//$(".sch-wrap").removeClass("active")
		//$(".sch-bg").removeClass("active")
		$(".sch-wrap").css("display", "none");
		$(".sch-bg").css("display", "none");


	})
}
