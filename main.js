$(document).ready(function(){
	$('.backgroundContainer section, .arrowRight, .circle2').on('click', function(){
		function checkWidth() {
		var windowSize = $(window).width();

		if(windowSize <= 1350) {
			console.log('1350')
			// animation for right arrow click and section click, circle2 (window width < 1350px)
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

	$('.productContainer figure img').draggable({
		axis: 'x', 
		containment: '.wrapper',
		revert: true,
	})
	// fade to left, reapear on the right side and fade in
	// on drag, auto fade away when img reaches left: -350px

	// $('.productContainer figure img').draggable({'disable'})
	// $('.productContainer figure img').draggable({'enable'})

	$('.productContainer figure img').on('mousedown ontouchmove', function() {
			timeOut = setTimeout(function checkImgPosition() {
				var position = $('.productContainer figure img').position()
				// console.log(position.left)

				if(position.left < -340) {
					console.log(position.left)
					$('.productContainer figure img').fadeOut('fast')
					// $('.productContainer figure img').css('left', '38%')
					$('.productContainer').animate({left: '38%'}, 'fast')
					$('.productTitleContainer').animate({top: '23%'}, 'slow')
					$('.descriptionContainer p, .XMFitness').show('swing')
					$('.descriptionContainer p').animate({opacity: '1'}, 'slow')
					$('.descriptionContainer').css('width', '450px')
					$('.learnMore').hide()
					$('.interactiveSlider .circle1').css('color', '#616161')
					$('.interactiveSlider .circle2').css('color', '#bfab7c')
					$('.productContainer figure img').fadeIn('slow')
					$('.productContainer figure img').draggable('disable')
				}
			}, 200).on('mouseup', function() {
				clearTimeout(timeOut)
			})

			// function checkImgPosition() {
			// 	var position = $('.productContainer figure img').position()
			// 	console.log(position.left)
			// }
	// checkImgPosition();
	})




});