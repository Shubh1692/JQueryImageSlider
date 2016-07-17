$(function() {
    var imageElement, imageButtonElement, tempDiv, i; // variable for use 
    var srcArray = [{ // image source url Array
        imageUrl: 'image/1.jpg'
    }, {
        imageUrl: 'image/2.png'
    }, {
        imageUrl: 'image/3.jpg'
    }, {
        imageUrl: 'image/4.jpg'
    }, {
        imageUrl: 'image/5.jpg'
    }, {
        imageUrl: 'image/6.jpg'
    }, {
        imageUrl: 'image/7.jpg'
    }, {
        imageUrl: 'image/8.png'
    }, {
        imageUrl: 'image/9.jpg'
    }];
    var imageSlide = 2 // Image Side on one click 
    var imageShowInPage = 4; // Image Show on div at a time
    var imageSetWidth; // image set Width
    var nextFlag = true; // next flag value
    // Body onload function on window for first time
    $('#body').ready(function() {
        $('#prev').prop('disabled', true);
        // Create Image Div
        for (i = 0; i < srcArray.length; i++) {
            tempDiv = $('<div id="image-div-' + i + '" class="show-image image-exiest"><img data-u="image" class="image-set" src="' + srcArray[i].imageUrl + '" /></div>')
            $('#image-slider').append(tempDiv);
        }
        $('.image-set').width($('#image-slider').width() / imageShowInPage);
        imageSetWidth = $('.image-set').width();
        $('#image-slider').width( $('.image-set').width()*imageShowInPage);
        if(imageSlide > imageShowInPage) {
            $('#prev').prop('disabled', true);
            $('#next').prop('disabled', true);
            alert('Image show in page should be greater then equal to slide image ')
        }
        _reset();
    });
    // Previous Action
    $('#prev').click(function() {
        _prev();
    });
    // Next Action
    $('#next').click(function() {
        _next();
    });
    // Preious Image Functon
    function _prev() {
        for (i = 0; i < imageSlide; i++) {
            if (imageElement.prev().width() !== null) {
                imageElement.prev().width(imageSetWidth);
                imageElement.prev().toggle("slide");
                imageElement = imageElement.prev();
                $('#next').prop('disabled', false);
            } else {
                nextFlag = true;
                $('#prev').prop('disabled', true);
            }
        }
    }
    // Next Image Functon
    function _next() {
        for (i = 0; i < imageSlide; i++) {
            if (imageElement.next().width() !== null) {
                imageElement.toggle("slide");
                imageElement.width(0);
                imageElement = imageElement.next();
                imageButtonElement = imageButtonElement.next();
                $('#prev').prop('disabled', false);
            } else {
                nextFlag = false;
                $('#next').prop('disabled', true);
            }
        }

    }

    // Reset Function
    function _reset() {
        imageElement = $('#image-slider').children().first();
        imageButtonElement = $('#image-button').children().first();
        imageElement.addClass('show-image');
        imageButtonElement.addClass('image-set-css');
    }
    // time interval function
    setInterval(function(){
        if(nextFlag) {
            _next(); 
        } else {
            _prev();
        }    
    }, 3000);
});