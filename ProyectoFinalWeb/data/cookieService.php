<?php
	header('Content-type: application/json');

	if ( isset($_COOKIE["username"]) ){
		$response = array("username" => $_COOKIE["username"]);
		echo json_encode($response);
	}
	else{
		header("HTTP/1.1 406 Cookie not set yet");
		die("No cookies saved on this site");
	}

?>
