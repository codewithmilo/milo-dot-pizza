window.onload = (function(){
    /*
     * First thing: set the menu item of the currently
     * selected location to display itself
     */
    var nameid = window.location.pathname.replace('/', '');
    var $selected = document.getElementById(nameid);
    if (nameid != 'home'){
        $selected.style.color = '#FF00FF';
        $selected.style.textDecoration = '#FF00FF underline wavy';
    }

    /*
     * Here we set up an interval to flip the title
     * colors every 3.5 seconds. Nice!
     */
    var count = 0;
    var firstColor = '0 0 10px #E9EDEF , 0 0 20px #E9EDEF , 0 0 30px #E9EDEF , 0 0 40px #FB3164 , 0 0 70px #E1008A , 0 0 80px #E1008A , 0 0 100px #FB3164';
    var secondColor = '0 0 10px #E9EDEF , 0 0 20px #E9EDEF , 0 0 30px #E9EDEF , 0 0 40px #31A7D7 , 0 0 70px #31A7D7 , 0 0 80px #31A7D7 , 0 0 100px #31A7D7';
    var $tds = document.querySelectorAll('#title > td');

    setInterval(function(){
        $tds.forEach($td => {
            var colorToUse = (count % 2 == 0) ? secondColor : firstColor;
            $td.style.textShadow = colorToUse;
        });
        count++;
    }, 3500);

    /*
     * Handle the animations with the navbar when interacted with.
     * it assumes the nav looks like:
     * <td>
     *   <img/>
     * </td>
     * <td>
     *   <a><b></b></a>
     * </td>
     * So by listening to hover on the a element, we need to
     * get up to parent td, then the previous, then its child
     */
    var $items = document.querySelectorAll('.menu-item > a');
    var hide_on_mouseout = true;
    $items.forEach($item => {
        // These events are for displaying the lil ship on hover
        $item.addEventListener('mouseover', function(e){
            var $img = e.target.closest('td').previousElementSibling.childNodes[0];
            $img.style.visibility = 'visible';
        });
        $item.addEventListener('mouseout', function(e){
            var $img = e.target.closest('td').previousElementSibling.childNodes[0];
            if (hide_on_mouseout) $img.style.visibility = 'hidden';
        });

        // Here we let the animation go when clicked and redirect when it finishes
        $item.onclick = function(e){
            e.preventDefault();
            hide_on_mouseout = false;
            var $a = e.target.closest('a');
            var url = $a.href;
            var $img = e.target.closest('td').previousElementSibling.childNodes[0];
            $img.src = '/images/lifeforce-ship.gif';

            setTimeout(function(){
                /*
                 * We want to get the ship to shoot the text, have it turn blue,
                 * and then redirect!
                 *
                 * `exiftool -Duration lifeforce-ship.gif` => 1.75s
                 * `identify lifeforce-ship.gif` => .032s/frame
                 * since the laser beam is gone from frames 24-42, have 0.576s to show the blue link
                 */
                $a = e.target.closest('a');
                $a.style.backgroundImage = "url('/images/explosion.gif')";
                $a.style.backgroundSize = 'auto 100%';
                $a.style.backgroundPosition = 'center center';
                $a.style.backgroundRepeat = 'no-repeat';
                $a.childNodes[0].style.visibility = 'hidden';

                setTimeout(function(){
                    window.location.href = url;
                }, 450);
            }, 1000);
        }
    });

    // Also handle a similar animation when the home item is clicked
    var $home = document.getElementById('home');
    $home.onclick = function(e){
        e.preventDefault();
        var $td = e.target.closest('td');
        console.log($td);
        $td.style.backgroundImage = "url('/images/fireball.gif')";
        $td.style.backgroundSize = 'auto 100%';
        $td.style.backgroundPosition = 'left center';
        $td.style.backgroundRepeat = 'no-repeat';
        $td.childNodes[0].style.visibility = 'hidden';

        setTimeout(function(){
            window.location.href = '/home';
        }, 1190);
    };
});
