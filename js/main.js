let payrollCounter = 0,
    toolsetCounter = 0,
    businessCounter = 0;

$(window).scroll(function() {
    onScroll('.numbers', '.counter');
    onScroll('.count-container', '.countUp');
    onScroll('.counter-check', '.up');
});

function onScroll(counterContainer, counter) {
    let counterReset;

    if (counterContainer === '.numbers') {
        counterReset = payrollCounter;
    } else if (counterContainer === '.count-container') {
        counterReset = toolsetCounter;
    } else if (counterContainer === '.counter-check') {
        counterReset = businessCounter;
    }

    var oTop = $(counterContainer).offset().top - window.innerHeight;
    if (counterReset == 0 && $(window).scrollTop() > oTop) {
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
        if (counterContainer === '.numbers') {
            payrollCounter = 1;
        } else if (counterContainer === '.count-container') {
            toolsetCounter = 1;
        } else if (counterContainer === '.counter-check') {
            businessCounter = 1;
        }
    }
}
let lightbulb = new Vivus('lightbulb', {
    type: 'oneByOne',
    duration: 100,
    animTimingFunction: Vivus.EASE
});

let calculator = new Vivus('calculator', {
    type: 'sync',
    duration: 100,
    animTimingFunction: Vivus.EASE
});

let bill = new Vivus('bill', {
    type: 'scenario',
    duration: 100,
    animTimingFunction: Vivus.EASE
});

let gear = new Vivus('gear', {
    type: 'oneByOne',
    duration: 100,
    animTimingFunction: Vivus.EASE
});

let checklist = new Vivus('checklist', {
    type: 'scenario',
    duration: 100,
    animTimingFunction: Vivus.EASE
});

let clock = new Vivus('clock', {
    type: 'sync',
    duration: 100,
    animTimingFunction: Vivus.EASE
});