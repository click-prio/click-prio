(function () {

    'use strict';

    //js-section
    var controller = new ScrollMagic.Controller();
    var scenes = [];

    var section = document.getElementsByClassName('js-section');
    var secLen = section.length;

    if(secLen === 0){
        return false;
    }

    function setTyping(self,num) {

        scenes[num] = new ScrollMagic.Scene({
            triggerElement: self,
            triggerHook: 0.7, //onEnter, onLeave, onCenter
            tweenChanges: true
        })
            .setClassToggle(self, 'is-active')
            .reverse(false)
            .addTo(controller);
    }

    function typePlay() {
        for (var i = 0; i < secLen; i += 1) {
            setTyping(section[i], i);
        }
    }
    typePlay();

})();