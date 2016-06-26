$(function() {
	var imageElement;
    // Body onload function on window for first time
    $('#body').ready(function() {
        console.log('Body Loaded');
        imageElement = $('#image-slider').children().first();
        $('#image-slider').children().first().addClass('show-image');
        $('#image-slider-multi').children().first().addClass('show-image');
        $('#prev').prop('disabled', true);
    });
    // Previous Action
    $('#prev').click(function(){
    	console.log('prev');
    	if(imageElement.prev().hasClass('hide-display')) {
    		imageElement.fadeOut(function(){
    			//callback
    			imageElement.prev().fadeIn();
    			imageElement = imageElement.prev();
    			$('#next').prop('disabled', false);
    		});
    	}
    	if(!imageElement.prev().prev().hasClass('hide-display')){
    		$('#prev').prop('disabled', true);
    	}
    });
    // Next Action
    $('#next').click(function(){
    	console.log('next');
    	if(imageElement.next().hasClass('hide-display')) {
    		imageElement.fadeOut(function(){
    			//callback
    			imageElement.next().fadeIn();
	    		imageElement = imageElement.next();
	    		$('#prev').prop('disabled', false);
    		}); 	
	    }
	    if(!imageElement.next().next().hasClass('hide-display')){
	    	$('#next').prop('disabled', true);
	    }
    });
});