$(function() {
    var imageElement,imageButtonElement,tempDiv,i; // variable for use 
    var srcArray = [{ // image source url Array
        imageUrl : 'image/1.jpg'
    },{
        imageUrl : 'image/2.png'
    },{
        imageUrl : 'image/3.jpg'
    },{
        imageUrl : 'image/4.jpg'
    },{
        imageUrl : 'image/5.jpg'
    },{
        imageUrl : 'image/6.jpg'
    },{
        imageUrl : 'image/7.jpg'
    },{
        imageUrl : 'image/8.png'
    },{
        imageUrl : 'image/9.jpg'
    }];
    // Body onload function on window for first time
    $('#body').ready(function() {
        $('#prev').prop('disabled', true);
        // Create Image Div
        for ( i=0;i<srcArray.length;i++) {
            tempDiv = $('<div id="image-div-'+i+'" class="hide-display"><img data-u="image" class="image-set" src="'+srcArray[i].imageUrl+'" /></div>')
            $('#image-slider').append(tempDiv);
        }
        // Create Image Button Div
        for ( i=0;i<srcArray.length;i++) {
            tempDiv = $('<button id="image-button-id-'+i+'" class="image-button" data-id="'+i+'">'+i+'</button>')
            $('#image-button').append(tempDiv);
        }
        _reset();
    });
    // Previous Action
    $('#prev').click(function(){
        _prev();
        
    });
    // Next Action
    $('#next').click(function(){
        _next();
    });
    // image button Action
    $('.image-button').ready(function(){
        $('.image-button').click(function(){
            imageButtonElement.removeClass('image-set-css');
            imageElement.removeClass('show-image');
            imageButtonElement = $(this);
            imageElement = $('#image-div-'+$(this).attr('data-id'));
            imageButtonElement.addClass('image-set-css');
            imageElement.addClass('show-image');
        });
    })
    // Preious Image Functon
    function _prev() {
        if(imageElement.prev().hasClass('hide-display')) {
            imageElement.removeClass('show-image');
            imageElement.prev().addClass('show-image');
            imageButtonElement.removeClass('image-set-css');
            imageButtonElement.prev().addClass('image-set-css');
            imageElement = imageElement.prev();
            imageButtonElement = imageButtonElement.prev();
            $('#next').prop('disabled', false);
        }
        if(!imageElement.prev().hasClass('hide-display')){
            $('#prev').prop('disabled', true);
        }
    }
    // Next Image Functon
    function _next () {
        if(imageElement.next().hasClass('hide-display')) {
            imageElement.removeClass('show-image');
            imageElement.next().addClass('show-image');
            imageButtonElement.removeClass('image-set-css');
            imageButtonElement.next().addClass('image-set-css');
            imageElement = imageElement.next();
            imageButtonElement = imageButtonElement.next();
            $('#prev').prop('disabled', false);
        }
        if(!imageElement.next().hasClass('hide-display')){
            $('#next').prop('disabled', true);
        }
    }
    // Reset Function
    function _reset() {
        if(imageElement && imageButtonElement) {
            imageElement.removeClass('show-image');
            imageButtonElement.removeClass('image-set-css'); 
        }
        imageElement = $('#image-slider').children().first();
        imageButtonElement = $('#image-button').children().first();
        imageElement.addClass('show-image');
        imageButtonElement.addClass('image-set-css');
    }
    // time interval function
    setInterval(function(){
        if(!imageElement.next().hasClass('hide-display')) {
            _reset();
        } else {
           _next(); 
        }    
    }, 3000);
});