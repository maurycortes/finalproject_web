
$(document).ready(function(){
	$("#get_plan_button").on( "click", function(event) {
		$('#list-payment-summary').empty();

		$base_price_x1 = 190000;
		$base_price_x2 = 240000;
		$base_price_x3 = 320000;
		$base_price = 0;
		$final_price = 0;
		$payment_time = 0;
		$monthly_payment = 0;
		$taxes = 0;
		$initial_payment_perc = parseInt($("#choose_initial_payment").val()) / 100;
		switch ($initial_payment_perc) {
			case 0.1:
				$taxes = 0.20;
				break;
			case 0.2:
				$taxes = 0.18;
				break;
			case 0.3:
				$taxes = 0.15;
				break;
			case 0.4:
				$taxes = 0.10;
				break;
			case 0.5:
				$taxes = 0.04;
				break;
			default: $taxes = 0.20;
		}




		$model = $("input[name='model']:checked").val();
		switch ($model) {
			case 'X1':
				$final_price += $base_price_x1;
				$base_price = $final_price;
				break;
			case 'X2':
				$final_price += $base_price_x2;
				$base_price = $final_price;
				break;
			case 'X3':
				$final_price += $base_price_x3;
				$base_price = $final_price;
				break;
			default:
				$final_price += $base_price_x1;
				$base_price = $final_price;
		}



		$financing_time = $("input[name='financing_time']:checked").val();
		switch ($financing_time) {
			case '12months':
				$payment_time = 12;
				break;
			case '24months':
				$payment_time = 24;
				break;
			case '48months':
				$payment_time = 48;
				break;
			default:
				$payment_time = 12;
		}



		$motor = $("#choose_motor").val();
		switch ($motor) {
			case 'motor2':
				if($model == 'X1') {
					$final_price += 2000;
				}
				break;
			case 'motor3':
				if($model == 'X1' || $model == 'X2') {
					$final_price += 3000;
				}
				break;
			case 'motor4':
				if($model == 'X1' || $model == 'X2' || $model == 'X3') {
					$final_price += 6000;
				}
				break;
			default:
		}




		$seats = $("#choose_seats_material").val();
		switch ($seats) {
			case 'seats2':
				if($model == 'X1' || $model == 'X2') {
					$final_price += 5000;
				}
				break;
			case 'seats3':
				if($model == 'X1' || $model == 'X2' || $model == 'X3') {
					$final_price += 8000;
				}
				break;
			default:
		}




		$wheels = $("#choose_wheels").val();
		switch ($wheels) {
			case 'wheels2':
				if($model == 'X1') {
					$final_price += 4000;
				}
				break;
			case 'wheels3':
				if($model == 'X1' || $model == 'X2' || $model == 'X3') {
					$final_price += 7000;
				}
				break;
			default:
		}




		$sound = $("#choose_sound").val();
		switch ($sound) {
			case 'sound2':
				if($model == 'X1') {
					$final_price += 2000;
				}
				break;
			case 'sound3':
				if($model == 'X1' || $model == 'X2') {
					$final_price += 6000;
				}
				break;
			case 'sound4':
				if($model == 'X1' || $model == 'X2' || $model == 'X3') {
					$final_price += 8500;
				}
				break;
			default:
		}




		$parking_sensors = $("#choose_parking_sensors:checked").val();
		if($parking_sensors == 'on') {
				if($model == 'X1' || $model == 'X2') {
					$final_price += 2500;
				}
		}




		$personal_assistant = $("#choose_personal_assistant:checked").val();
		if($personal_assistant == 'on') {
				if($model == 'X1' || $model == 'X2') {
					$final_price += 1000;
				}
		}




		$automatic_parking = $("#choose_automatic_parking:checked").val();
		if($automatic_parking == 'on') {
				if($model == 'X1' || $model == 'X2') {
					$final_price += 8000;
				}
		}




		$bluetooth = $("#choose_bluetooth:checked").val();
		if($bluetooth == 'on') {
				if($model == 'X1') {
					$final_price += 800;
				}
		}




		$automatic_windows = $("#choose_automatic_windows:checked").val();
		if($automatic_windows == 'on') {
				if($model == 'X1') {
					$final_price += 1500;
				}
		}




		$gps = $("#choose_gps:checked").val();
		if($gps == 'on') {
				if($model == 'X1') {
					$final_price += 2500;
				}
		}



		//Calculate the user's financial plan
		$initial_payment = $final_price * $initial_payment_perc;
		$price_minus_initial_payment = $final_price - $initial_payment;
		$monthly_payment = ($price_minus_initial_payment / $payment_time) * (1 + $taxes);

		//Format the results
		$base_price = $base_price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
		$final_price = $final_price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
		$initial_payment = $initial_payment.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
		$monthly_payment = $monthly_payment.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
		$taxes = $taxes * 100;
		$taxes = $taxes.toString();

		//Display the results in the calculator page
		$display_table_pricing_summary = '<table class="table"><tbody><tr><th scope="row">Model</th><td>' + $model +
		'</td></tr><tr><th scope="row">Base Price</th><td>' + $base_price +
		'</td></tr><tr><th scope="row">Final Price</th><td>' + $final_price +
		'</td></tr><tr><th scope="row">Initial Payment</th><td>' + $initial_payment +
		'</td></tr><tr><th scope="row">Monthly Payment</th><td>' + $monthly_payment +
		'</td></tr><tr><th scope="row">Taxes</th><td>' + $taxes +
		' %</td></tr></tbody></table>';
		var $paymentSummaryTitle = $("#pricing_summary_title");
		$paymentSummaryTitle.text("Payment summary");
		var $paymentSummary = $(".list-payment-summary");
		$paymentSummary.append($display_table_pricing_summary);





		let jsonToSendPricing = {
			"model" : $model,
			"base_price" : $base_price,
			"final_price" : $final_price,
			"initial_payment" : $initial_payment,
			"monthly_payment" : $monthly_payment,
			"taxes" : $taxes,
			"action" : "CALCULATOR"
		};
		$.ajax({
			url : "./data/applicationLayer.php",
			type : "GET",
			data : jsonToSendPricing,
			ContentType : "application/json",
			dataType : "json",
			success : function(data){
				console.log(data);
			},
			error : function(error){
				console.log(error);
			}
		});
	});
});
