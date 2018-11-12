<?php

	header('Content-type: application/json');
	header('Accept: application/json');

	require_once __DIR__ . '/dataLayer.php';

	$requestMethod = $_SERVER['REQUEST_METHOD'];

//Getting the request method from AJAX
	switch ($requestMethod)
	{
		case "GET" : $action = $_GET["action"];
					getRequests($action);
					break;
		case "POST" : $action = $_POST["action"];
			 		postRequests($action);
			 		break;
	}


//GET Request functions
	function getRequests($action)
	{
		switch($action)
		{
			case "LOGIN": requestLogin();
							break;
			case "HOMEPAGE": requestHomepage();
						  break;
			case "MODELS": requestModels();
							break;
			case "CALCULATOR": requestCalculator();
							break;
			case "CONTACT": requestContactInfo();
							break;
			case "PROFILE": requestProfile();
							break;
			case "MYPRICING": requestPricing();
							break;
		}
	}

//POST Request functions
	function postRequests($action)
	{
		switch($action)
		{
			case "REGISTRATION": requestRegistration();
						  break;
		}
	}







	function requestLogin()
	{
		$uName = $_GET["username"];
		$uPassword = $_GET["password"];

		$response = attemptLogin($uName, $uPassword);

		if ($response["status"] == "SUCCESS")
		{
			echo json_encode($response["response"]);
		}
		else
		{
			errorHandler($response["status"], $response["code"]);
		}
	}






	function requestRegistration()
	{
		$userName = $_POST['username'];
		$userFirstName = $_POST['userFirstName'];
		$userLastName = $_POST['userLastName'];
		$userEmail = $_POST['userEmail'];
		$userPassword = $_POST['userPassword'];
		$userGender = $_POST['userGender'];
		$userCountry = $_POST['userCountry'];

		$response = attemptRegistration($userName, $userFirstName, $userLastName, $userEmail, $userPassword, $userGender, $userCountry);

		if ($response["status"] == "SUCCESS")
		{
			echo json_encode($response["response"]);
		}
		else
		{
			errorHandler($response["status"], $response["code"]);
		}
	}






	function requestHomepage()
	{
		$uName = $_COOKIE["username"]; //GET COOKIE FROM BROWSER TO DISPLAY USERS COMMENTS
		$response = attemptHomepage($uName);

		if ($response["status"] == "SUCCESS")
		{
			echo json_encode($response["response"]);
		}
		else
		{
			errorHandler($response["status"], $response["code"]);
		}
	}





	function requestModels()
	{
		$uName = $_COOKIE["username"]; //GET COOKIE FROM BROWSER TO DISPLAY USERS COMMENTS
		$response = attemptModels($uName);

		if ($response["status"] == "SUCCESS")
		{
			echo json_encode($response["response"]);
		}
		else
		{
			errorHandler($response["status"], $response["code"]);
		}
	}





	function requestCalculator()
	{
		$uName = $_COOKIE["username"]; //GET COOKIE FROM BROWSER TO DISPLAY USERS COMMENTS
		$model = $_GET["model"];
		$base_price = $_GET["base_price"];
		$final_price = $_GET["final_price"];
		$initial_payment = $_GET["initial_payment"];
		$monthly_payment = $_GET["monthly_payment"];
		$taxes = $_GET["taxes"];
		$response = attemptCalculator($uName, $model, $base_price, $final_price, $initial_payment, $monthly_payment, $taxes);

		if ($response["status"] == "SUCCESS")
		{
			echo json_encode($response["response"]);
		}
		else
		{
			errorHandler($response["status"], $response["code"]);
		}
	}





	function requestProfile()
	{
		$uName = $_COOKIE["username"]; //GET COOKIE FROM BROWSER TO DISPLAY USER INFO IN PROFILE SECTION

		$response = attemptProfile($uName);

		if ($response["status"] == "SUCCESS")
		{
			echo json_encode($response["response"]);
		}
		else
		{
			errorHandler($response["status"], $response["code"]);
		}
	}






	function requestPricing()
	{
		$uName = $_COOKIE["username"]; //GET COOKIE FROM BROWSER TO DISPLAY USER INFO IN PROFILE SECTION

		$response = attemptPricing($uName);

		if ($response["status"] == "SUCCESS")
		{
			echo json_encode($response["response"]);
		}
		else
		{
			errorHandler($response["status"], $response["code"]);
		}
	}







	function requestContactInfo()
	{
		$uName = $_COOKIE["username"]; //GET COOKIE FROM BROWSER TO DISPLAY USER INFO IN PROFILE SECTION

		$response = attemptContactInfo($uName);

		if ($response["status"] == "SUCCESS")
		{
			echo json_encode($response["response"]);
		}
		else
		{
			errorHandler($response["status"], $response["code"]);
		}
	}




//Error handler for the application layer
	function errorHandler($status, $code)
	{
		switch ($code)
		{
			case 406:	header("HTTP/1.1 $code User $status");
						die("Wrong credentials provided");
						break;
		  case 409:	header("HTTP/1.1 $code User $status already in use please select another one");
						die("Username already in use.");
						break;
			case 500:	header("HTTP/1.1 $code $status. Bad connection, portal is down");
						die("The server is down, we couldn't retrieve data from the data base");
						break;
		}
	}


?>
