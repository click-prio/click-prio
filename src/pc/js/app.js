
var app = angular.module("myApp", []);

var USER_DATA = {};

app.controller("myController", function () {

    var count = 0;
    var slider = document.getElementById('js-form-slider').getElementsByClassName('form__inner')[0];

    this.moveSlide = function(){
        count += 1;
        slider.style.webkitTransform = 'translate3d(' + -count * window.innerWidth + 'px, 0,0';
    };

    this.selectDr = function(e){
        USER_DATA.dr = e.target.value;
        this.moveSlide();
    };

    this.doctors = [
        {"name":"Dr.One" },
        {"name":"Dr.Two" },
        {"name":"Dr.Tree" }
    ];

    this.specialists = [
        {"name":"Surgery" },
        {"name":"Internal medicine" },
        {"name":"Dentistry" },
        {"name":"Department of Obstetrics and Gynecology" }
    ];

    this.specialties = [
        {
            "name": "Doctor’s specialty",
            "value": ""
        }, {
            "name": "Psychiatry",
            "value": "specialty-0"
        }, {
            "name": "Pediatrics",
            "value": "specialty-1"
        }, {
            "name": "Internal Medicine",
            "value": "specialty-2"
        }, {
            "name": "Obstetrics & Gynecology",
            "value": "specialty-3"
        }, {
            "name": "Ophtalmology",
            "value": "specialty-4"
        }, {
            "name": "Neurology",
            "value": "specialty-5"
        }, {
            "name": "Dermatology",
            "value": "specialty-6"
        }, {
            "name": "Family Medicine",
            "value": "specialty-7"
        }, {
            "name": "Dentist",
            "value": "specialty-8"
        }, {
            "name": "Pulmonology",
            "value": "specialty-9"
        }, {
            "name": "Hematology and Onconlogy",
            "value": "specialty-10"
        }, {
            "name": "Rheumatology",
            "value": "specialty-11"
        }, {
            "name": "Nephrology",
            "value": "specialty-12"
        }, {
            "name": "Gastrointerology",
            "value": "specialty-13"
        }, {
            "name": "DiabetologyCardiolog",
            "value": "specialty-14"
        }, {
            "name": "yEENT",
            "value": "specialty-15"
        }
    ];


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