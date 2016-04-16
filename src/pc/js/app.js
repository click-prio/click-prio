
var app = angular.module("myApp", []);

app.controller("myController", function () {

    this.items = [
        {"name":"Dr.One" },
        {"name":"Dr.Two" },
        {"name":"Dr.Tree" }
    ];
});

require('./module/hack.js');
require('./module/smooth-scroll.js');
