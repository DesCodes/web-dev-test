$(document).ready(function(){
	// gives draggable funtion to the product img
	$('.productContainer figure img').draggable({
		axis: 'x', 
		containment: '.wrapper',
		revert: true,
	})


			// animation for right arrow click and section click, circle2 (window width < 1350px)
	$('.backgroundContainer section, .arrowRight, .circle2').on('click', function(){
		function checkWidth() {
		var windowSize = $(window).width();

		if(windowSize <= 1350) {
			$('.productTitleContainer').animate({top: '100%'}, 'slow')
			$('.learnMore').hide()
			$('.descriptionContainer p, .XMFitness').show('swing')
			$('.descriptionContainer p').animate({opacity: '1'}, 'slow')
			$('.descriptionContainer').css('width', '100%')
			$('.interactiveSlider .circle1').css('color', '#616161')
			$('.interactiveSlider .circle2').css('color', '#bfab7c')
			$('html, body').stop().animate({scrollTop: $('.descriptionContainer').offset().top}, 2000, 'swing')
		
		} else {
			// animation for right arrow click, section click, circle2
			$('.productContainer').animate({left: '38%'}, 'slow')
			$('.productTitleContainer').animate({top: '23%'}, 'slow')
			$('.descriptionContainer p, .XMFitness').show('swing')
			$('.descriptionContainer p').animate({opacity: '1'}, 'slow')
			$('.descriptionContainer').css('width', '450px')
			$('.learnMore').hide()
			$('.interactiveSlider .circle1').css('color', '#616161')
			$('.interactiveSlider .circle2').css('color', '#bfab7c')
			$('.productContainer figure img').draggable('disable')
		}
	}
	checkWidth();
	});


	$('.arrowLeft, .circle1').on('click', function(){
		function checkWidth() {
			var windowSize = $(window).width();

			if(windowSize <= 1350) {
				console.log('1350')
				// animation for left arrow click and circle1 click (window width < 1350px)
				$('.learnMore').show('swing')
				$('.descriptionContainer p, .XMFitness').hide('slow')
				$('.productTitleContainer').animate({top: '50%'}, 'slow')
				$('.productContainer').animate({left: '0'}, 'slow')
				$('.interactiveSlider .circle2').css('color', '#616161')
				$('.interactiveSlider .circle1').css('color', '#bfab7c')
				$('html, body').stop().animate({scrollTop: $('.productContainer').offset().top}, 2000, 'swing')
				$('.productContainer figure img').draggable('enable')

			} else {
				// animation for left arrow click and circke1 click
				$('.learnMore').show('swing')
				$('.descriptionContainer p, .XMFitness').hide('slow')
				$('.productTitleContainer').animate({top: '50%'}, 'slow')
				$('.productContainer').animate({left: '0'}, 'slow')
				$('.interactiveSlider .circle2').css('color', '#616161')
				$('.interactiveSlider .circle1').css('color', '#bfab7c')
				$('.productContainer figure img').draggable('enable')
			}
		}
		checkWidth();
	});



	// img draging function
	$('.productContainer figure img').on('mousedown', function() {
		timeOut = setTimeout(function() {
		var position = $('.productContainer figure img').position();	
			
			if(position.left < 0) {

				var windowSize = $(window).width();
				if(windowSize <= 1350) {
						$('.productTitleContainer').animate({top: '100%'}, 'slow')
						$('.learnMore').hide()
						$('.descriptionContainer p, .XMFitness').show('swing')
						$('.descriptionContainer p').animate({opacity: '1'}, 'slow')
						$('.descriptionContainer').css('width', '100%')
						$('.interactiveSlider .circle1').css('color', '#616161')
						$('.interactiveSlider .circle2').css('color', '#bfab7c')
						$('html, body').stop().animate({scrollTop: $('.descriptionContainer').offset().top}, 2000, 'swing')
						$('.productContainer figure img').draggable('disable')
				} else {

					console.log(position.left)
					$('.productContainer figure img').fadeOut('fast').fadeIn('slow').draggable('disable')
					$('.productContainer').animate({left: '38%'}, 'fast')
					$('.productTitleContainer').animate({top: '23%'}, 'slow')
					$('.descriptionContainer p, .XMFitness').show('swing')
					$('.descriptionContainer p').animate({opacity: '1'}, 'slow')
					$('.descriptionContainer').css('width', '450px')
					$('.learnMore').hide()
					$('.interactiveSlider .circle1').css('color', '#616161')
					$('.interactiveSlider .circle2').css('color', '#bfab7c')
				}
			}
		}, 200)
	})



});