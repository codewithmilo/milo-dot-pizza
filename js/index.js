window.onload = (function() {
    /*
     * with these values:
     * _500ms_
     * Welcome to the
     * _1s_
     * Internet
     * _1s_
     * with Milo
     * _1s_
     * Enter
     * _2s_
     * clear screen.
     * Then, repeat except Enter is always shown!
     */
    const start_ms = 500;
    const interval_ms = 1000;
    const full_view_wait_ms = 2000;
    const full_loop_ms = 6000;

    /*
     * for images, we call each of these once per section of the
     * header, and then kick off an interval to keep it running
     */
    function hideImages(imgs) {
        imgs.forEach(function($img){
            $img.style.visibility = 'hidden';
        });
        window.setInterval(function(){
            hideImages(imgs);
        }, full_loop_ms);
    }
    function showImage($img) {
        $img.style.visibility = 'visible';
        window.setInterval(function(){
            showImage($img);
        }, full_loop_ms);
    }
    /* this one we never hide, so no interval to keep it displaying */
    function showEnter(){
        document.getElementById('enter').style.display = 'inline-block';
    }
    function showFireworks(){
        var $f1 = document.getElementById('f1');
        var $f2 = document.getElementById('f2');
        var $f3 = document.getElementById('f3');

        $f1.style.visibility = 'visible';
        window.setTimeout(function(){
            $f2.style.visibility = 'visible';
        }, interval_ms);
        window.setTimeout(function(){
            $f3.style.visibility = 'visible';
        }, interval_ms*2);
    }

    var $welcome = document.getElementById('welcome');
    var $internet = document.getElementById('internet');
    var $milo = document.getElementById('milo');
    var imgs = [$welcome, $internet, $milo];
    var time = start_ms;

    window.setTimeout(function(){
        showImage($welcome);
    }, time);
    time += interval_ms;
    window.setTimeout(function(){
        showImage($internet);
    }, time);
    time += interval_ms;
    window.setTimeout(function(){
        showImage($milo);
    }, time);

    window.setTimeout(function(){
        showFireworks();
    }, time+(interval_ms/2));

    time += interval_ms;
    window.setTimeout(showEnter, time);

    time += full_view_wait_ms;
    window.setTimeout(function(){
        hideImages(imgs);
    }, time);

});