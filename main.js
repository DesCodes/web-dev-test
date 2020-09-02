$(document).ready(function(){
	// animation for right arrow click and section click
	$('.backgroundContainer section, .arrowRight, .circle2').on('click', function(){
		$('.productContainer').animate({left: '38%'}, 'slow')
		$('.productTitleContainer').animate({top: '23%'}, 'slow')
		$('.descriptionContainer p, .XMFitness').show('swing')
		$('.descriptionContainer p').animate({opacity: '1'}, 'slow')
		$('.learnMore').hide()
		$('.interactiveSlider .circle1').css('color', '#616161')
		$('.interactiveSlider .circle2').css('color', '#bfab7c')
	});

	// animation for left arrow click
	$('.arrowLeft, .circle1').on('click', function(){
		$('.learnMore').show('swing')
		$('.descriptionContainer p, .XMFitness').hide('slow')
		$('.productTitleContainer').animate({top: '50%'}, 'slow')
		$('.productContainer').animate({left: '0'}, 'slow')
		$('.interactiveSlider .circle2').css('color', '#616161')
		$('.interactiveSlider .circle1').css('color', '#bfab7c')
	});

});