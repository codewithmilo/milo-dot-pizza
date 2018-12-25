window.onload = (function(){
    var count = 1;
    var firstColor = '0 0 10px #E9EDEF , 0 0 20px #E9EDEF , 0 0 30px #E9EDEF , 0 0 40px #FB3164 , 0 0 70px #E1008A , 0 0 80px #E1008A , 0 0 100px #FB3164';
    var secondColor = '0 0 10px #E9EDEF , 0 0 20px #E9EDEF , 0 0 30px #E9EDEF , 0 0 40px #31A7D7 , 0 0 70px #31A7D7 , 0 0 80px #31A7D7 , 0 0 100px #31A7D7';
    $tds = document.querySelectorAll('#title > td');

    setInterval(function(){
        $tds.forEach($td => {
            var colorToUse = (count % 2 == 0) ? secondColor : firstColor;
            $td.style.textShadow = colorToUse;
        });
        count++;
    }, 3500);
});
