// Check off specific to-do when clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("complete");
});

//Click X to delete to-do
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	//avoid the event bubble
	event.stopPropagation();

});

//Add to-do
$("input[type='text']").keypress(function(event){
	//the enter event number is 13
	if(event.which === 13) {
		//grabbing new to-do text from the input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><i class='fa fa-trash'></i>" + todoText +"</li>")

	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});
