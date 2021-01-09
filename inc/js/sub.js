$(document).ready(function () {


	// sub menu
	$('ul.sub_tab li[class*="dep"]').on('click', function () {
		$(this).find('ul').stop().slideToggle(450);
		$(this).toggleClass("on");
	});
	//	var jbOffset = $('.sub_tab_box').offset();
	//	$(window).scroll(function () {
	//		if ($(document).scrollTop() > jbOffset.top) {
	//			$('.sub_tab_box').addClass('sub_tab_on');
	//		} else {
	//			$('.sub_tab_box').removeClass('sub_tab_on');
	//		}
	//	});

	/*var swiperx = new Swiper('.swiper-container.modal_slide_wrap', {
		slidesPerView: 1,
		autoHeight: true, //enable auto height
		spaceBetween: 96,
		spaceBetween: 0,
		centeredSlides: true,
		observer: true,
		observeParents: true,
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});*/


	//	$(".imgList_wrap ul li").click(function(){
	//		$('#myModal').modal('show'),
	//		$('#myModal').css('display','block')
	//	})
	//	
	//	$('head').append('<style type="text/css">.modal .modal-body {max-height: ' + ($('body').height() * .8) + 'px;overflow-y: auto;}.modal-open .modal{overflow-y: hidden !important;}</style>');

	



});

// 768이하에서 table tr 클릭시 뷰페이지 이동, tr 사업명이 제일 위로오게

$(function(){
            //resize: 브라우저 창 너비의 변경된 값을 width 변수에 저장
            $(window).resize(function () {
                var width = $(window).width();
                if (width<=768) {
					$(".tbl-list.archive tr").css("cursor","pointer");

					$('.tbl-list.archive tr').on('click', function() {
						location.href = $(this).children('.newList').children('a').attr('href');
						return false;
					});

					//$(".tbl-list.archive tr td.newList").insertBefore(".tbl-list.archive tr td:first-child");
					//$('.tbl-list.archive tr td.newList').each(function() {
					//$(this).insertBefore( $(this).prev('.tbl-list.archive tr td') );
					//});
					// Reference: stackoverflow
					
					
				
                   
                } else if (width>=768 && width<992) {
                   
                } else if (width>768) {
                   $(".tbl-list.archive tr").css("cursor","auto");
				 
                }
            });

            $(window).trigger("resize"); //강제로 호출하는 함수
        });




/*
function tab_menu(num) {
		
		var f = $('.flagList').find('.list');
		for (var i = 0; i < f.length; i++) {
			if (i == num) {
				f.eq(i).addClass('active');
				$('.tab_Con0' + i).addClass('active');
				$('.tbl-box .tab_Con0' + i).addClass('active');

			} else {
				f.eq(i).removeClass('active');
				$('.tab_Con0' + i).removeClass('active');
			}
		}

		if(num < 10) {
			var region  = $('.tab_Con0' + num).find("area").attr("title");
		} else {
			var region  = $('.tab_Con' + num).find("area").attr("title");
		}
		console.log(region);
		fn_search3(region);
		//location.href="/user/year100aList.do?region="+region;
	}

*/