<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="/style/home.css" />
		<script src="/js/header.js"></script>
	</head>
<body>
<table id="content">
	<tr><td>Hi, I'm Milo. Welcome to my website!<br/>Please enjoy fun stuff I've made, cool links I've found, and interesting writing I've done.<br/>Thank you, enjoy!</td></tr>
	<tr><td><img src="/images/car-still.png" /></td></tr>
</table>
<div id="counter">
	<?php
		$url = "//counter.websiteout.net/compte.php?S=".urlencode($_SERVER['HTTP_HOST'])."&C=2&D=0&N=0&M=0";
		echo "<img src=$url alt='' border='0' />";
	?>
</div>
</body>
</html>