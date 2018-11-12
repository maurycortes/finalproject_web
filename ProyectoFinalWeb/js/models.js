

//$('#list-models').empty();
/*let jsonToSendHomepage = {
	"action" : "MODELS"
};
$.ajax({
	url : "./data/applicationLayer.php",
	type : "GET",
	data : jsonToSendHomepage,
	ContentType : "application/json",
	dataType : "json",
	success : function(data){
		var $listComment = $(".list-models");
		$(data).each(function(){
			var $comment = $(this)[0].commentText;
			if ($comment != "") {
				$listComment.append("<div>" + $comment + "</div>");
			}
		});
	},
	error : function(error){
		console.log(error);
	}
});*/


/*
$(document).ready(function(){
	$("button[name=see_more]").on( "click", function(event) {
		event.preventDefault();
		$model = this.value;
		let jsonToSend ={
				"model" : $model,
				"action" : "SEEMORE"
		};
		$.ajax({
			url : "./data/applicationLayer.php",
			type : "GET",
			data : jsonToSend,
			ContentType : "application/json",
			dataType : "json",
			success : function(data){
				var $listComment = $(".list-models");
				if ($comment != "") {
					$listComment.append("<div>" + $comment + "</div>");
					$(location).attr("href", "./modelDetail.html");
				}
			},
			error : function(error){
				console.log(error);
			}
		});

	});
});
*/
