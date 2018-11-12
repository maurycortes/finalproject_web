let jsonToSend ={
					"action" : "PROFILE"
				};

$.ajax({
	url : './data/applicationLayer.php',
	type : 'GET',
	data : jsonToSend,
	ContentType : "application/json",
	dataType : "json",
	success : function(data){
		var $listProfile = $(".list-profile-info");
		var $firstName = data[0].fName;
		var $lastName = data[0].lName;
		var $email = data[0].email;
		var $username = data[0].username;
		var $gender = data[0].gender;
		var $country = data[0].country;

		//Display the profile info in the profile page
		$display_table_profile = '<table class="table"><tbody><tr><th scope="row">Username</th><td>' + $username +
		'</td></tr><tr><th scope="row">First Name</th><td>' + $firstName +
		'</td></tr><tr><th scope="row">Last Name</th><td>' + $lastName +
		'</td></tr><tr><th scope="row">Email</th><td>' + $email +
		'</td></tr><tr><th scope="row">Gender</th><td>' + $gender +
		'</td></tr><tr><th scope="row">Country</th><td>' + $country +
		'</td></tr></tbody></table>';
		$listProfile.append($display_table_profile);
	},
	error : function(err){
		console.log(err);
	}
});


let jsonToSendPricing ={
					"action" : "MYPRICING"
				};

$.ajax({
	url : './data/applicationLayer.php',
	type : 'GET',
	data : jsonToSendPricing,
	ContentType : "application/json",
	dataType : "json",
	success : function(data){
		console.log(data);
		var $model = data[0].model;
		var $base_price = data[0].base_price;
		var $final_price = data[0].final_price;
		var $initial_payment = data[0].initial_payment;
		var $monthly_payment = data[0].monthly_payment;
		var $taxes = data[0].taxes;

		//Display the pricing summary in the profile page
		$display_table_pricing_summary = '<table class="table"><tbody><tr><th scope="row">Model</th><td>' + $model +
		'</td></tr><tr><th scope="row">Base Price</th><td>' + $base_price +
		'</td></tr><tr><th scope="row">Final Price</th><td>' + $final_price +
		'</td></tr><tr><th scope="row">Initial Payment</th><td>' + $initial_payment +
		'</td></tr><tr><th scope="row">Monthly Payment</th><td>' + $monthly_payment +
		'</td></tr><tr><th scope="row">Taxes</th><td>' + $taxes +
		' %</td></tr></tbody></table>';
		var $paymentSummaryTitle = $("#my_pricing_info");
		$paymentSummaryTitle.text("My last payment summary");
		var $paymentSummary = $(".list-my-pricing-info");
		$paymentSummary.append($display_table_pricing_summary);
	},
	error : function(err){
		console.log(err);
	}
});
