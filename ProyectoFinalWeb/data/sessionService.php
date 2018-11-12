<?php
	header('Content-type: application/json');

	session_start();

	if (isset($_SESSION["firstName"])&&
		isset($_SESSION["lastName"]) &&
		isset($_SESSION["userName"]))
	{

		$response = array("fName" => $_SESSION["firstName"], "lName" => $_SESSION["lastName"], "uName" => $_SESSION["userName"]);

		echo json_encode($response);

	}
	else
	{
		session_destroy();
		header("HTTP/1.1 406 Session not set yet");
		die("Your session has expired.");
	}
?>
