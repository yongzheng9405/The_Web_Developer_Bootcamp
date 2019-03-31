// Check off specific to-do when clicking
$("li").click(function(){
	$(this).toggleClass("complete");
});

//Click X to delete to-do
$("span").click(function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	//avoid the event bubble
	event.stopPropagation();

});
