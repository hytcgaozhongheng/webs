
$(function(){
	 $(".topmenudiv2div").hover(function(){

	 	$(this).stop().animate({width:"280px"},200);
	 	$(this).find(".topmenudiv2ullia6").css("display","none");
	 },
	 function(){
	 	$(this).stop().animate({width:"80px"},200);
	 	$(this).find(".topmenudiv2ullia6").show();
	 });	
 });

	
