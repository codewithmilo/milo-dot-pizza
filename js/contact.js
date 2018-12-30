window.addEventListener('load', function(){
    var count = 1;
    setInterval(function(){
        var pairs = [
            ['/images/tweet.png', 'tweets'],
            ['/images/insta.png', 'pics'],
            ['/images/github.png', 'code'],
            ['/images/gmail.png', 'email'],
        ];
        var $tr = document.getElementById('switch');
        var $img = $tr.childNodes[1].childNodes[0];
        var $txt = $tr.childNodes[2].childNodes[0];
        var current = pairs[count % pairs.length];

        $img.src = current[0];
        $txt.textContent = current[1];
        
        count++;
    }, 4000);
});