/* Milestone Number Shortcode */
/* -------------------------------------------------------------------- */
mk_milestone();
function mk_milestone() {
  console.log("running milestone script");
  "use strict";
  $('.mk-milestone').each(function () {
    var $this = $(this),
      stop_number = $this.find('.milestone-number').attr('data-stop'),
      animation_speed = parseInt($this.find('.milestone-number').attr('data-speed'));
    var build = function() {
      if (!$this.hasClass('scroll-animated')) {
        $this.addClass('scroll-animated');
        $({
          countNum: $this.find('.milestone-number').text()
        }).animate({
          countNum: stop_number
        }, {
          duration: animation_speed,
          easing: 'linear',
          step: function () {
            $this.find('.milestone-number').text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.find('.milestone-number').text(this.countNum);
          }
        });
      }
    };

  });

}
