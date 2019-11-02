/* Animate ON SCROLL */
$(function() {
  AOS.init({
    offset: 200,
    duration: 800,
    easing: 'ease-in-quad',
    delay: 100,
    disable: function () {
      var maxWidth = 800;
      return window.innerWidth < maxWidth;
    }
  });
});

$(window).on('load', function() {
  AOS.refresh();
});