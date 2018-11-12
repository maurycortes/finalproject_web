

$('#list-comments').empty();
let jsonToSendHomepage = {
	"action" : "HOMEPAGE"
};
$.ajax({
	url : "./data/applicationLayer.php",
	type : "GET",
	data : jsonToSendHomepage,
	ContentType : "application/json",
	dataType : "json",
	success : function(data){
		var $listComment = $(".list-comments");
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
});
