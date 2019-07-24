$(document).ready(function() {
    var counters = $(".counter");
    var countersQuantity = counters.length;
    var counter = [];
  
    for (i = 0; i < countersQuantity; i++) {
        counter[i] = parseInt(counters[i].innerHTML);
    }
  
    var count = function(start, value, id) {
        var localStart = start;
        setInterval(function() {
            if (localStart < value) {
                localStart++;
                counters[id].innerHTML = localStart + "%";
            }
        }, 100);
    }
  
    for (j = 0; j < countersQuantity; j++) {
        count(0, counter[j], j);
    }

    // $svg = $('svg').drawsvg({
    //     callback: function() {
    //         animate();
    //     }
    // });

    // function animate() {
    //     $svg.drawsvg('animate');  
    // }

    // animate();

    var $calculator = $('#calculator').drawsvg();
    var $lightbulb = $('#lightbulb').drawsvg();
    $calculator.drawsvg('animate');
    $lightbulb.drawsvg('animate');
});

// var $doc = $(document),
//     $wind = $(window),
//     $calculator = $('#calculator').drawsvg(),
//     max = $doc.height() - $wind.height();

// $win.on('scroll', function() {
//     let p = $wind.scrollTop() / max;
//     $calculator.drawsvg('progress', p);
// });