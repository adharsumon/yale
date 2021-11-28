$(function () {

	// SRICKY MENU JS HERE
	$(window).scroll(function () {
		var scrollAmount = $(window).scrollTop();
	
		if (scrollAmount > 100) {
		  $(".main_menu").addClass("sticky");
		} 
		else {
		  $(".main_menu").removeClass("sticky");
		}
	  });

	//   BANNER SLIDER JS HERE
	$('.single_item').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		nextArrow: ".btn_right",
		prevArrow: ".btn_left",
		responsive: [
			{
			  breakpoint: 769,
			  settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '0px',
				slidesToShow: 3
			  }
			},
			{
			  breakpoint: 576,
			  settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '0px',
				slidesToShow: 1
			  }
			}
		  ]
	});

	// ROOMS FILTER
	var $grid = $('.rooms_image_filter').isotope({
		// options
		itemSelector: '.single_room',
		layoutMode: 'fitRows'
	});

	$('.rooms_btn').on('click', 'button', function () {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({
			filter: filterValue
		});
	});

	// EXPERIENCE VIDEO
	$(document).ready(function () {
		$('.venobox').venobox();
	});

	// BOOKING JS FILE HERE
	$('#test,#test2').dateSelector();

	// CALENDER JS HERE
	$('.calendar-container').calendar({
		date: new Date(),
		weekDayLength: 3,
		highlightSelectedWeekday: true,
		showThreeMonthsInARow: true,
		showThreeMonthsInARow: true,


	});

	// BACK TO TOP
	$(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });
	
	// ENQUIRY JS HERE
	$(function() {
		$("#feedback-tab").click(function() {
			$("#feedback-form").toggle("slide")
		})
	  
	  $(".octicon-comment").click(function() {
			$("#feedback-form").toggle("slide")
		})
	  
		// $("#hideme").click(function(e) {
		// e.preventDefault()
		// })
	  
	  $('.octicon-comment').hover(function () {    
		$('#hideme').show()
	  }, function () {
		$('#hideme').hide()
	  })
	
		$("#feedback-form form").on('submit', function(event) {
		// TODO: include page that user is currently on
			var $form = $(this)
			$.ajax({
				type: $form.attr('method'),
				url: $form.attr('action'),
				data: $form.serialize(),
				success: function() {
					$("#feedback-form").toggle("slide").find("textarea").val('')
				}
			})
			event.preventDefault()
		})
	})


});