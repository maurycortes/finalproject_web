<?php

//Initializing the db connection
	function connect()
	{
		$servername = "localhost";
		$username = "root";
		$password = "";
		$dbname = "finalproject";

		$connection = new mysqli($servername, $username, $password, $dbname);

		if ($connection->connect_error)
		{
			return null;
		}
		else
		{
			return $connection;
		}
	}





	function attemptLogin($uName, $uPassword)
	{
		$conn = connect();

		if ($conn != null)
		{
			$sql = "SELECT fName, lName
					FROM Users
					WHERE username='$uName' AND password='$uPassword'";

			$result = $conn->query($sql);

			if ($result -> num_rows > 0)
			{
				session_start();

				//if ($rememberMe == "ON") {
				setcookie("username", $uName, time() + 3600*24*10, "/", "", 0);
				//}

				while ($row = $result->fetch_assoc())
				{
					$_SESSION["firstName"] = $row["fName"];
					$_SESSION["lastName"] = $row["lName"];
					$_SESSION["userName"] = $uName;
					$response = array("firstName" => $row["fName"], "lastname" => $row["lName"]);
				}

				$conn -> close();
				return array("status"=>"SUCCESS", "response" => $response);
			}
			else
			{
				$conn -> close();
				return array("status" => "NOT_FOUND", "code"=>406);
			}
		}
		else
		{
			return array("status" => "INTERNAL_SERVER_ERROR", "code"=>500);

		}
	}






	function attemptRegistration($userName, $userFirstName, $userLastName, $userEmail, $userPassword, $userGender, $userCountry)
	{
			$conn = connect();

			if ($conn != null)
			{
				$sql = "SELECT username
								FROM Users
								WHERE username = '$userName'";

				$result = $conn->query($sql);

				if ($result -> num_rows > 0)
				{
						$conn -> close();
						return array("status" => "ALREADY_EXISTS", "code"=>409);
				}
				else
				{
						session_start();
						setcookie("username", $userName, time() + 3600*24*10, "/", "", 0);

						$sql = "INSERT INTO Users (fName, lName, email, username, password, gender, country)
										VALUES ('$userFirstName', '$userLastName', '$userEmail', '$userName', '$userPassword', '$userGender', '$userCountry')";

						if (mysqli_query($conn, $sql))
						{
								$_SESSION["firstName"] = $userFirstName;
								$_SESSION["lastName"] = $userLastName;
								$_SESSION["userName"] = $userName;
								$response = array("status" => "success");
								$conn -> close();
								return array("status"=>"SUCCESS", "response" => $response);
						}
						else
						{
								$conn -> close();
								return array("status" => "INTERNAL_SERVER_ERROR", "code"=>500);
						}
				}
		}
		else
		{
				return array("status" => "INTERNAL_SERVER_ERROR", "code"=>500);
		}
	}







	function attemptHomepage($uName)
	{
		$conn = connect();

		if ($conn != null)
		{
			$sql = "SELECT commentText
						FROM Comments
						WHERE username='$uName'";
			$result = $conn->query($sql);

			if ($result -> num_rows > 0)
			{
				$response = array();
				while ($row = $result->fetch_assoc())
				{
					array_push($response, array("commentText" => $row["commentText"]));
				}
				$conn -> close();
				return array("status"=>"SUCCESS", "response" => $response);
			}
			else
			{
				$conn -> close();
				return array("status" => "NOT_FOUND", "code"=>406);
			}
		}
		else
		{
			return array("status" => "INTERNAL_SERVER_ERROR", "code"=>500);

		}
	}






	function attemptModels($uName)
	{
		$conn = connect();

		if ($conn != null)
		{
			$sql = "SELECT commentText
						FROM Comments
						WHERE username='$uName'";
			$result = $conn->query($sql);

			if ($result -> num_rows > 0)
			{
				$response = array();
				while ($row = $result->fetch_assoc())
				{
					array_push($response, array("commentText" => $row["commentText"]));
				}
				$conn -> close();
				return array("status"=>"SUCCESS", "response" => $response);
			}
			else
			{
				$conn -> close();
				return array("status" => "NOT_FOUND", "code"=>406);
			}
		}
		else
		{
			return array("status" => "INTERNAL_SERVER_ERROR", "code"=>500);

		}
	}







	function attemptCalculator($uName, $model, $base_price, $final_price, $initial_payment, $monthly_payment, $taxes)
	{
		$conn = connect();

		if ($conn != null)
		{
			$sql = "SELECT username FROM Pricing WHERE username = '$uName';";
			$result = $conn->query($sql);

			if ($result -> num_rows > 0)
			{
				 $sql2 = "DELETE FROM Pricing WHERE username = '$uName';";
				 $result2 = $conn->query($sql2);
				 $sql3 = "INSERT INTO Pricing(username, model, base_price, final_price, initial_payment, monthly_payment, taxes) VALUES ('$uName', '$model', '$base_price', '$final_price', '$initial_payment', '$monthly_payment', '$taxes');";
				 $result3 = $conn->query($sql3);
					$conn -> close();
					return array("status"=>"SUCCESS", "response" => $response);
			}
			else
			{
				$sql3 = "INSERT INTO Pricing(username, model, base_price, final_price, initial_payment, monthly_payment, taxes) VALUES ('$uName', '$model', '$base_price', '$final_price', '$initial_payment', '$monthly_payment', '$taxes');";
				$result3 = $conn->query($sql3);
				$conn -> close();
				return array("status" => "NOT_FOUND", "code"=>406);
			}
		}
		else
		{
			return array("status" => "INTERNAL_SERVER_ERROR", "code"=>500);

		}
	}








	function attemptProfile($uName)
	{
		$conn = connect();

		if ($conn != null)
		{
			$sql = "SELECT *
						FROM Users
						WHERE username='$uName'";

				$result = $conn->query($sql);

			if ($result -> num_rows > 0)
			{
				$response = array();
				while ($row = $result->fetch_assoc())
				{
					array_push($response, array("fName" => $row["fName"], "lName" => $row["lName"], "email" => $row["email"], "username" => $row["username"], "gender" => $row["gender"], "country" => $row["country"]));
				}

				$conn -> close();
				return array("status"=>"SUCCESS", "response" => $response);
			}
			else
			{
				$conn -> close();
				return array("status" => "NOT_FOUND", "code"=>406);
			}
		}
		else
		{
			return array("status" => "INTERNAL_SERVER_ERROR", "code"=>500);

		}
	}









	function attemptPricing($uName)
	{
		$conn = connect();

		if ($conn != null)
		{
				$sql = "SELECT * FROM Pricing WHERE username='$uName';";
				$result = $conn->query($sql);

			if ($result -> num_rows > 0)
			{
				$response = array();
				while ($row = $result->fetch_assoc())
				{
					array_push($response, array("model" => $row["model"], "base_price" => $row["base_price"], "final_price" => $row["final_price"], "initial_payment" => $row["initial_payment"], "monthly_payment" => $row["monthly_payment"], "taxes" => $row["taxes"]));
				}
				$conn -> close();
				return array("status"=>"SUCCESS", "response" => $response);
			}
			else
			{
				$conn -> close();
				return array("status" => "NOT_FOUND", "code"=>406);
			}
		}
		else
		{
			return array("status" => "INTERNAL_SERVER_ERROR", "code"=>500);

		}
	}










	function attemptContactInfo($uName)
	{
		$conn = connect();

		if ($conn != null)
		{
			$sql = "SELECT * FROM contact WHERE country IN (SELECT country FROM users WHERE username = '$uName');";

				$result = $conn->query($sql);

			if ($result -> num_rows > 0)
			{
				$response = array();
				while ($row = $result->fetch_assoc())
				{
					array_push($response, array("country" => $row["country"], "email" => $row["email"], "phone" => $row["phone"], "address" => $row["address"]));
				}

				$conn -> close();
				return array("status"=>"SUCCESS", "response" => $response);
			}
			else
			{
				$conn -> close();
				return array("status" => "NOT_FOUND", "code"=>406);
			}
		}
		else
		{
			return array("status" => "INTERNAL_SERVER_ERROR", "code"=>500);

		}
	}




?>
