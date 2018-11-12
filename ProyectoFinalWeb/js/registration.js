$(document).ready(function() {

	function validateErrorMessageInputText($input, $input_msgId) {
		if ($input.val() == "" || $input.val() == "NONE") {
			$input.css("borderColor", "red");
			$input.css("borderBottomWidth", "1px");
			$input.css("borderLeftWidth", "1px");
			$input.css("borderRightWidth", "1px");
			$input.css("borderTopWidth", "1px");
			$input_msgId.css("visibility", "visible");
			return true;
		}
		else{
			$input.css("borderColor", "");
			$input_msgId.css("visibility", "hidden");
			return false;
		}
	}

	$("#clear_all").on( "click", function() {
		$('#registration_form:reset')
	});

	$("#register_button").on( "click", function(event) {
		var req1 = false, req2 = false, req3 = false, req4 = false, req5 = false, req6 = false, req7 = false, req8 = false;

		var $fname_input = $('#register_first_name');
		var $fname_input_msgId = $('#fname_err_msg');
		req1 = validateErrorMessageInputText($fname_input, $fname_input_msgId);

		var $lname_input = $('#register_last_name');
		var $lname_input_msgId = $('#lname_err_msg');
		req2 = validateErrorMessageInputText($lname_input, $lname_input_msgId);

		var $username_input = $('#register_username');
		var $username_input_msgId = $('#username_err_msg');
		req3 = validateErrorMessageInputText($username_input, $username_input_msgId);

		var $email_input = $('#register_email');
		var $email_input_msgId = $('#email_err_msg');
		req4 = validateErrorMessageInputText($email_input, $email_input_msgId);

		var $pw1_input = $('#register_password');
		var $pw1_input_msgId = $('#pw1_err_msg');
		req5 = validateErrorMessageInputText($pw1_input, $pw1_input_msgId);

		var $pw2_input = $('#register_confirm_password');
		var $pw2_input_msgId = $('#pw2_err_msg');
		req6 = validateErrorMessageInputText($pw2_input, $pw2_input_msgId);

		var $gender_input = $('#register_male');
		var $gender_input_msgId = $('#gender_err_msg');
		if(!$('#register_male').prop('checked') && !$('#register_female').prop('checked')) {
			$gender_input.css("borderColor", "red");
			$gender_input.css("borderBottomWidth", "2px");
			$gender_input.css("borderLeftWidth", "2px");
			$gender_input.css("borderRightWidth", "2px");
			$gender_input.css("borderTopWidth", "2px");
			$gender_input_msgId.css("visibility", "visible");
			req7 = true;
		}
		else {
			$gender_input.css("borderColor", "");
			$gender_input_msgId.css("visibility", "hidden");
			req7 = false;
		}

		var $country_input = $('#register_country');
		var $country_input_msgId = $('#country_err_msg');
		req8 = validateErrorMessageInputText($country_input, $country_input_msgId);

		if(req1 == false && req2 == false && req3 == false && req4 == false && req5 == false && req6 == false && req7 == false && req8 == false) {
			//$('#registration_form').attr('action', 'homepage.html');
			//return true;
		}
		else {
			return false;
		}

		event.preventDefault();
		let jsonToSend ={
							"userFirstName" : $("#register_first_name").val(),
							"userLastName" : $("#register_last_name").val(),
							"userEmail" : $("#register_email").val(),
							"username" : $("#register_username").val(),
							"userPassword" : $("#register_password").val(),
							"userGender" : $("input[name='gender']:checked").val(),
							"userCountry" : $("#register_country").val(),
							"action" : "REGISTRATION"
						};
		console.log("hola");
		$.ajax({
			url : "./data/applicationLayer.php",
			type : "POST",
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
