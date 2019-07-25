let scroll = window.requestAnimationFrame ||
             function(callback) {
                 window.setTimeout(callback, 100/60)
             };
let numbers = $('.numbers'),
              numbersQuantity = numbers.length,
              counter = [];

function moveOnScroll(dataCount, quantity, arrayCount) {
    for (i = 0; i < quantity; i++) {
        arrayCount[i] = parseInt(dataCount[i].innerHTML);
    }
    let count = function(start, value, id) {
        let localStart = start;

        setInterval(function() {
            if (localStart < value) {
                localStart++;
                dataCount[id].innerHTML = localStart + ' %';
            }
        }, 40);
    }

    for (j = 0; j < quantity; j++) {
        count(0, arrayCount[j], j);
    }
}

$(window).scroll(function() {
    onScroll('.numbers', '.counter');
    onScroll('.counter-check', '.up');
});

function scrollCounter() {
    if (isElementInViewPort(numbers)) {
        moveOnScroll(numbers, numbersQuantity, counter);
    }
    scroll(scrollCounter);
}

function isElementInViewPort(el) {
    var rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0 && rect.bottom >= 0) ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
        (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}


function onScroll(counterContainer, counter) {
    // let a = 0;
    var oTop = $(counterContainer).offset().top - window.innerHeight;
    if ($(window).scrollTop() > oTop) {
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
        // a = 1;
    }
}

new Vivus('lightbulb');
new Vivus('calculator');
new Vivus('bill');
new Vivus('gear');
new Vivus('checklist');
new Vivus('clock');