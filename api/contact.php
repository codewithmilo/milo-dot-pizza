<?php
$form_submitted = isset($_POST['submit']);
if ($form_submitted) {
	#
	# Send the filled-out form as a message into slack.
	# Nobody will ever use this, so don't bother validating
	# or handling errors ¯\_(ツ)_/¯
	#

	require('slack.php');

	$token = getenv('SLACK_API_TOKEN');
	$slack = new Slack($token);

	$person = $_POST['name'] ? : 'Someone';
	$return = $_POST['return'] ? : null;
	$msg = $_POST['msg'] ? : null;
	if ($msg == null) return;

	$text = "*{$person}* wanted to say to you:\n> {$msg}";
	if ($return != null) {
		$text .= "\nRespond to them at: *{$return}*";
	}
	$channel_id = getenv('SLACK_CHANNEL_ID');
	$args = [
		'text' => $text,
		'channel' => $channel_id,
		'icon_emoji' => ':pizza:',
		'username' => 'Milo Dot Pizza',
	];
	$slack->call('chat.postMessage', $args);
}
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
	if ($form_submitted) {
		echo "<script src=\"/js/contact_thanks.js\"></script>";
	} else {
		echo "<script src=\"/js/contact_form.js\"></script>";
	}
	?>
	</table>
	</form>
</body>
</html>
