(function(){

    'use strict';

    var $window = $(window),
        $slider = $('#js-form-slider .form__inner'),
        $item = $slider.find('.form__item');

    var winWidth;
    var itemLength;

    function getValue(){
        winWidth = $window.width();
        itemLength = $item.length;
    }

    function setData(){
        $item.css('width', winWidth);
        $slider.css('width', winWidth * itemLength);
    }

    function play(){
        getValue();
        setData();
    }

    $window.on('load resize', play);

})();