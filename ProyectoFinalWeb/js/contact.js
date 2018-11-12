let jsonToSend ={
					"action" : "CONTACT"
				};

$.ajax({
	url : './data/applicationLayer.php',
	type : 'GET',
	data : jsonToSend,
	ContentType : "application/json",
	dataType : "json",
	success : function(data){
		console.log(data);
		var $listContact = $(".list-contact-info");
		var $contactTitle = $("#contact-info");
		var $country = data[0].country;
		$contactTitle.append(" (" + $country + ")");
		var $email = data[0].email;
		var $phone = data[0].phone;
		var $address = data[0].address;

		//Display the pricing summary in the profile page
		$display_table_contact = '<table class="table"><tbody><tr><th scope="row">Email</th><td>' + $email +
		'</td></tr><tr><th scope="row">Phone</th><td>' + $phone +
		'</td></tr><tr><th scope="row">Address</th><td>' + $address +
		'</td></tr><tr><th scope="row">Twitter</th><td>@Marke</td></tr><tr><th scope="row">Facebook</th><td>Marke</td></tr><tr><th scope="row">Instagram</th><td>Marke</td></tr></tbody></table>';
		$listContact.append($display_table_contact);
	},
	error : function(err){
		console.log(err);
	}
});
