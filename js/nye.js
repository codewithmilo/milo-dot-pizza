window.onload = (function () {
    function time() {
        var $clock = document.getElementById('clock');
        var d = new Date();
        var h = d.getHours();
        if (h > 12) h -= 12;
        var m = d.getMinutes();
        var s = d.getSeconds();

        // midnight!!!
        console.log(h, m, s);
        if (h == 0 && m == 0 && s == 0) {
            showFireworks();
            $clock.style.fontSize = '80pt';
            $clock.textContent = "HAPPY NEW YEAR!!"
            window.clearInterval(clockId);
            return;
        }

        if (h < 10) h = "0" + h;
        if (m < 10) m = "0" + m;
        if (s < 10) s = "0" + s;
        $clock.textContent = h + ":" + m + ":" + s;
    }

    var clockId = window.setInterval(time, 1000);


    function showFireworks() {
        var $f1 = document.getElementById('f1');
        var $f2 = document.getElementById('f2');
        var $f3 = document.getElementById('f3');

        $f1.style.visibility = 'visible';
        window.setTimeout(function () {
            $f2.style.visibility = 'visible';
        }, 500);
        window.setTimeout(function () {
            $f3.style.visibility = 'visible';
        }, 1000);
    }
});