# My Personal Website

### Inspiration and tools:

- [Cameron's World](https://www.cameronsworld.net/)
- [Word Art Generator](https://makewordart.com/)
- [Color palette](https://www.pinterest.it/pin/357121445439016927/)


### Annoyances
I find that in most projects, some things take longer than they should, because of some trickiness, or thing I didn't know about, or whatever. Figured it might be useful for future me's if I noted them as I went!

**Failure to run a local PHP server with Heroku**

For reasons described [here](https://stackoverflow.com/questions/36362484/heroku-php-getting-started-doesn-t-run-locally-on-osx/36449401#36449401), running PHP applications locally with `heroku local` doesn't work out-the-box. You can just run a local PHP server: `php -S localhost:8080`, but if your application uses `.htaccess` that won't support it. With help from the Stack Overflow explanation above, I figured a workaround (for MacOSX):

1. Make sure apache2 is installed: `brew install apache2`
2. Find the configuration file, for me it was `/usr/local/etc/httpd/httpd.conf`
3. Uncomment a few lines: `proxy_module`, `proxy_fcgi_module` and `rewrite_module`; comment the `Listen` directive
4. Run `heroku local` again: works!

The one catch is that killing the process won't actually close the connection, you may see `ERROR: An another FPM instance seems to already listen on /tmp/heroku.fcgi.5000.sock`. Running `killall php-fpm` clears it up. I just set up an alias to make it easier: `alias php-local='killall php-fpm && heroku local`. Yippeee!!

**Templates without templates**

In the desire to build this website without any frameworks or libraries, I dated myself and realized I didn't even know how to (google search) "include an html file in another html file." The answer is that you put it in a javascript file and `document.write()` the whole string of HTML. Because there are minor escaping caveats one must follow for this approach, and because writing HTML in a responsive text editor is very nice, I used someone's trick with the included `escapeHTML.sh` to just write an HTML file to a javascript file that does everything I want. Thanks, Martin Wermers!!
