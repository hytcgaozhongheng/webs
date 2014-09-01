
$(function(){
	 $(".topmenudiv2div").hover(function(){

	 	$(this).stop().animate({width:"280px"},200);
	 	$(this).find(".topmenudiv2ullia6").css("display","none");
	 },
	 function(){
	 	$(this).stop().animate({width:"80px"},200);
	 	$(this).find(".topmenudiv2ullia6").show();
	 });	
	 $(".middlecontentdivulli2li1").mouseover(function(){
	 	$(this).parent().parent().parent().stop().animate({"width":"495px"},"slow");
	 	$(this).stop().animate({"width":"495px"},"slow");
	 	roll();
	 });
	 $(".middlecontentdivulli2li1").mouseleave(function(){
	 	$(this).stop().animate({"width":"144px"},"slow");
	 	$(this).parent().parent().parent().stop().animate({"width":"483px"},"slow");

	 });
	 $(".middlecontentdivulli2li2").mouseover(function(){
	 	$(this).parent().parent().parent().stop().animate({"width":"564px"},"slow");
	   	$(this).parent().find(".middlecontentdivulli2li1").stop().animate({"width":"0px"},"slow");
	   	$(this).stop().animate({"width":"564px"},"slow");
	   });
	 $(".middlecontentdivulli2li2").mouseleave(function(){
	 	$(this).parent().parent().parent().stop().animate({"width":"483px"},"slow");
	 	$(this).parent().find(".middlecontentdivulli2li1").stop().animate({"width":"144px"},"slow");
	 	$(this).stop().animate({"width":"168px"},"slow");
	 });
	 $(".middlecontentdivulli2li3").mouseover(function(){
	 	$(this).parent().parent().parent().stop().animate({"width":"555px"},"slow");
	   	$(this).parent().find(".middlecontentdivulli2li1").stop().animate({"width":"0px"},"slow");
	   	$(this).parent().find(".middlecontentdivulli2li2").stop().animate({"width":"0px"},"slow");
	   	$(this).stop().animate({"width":"555px"},"slow");
	   });
	 $(".middlecontentdivulli2li3").mouseleave(function(){
	 	$(this).parent().parent().parent().stop().animate({"width":"483px"},"slow");
	 	$(this).parent().find(".middlecontentdivulli2li1").stop().animate({"width":"144px"},"slow");
	 	$(this).parent().find(".middlecontentdivulli2li2").stop().animate({"width":"168px"},"slow");
	 	$(this).stop().animate({"width":"200px"},"slow");
	 });
	 // $(".middlecontentdivulli2li3").hover(function(){

	 // },function(){
	 	
	 // });
	// setInterval("move()",2000);
	var start=setInterval(roll,speed);
	$(".middlecontentdivulli2li1div").onmouseover=function() {clearInterval(start)};
	$(".middlecontentdivulli2li1div").onmouseout=function() {start=setInterval(roll,speed)};

 });

	 // var index=1;
	 //  function move(){
	 //  	var h=index*97;
	 //  	$(".middlecontentdivulli2li1ul2").innerHTML=$(".middlecontentdivulli2li1ul1").innerHTML;

	  	
	  	 

	 //  }
var speed=50;

function roll(){
	$(".middlecontentdivulli2li1ul2").innerHTML=$(".middlecontentdivulli2li1ul1").innerHTML;
	if($(".middlecontentdivulli2li1ul2").offsetTop-$(".middlecontentdivulli2li1div").scrollTop<=0)  {  //当滚动到第二部分的顶部位置时
$(".middlecontentdivulli2li1div").scrollTop-=$(".middlecontentdivulli2li1ul1").offsetHeight; //重置至第一部分顶部位置,相当于$$('box').scrollTop=0;
}
else{
$(".middlecontentdivulli2li1div").scrollTop++ ;
$$('refer').innerHTML=$(".middlecontentdivulli2li1ul2").offsetTop+' '+$(".middlecontentdivulli2li1div").offsetHeight+' '+$(".middlecontentdivulli2li1div").scrollTop  //无他，参考值尔
}
	}

	
