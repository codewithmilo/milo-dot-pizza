<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="/style/home.css" />
		<script src="/js/header.js"></script>
	</head>
<body>
<table id="content">
	<tr><td>Hi, I'm Milo. Welcome to my website!<br/>Please enjoy it. I think it's pretty decent.<br/>But if you don't like it, that's okay too.<br/><i>Thank you for visiting! <img id="cool" src="/images/cool.png" /></i></td></tr>
	<tr><td><img id="car" src="/images/car-still.png" /></td></tr>
</table>
<div id="counter">
	<?php
$url = "//counter.websiteout.net/compte.php?S=" . urlencode($_SERVER['HTTP_HOST']) . "&C=2&D=0&N=0&M=0";
echo "<img src=$url alt='' border='0' />";
?>
</div>
</body>
</html>