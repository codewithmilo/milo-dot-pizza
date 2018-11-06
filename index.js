
function flashHeader() {
     /*
      * set a timer for each image,
      * but flip them all off if we got through them all.
      * Should be 1. Welcome to the 2. Internet 3. with Milo
      */

    window.setTimeout('toggleImages()', 500);
    window.setInterval('toggleImages()', 4000);
}

function toggleImages(blink_time, pointer) {
    var welcome = document.getElementById('welcome');
    var internet = document.getElementById('internet');
    var milo = document.getElementById('milo');
    var imgs = [welcome, internet, milo];

    showImage(welcome);
    window.setTimeout(function(){
        showImage(internet);
    }, 1000);
    window.setTimeout(function(){
        showImage(milo);
    }, 2000);
    window.setTimeout(function(){
        hideImages(imgs);
    }, 3000);
}

// Take an array here since we hide all three at once
function hideImages(imgs) {
    imgs.forEach(function(img){
        img.style.visibility = 'hidden'; 
    });
}
function showImage(img) {
    img.style.visibility = 'visible';
}

flashHeader();