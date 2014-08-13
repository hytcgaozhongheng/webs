$(function(){
	$(".middlebuttom1").click(function(){
		
	 	index=$(this).attr("num");
		
	 	move();
	 });
	$(".topmenu2div").hover(
		function(){
		$(this).find(".topmenu2divxiala").show();
		$(this).find(".topmenu2xiala").slideDown();
	},
		function(){
		$(this).find(".topmenu2divxiala").hide();
		$(this).find(".topmenu2xiala").hide();
	});

	$(".middlemovepicturebuttomleft").click(function(){
				
	 	move1();
	 });

	$(".middlemovepicturebuttomright").click(function(){
				
	 	move2();
	 });
	$(".youlabuttom").click(function(){
				
	 	move3();
	 });




 	setInterval("move()",2000);
		
});


	var index=1;
	 function move(){
	 	$(".middlebuttom1").parent().find(".middlebuttom1").removeClass("middlebuttom2");
		$("#middlebuttom" + index).addClass("middlebuttom2");
		var m=index * 990;
	 	// $(".middlepic ul").css("left","-"+ m +"px");
	 	$(".middlepic ul").animate({"left": "-"+ m +"px"},"slow");

	 	index++;
	 	if(index>3)
	 	{
	 		index=0;
	 	}
	 }

	 var x=1;
	 function move2(){
	 	
		var n=x * 315;
	 	$(".middlemovepicturePic ul").animate({"left": "-"+ n +"px"},"slow");
	 }

	 var y=0;
	 function move1(){
	 	
		var w=0 * 315;
	 	$(".middlemovepicturePic ul").animate({"left": ""+ w +"px"},"slow");
	 }

	 var j=0 ;
	 function move3(){
	 	
		var k=j*412;

	 	$(".youla").animate({"left": "-"+ k +"px"},"slow");
	 	j++
	 	if(j>1)
	 	{
	 		j=0;
	 	}
	 }





