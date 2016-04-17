(function(){

    'use strict';

    var $window = $(window),
        $loading = $('#js-loading');

    function load(){
        setTimeout(function(){
            $loading.fadeOut(750);
        },500);
    }

    $window.on('load', load);

})();