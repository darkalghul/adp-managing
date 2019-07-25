let a = 0;

$(window).scroll(function() {
    onScroll('.counter-check', '.up');
});

function onScroll(counterContainer, counter) {
    var oTop = $(counterContainer).offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $(counter).each(function () {
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
                        $this.text(Math.floor(this.countNum) + ' %');
                    },
                    complete: function () {
                        $this.text(this.countNum + ' %');
                    }

                });
        });
        a = 1;
    }
}

new Vivus('lightbulb');
new Vivus('calculator');
new Vivus('bill');
new Vivus('gear');
new Vivus('checklist');
new Vivus('clock');