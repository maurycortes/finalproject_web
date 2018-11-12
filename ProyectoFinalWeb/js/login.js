$(document).ready(function() {

	function validateErrorMessageInputText($input, $input_msgId, $validate_input) {
		if ($input.val() == "") {
			$input.css("borderColor", "red");
			$input.css("borderBottomWidth", "1px");
			$input.css("borderLeftWidth", "1px");
			$input.css("borderRightWidth", "1px");
			$input.css("borderTopWidth", "1px");
			$input_msgId.css("visibility", "visible");
			$validate_input.css("visibility", "hidden");
			return true;
		}
		else if ($input.val() != "lab3") {
			$input.css("borderColor", "#FF751A");
			$input.css("borderBottomWidth", "1px");
			$input.css("borderLeftWidth", "1px");
			$input.css("borderRightWidth", "1px");
			$input.css("borderTopWidth", "1px");
			$validate_input.css("visibility", "visible");
			$input_msgId.css("visibility", "hidden");
			return true;
		}
		else if ($input.val() == "lab3") {
			$input.css("borderColor", "#00ff00");
			$input.css("borderBottomWidth", "1px");
			$input.css("borderLeftWidth", "1px");
			$input.css("borderRightWidth", "1px");
			$input.css("borderTopWidth", "1px");
			$validate_input.css("visibility", "hidden");
			$input_msgId.css("visibility", "hidden");
			return false;
		}
		else {
			$input.css("borderColor", "");
			$input_msgId.css("visibility", "hidden");
			$validate_input.css("visibility", "hidden");
			return false;
		}
	};

	$("#login_button").on( "click", function(event) {
		var requirements1 = false, requirements2 = false;

		var $username_input = $('#login_username');
		var $username_input_msgId = $('#username_err_msg');
		var $validate_username_input_msgId = $('#wrong_user_err_msg');
		requirements1 = validateErrorMessageInputText($username_input, $username_input_msgId, $validate_username_input_msgId);

		var $password_input = $('#login_password');
		var $password_input_msgId = $('#password_err_msg');
		var $validate_password_input_msgId = $('#wrong_password_err_msg');
		requirements2 = validateErrorMessageInputText($password_input, $password_input_msgId, $validate_password_input_msgId);

		event.preventDefault();
		let jsonToSend ={
							"username" : $("#login_username").val(),
							"password" : $("#login_password").val(),
							"action" : "LOGIN"
						};
		$.ajax({
			url : "./data/applicationLayer.php",
			type : "GET",
			data : jsonToSend,
			ContentType : "application/json",
			dataType : "json",
			success : function(data){
				console.log(data);
				$(location).attr("href", "./homepage.html");
			},
			error : function(error){
				console.log(error);
			}
		});

	});

});



$.ajax({
		url : './data/cookieService.php',
		type : 'GET',
		dataType : 'json',
		success : function(data){
			console.log(data);
			$("#username").val(data.username);
		},
		error : function(errorMsg){
			console.log(errorMsg);
		}
	});
