
var app = angular.module("myApp", []);

var USER_DATA = {};

app.controller("myController", function () {

    var count = 0;
    var slider = document.getElementById('js-form-slider').getElementsByClassName('form__inner')[0];

    this.items = [
        {"name":"Dr.One" },
        {"name":"Dr.Two" },
        {"name":"Dr.Tree" }
    ];

    this.moveSlide = function(){
        count += 1;
        slider.style.webkitTransform = 'translate3d(' + -count * window.innerWidth + 'px, 0,0';
    };

    this.selectDr = function(e){
        USER_DATA.dr = e.target.value;
        this.moveSlide();
    };


    //function clickHandler(self){
    //    console.log($(self).val());
    //}
    //
    //$('.js-data-button').on('click submit', function(e){
    //    e.preventDefault();
    //    clickHandler(this);
    //});
});

require('./module/hack.js');
require('./module/smooth-scroll.js');
require('./module/data.js');
