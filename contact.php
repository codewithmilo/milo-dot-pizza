<?php
	$form_submitted = isset($_POST['submit']);
	if ($form_submitted) send_to_slack();
?>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<script src="/js/header.js"></script>
		<script src="/js/contact.js"></script>
		<link rel="stylesheet" type="text/css" href="/style/contact.css" />
		
	</head>
<body>
	<form action="contact" method="POST">
	<table id="content">
		<tr id="switch"><td id="find-me">Find me at: </td><td class="icon"><img src="/images/tweet.png" /></td><td class="name"><div>tweets</div></td><td>withmilo</td></tr>
		<?php
			if ($form_submitted){
				echo "<script src=\"/js/contact_thanks.js\"></script>";
			}else{
				echo "<script src=\"/js/contact_form.js\"></script>";
			}
		?>
	</table>
	</form>
</body>
</html>

<?php
	function send_to_slack() {
		return;
	}
?>