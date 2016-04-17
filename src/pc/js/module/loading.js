(function(){

    'use strict';

    var $window = $(window),
        $loading = $('#js-loading');

    var $hero = $('#js-hero');

    function setHero() {
        if (!$hero.find('.caution').is(':visible')) {
            $hero.addClass('is-only-logo');
        } else {
            $hero.removeClass('is-only-logo');
        }
    }
    function loading(){
        setTimeout(function(){
            $loading.fadeOut(750);
        },500);
    }

    function load(){
        setHero();
        loading();
    }

    $window.on('load', load);

})();