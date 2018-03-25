
$("#slideshowTank > div:gt(0)").hide();

setInterval(function() {
  $('#slideshowTank > div:first')
    .fadeOut(500)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshowTank');
}, 3000);

