<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<script src="/js/header.js"></script>
		<style>
			#me {
				border-radius: 50%;
				width: 300px;
			}
			#top {
				padding-left: 13%;
			}
		</style>
	</head>
<body>
	<table id="content">
		<tr><td><img id="me" src="/images/me.png" /></td></tr>
		<tr><td id="top">👆 That's me!</td></tr>
		<tr><td>I like trees, big cats, and the Sun! I also like building things on the internet.<br/>
				I don't like the tech industry or social media, but I hate Hulu most of all.
				<br/>This website is proudly jQuery & framework free, non-responsive and "Not Secure"<br/><br/>
				I am currently on the  
				<?php
			$text = "POSITIVITY TOUR";
			$colors = ["#ff217c", "#0cffe1", "#ffd486", "#fe5e78", "#25b6c3"];
					# rainbow text, yay!!!
			for ($i = 0; $i < strlen($text); $i++) {
				$letter = $text[$i];
				$color = $colors[$i % count($colors)];
				echo "<span style=\"color:{$color}\">{$letter}</span>";
			}
			?> and encourage you to join!<br/>
		</td></tr>
	</table>
</body>
</html>