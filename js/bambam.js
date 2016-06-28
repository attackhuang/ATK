var initSlider = function() {
  
  
    $('#img-slider,#img-slider2,#img-slider3,#img-slider4').roundabout({
        minScale: 0.7,
        maxScale: 1,
        duration: 750
    });
 

  
};

$(document).ready(function(){

    initSlider();



});