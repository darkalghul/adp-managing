let a = 0;

$(window).scroll(function () {
    var oTop = $('.numbers').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                    countNum: countTo
                },
                {

                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum) + '%');
                    },
                    complete: function () {
                        $this.text(this.countNum + '%');
                    }

                });
        });
        a = 1;
    }
});

// $(document).ready(function() {
//     var $calculator = $('#calculator').drawsvg();
//     var $lightbulb = $('#lightbulb').drawsvg();
//     $calculator.drawsvg('animate');
//     $lightbulb.drawsvg('animate');
// });

// var $doc = $(document),
//     $wind = $(window),
//     $calculator = $('#calculator').drawsvg(),
//     max = $doc.height() - $wind.height();

// $win.on('scroll', function() {
//     let p = $wind.scrollTop() / max;
//     $calculator.drawsvg('progress', p);
// });