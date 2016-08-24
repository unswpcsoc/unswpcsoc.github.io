/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Cycles2 slideshow progress bar
//var progress = $('#progress'),
//    slideshow = $( '.cycle-slideshow' );
//
//slideshow.on( 'cycle-initialized cycle-before', function( e, opts ) {
//    progress.stop(true).css( 'width', 0 );
//});
//
//slideshow.on( 'cycle-initialized cycle-after', function( e, opts ) {
//    if ( ! slideshow.is('.cycle-paused') )
//        progress.animate({ width: '100%' }, opts.timeout, 'linear' );
//});
//
//slideshow.on( 'cycle-paused', function( e, opts ) {
//   progress.stop(); 
//});
//
//slideshow.on( 'cycle-resumed', function( e, opts, timeoutRemaining ) {
//    progress.animate({ width: '100%' }, timeoutRemaining, 'linear' );
//});
