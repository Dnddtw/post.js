$(document).ready(function() {

    // Фіксований sidebar. Argument: Class_Name (string). Default: 'sticky'
    postFixedSidebar(/*'sticky'*/);

});

function postFixedSidebar(className) {
    /*
        styles for parent block:

        .sticky-wrapper {
            width: inherit;
            left: auto;
            right: auto;
            transition: all 0.2s linear;
        }

        .sticky-wrapper.fixed {
            position: fixed;
            top: 0;
        }
    */

    var className = className || 'sticky';
    var $sticky = $('.' + className).wrap('<div class="' + className +'-wrapper"></div>').parent();
    var stickyTop = $sticky[0].getBoundingClientRect().top + pageYOffset;
    var outerWidth = $sticky.outerWidth();

    $(window).scroll(fixedScrolling);

    function isScreen(element) {
        var winTop = $(window).scrollTop();

        // console.log(element);
        // console.log('stickyTop, winTop: ' + stickyTop + ' <= ' + winTop);
        // console.log('winTop + winHeight, stickyBox: ' + winTop + ' + ' + winHeight + ' <= ' + stickyBox);
        // console.log((winTop + winHeight) + ' <= ' + stickyBox);
        // console.log((stickyTop <= winTop && winTop + winHeight <= stickyBox));

        return (stickyTop <= winTop);
    }

    function fixedScrolling() {
        var scroll = $(window).scrollTop();
        if (isScreen()) $sticky.addClass('fixed').css({ maxWidth: outerWidth });
        else $sticky.removeClass('fixed');
    }
}