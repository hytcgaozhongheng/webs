
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
	 	$(this).parent().parent().parent().stop().animate({"width":"560px"},"slow");
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
	 $(".bottompicturetitle a").click(function(){
	 	$(this).parent().find("a").removeClass("special");
	 	$(this).addClass("special");
	 });
 	$(".bottompicturepiclistpic").hover(function(){
 		$(this).parent().stop().animate({"background-size":"120%"},300);
 		$(this).stop().animate({"opacity":"0.2"},300);
 	},function(){
	 	$(this).parent().stop().animate({"background-size":"100%"},300);
	 	$(this).stop().animate({"opacity":"0.7"},300);
	 });
	 // $(".middlecontentdivulli2li3").hover(function(){

	 // },function(){
	 	
	 // });
	// setInterval("move()",2000);
	
	$(".middlecontentdivulli2li1").hover(
		function() {

			start=setInterval(roll,700);
		},
	function() {
		 
		 clearInterval(start);

	});
	$(".middlecontentdivulli2li2").hover(
		function() {

			start2=setInterval(roll1,700);
		},
	function() {
		 
		 clearInterval(start2);

	});

	$(".middlecontentdivulli2li3").hover(
		function() {

			start3=setInterval(roll2,700);
		},
	function() {
		 
		 clearInterval(start3);

	});

 });

	 // var index=1;
	 //  function move(){
	 //  	var h=index*97;
	 //  	$(".middlecontentdivulli2li1ul2").innerHTML=$(".middlecontentdivulli2li1ul1").innerHTML;

	  	
	  	 

	 //  }
var m=1;

function roll(){

	
	for(i=1;i<6;i++)
	{
		var x=$(".demo"+i).css("top");
		var a=x.split("px");
		var w=a[0]-97;
	

		$(".demo"+i).animate({"top":""+ w +"px"});
	}
	var n=5-m;
	 $(".demo"+m).animate({"top":n*97+"px"},0);

	m++;
	if (m>5) {
		m=1;
	};	
}

var b=1;

function roll1(){

	
	for(i=1;i<6;i++)
	{
		var x=$(".demo2"+i).css("top");
		var a=x.split("px");
		var w=a[0]-97;
	

		$(".demo2"+i).animate({"top":""+ w +"px"});
	}
	var z=5-b;
	 $(".demo2"+b).animate({"top":z*97+"px"},0);

	b++;
	if (b>5) {
		b=1;
	};	
}

var c=1;

function roll2(){

	
	for(i=1;i<6;i++)
	{
		var x=$(".demo3"+i).css("top");
		var a=x.split("px");
		var w=a[0]-97;
	

		$(".demo3"+i).animate({"top":""+ w +"px"});
	}
	var l=5-c;
	 $(".demo3"+c).animate({"top":l*97+"px"},0);

	c++;
	if (c>5) {
		c=1;
	};	
}

// var o=1;

// function rolll(){

	
// 	for(d=1;d<6;d++)
// 	{
// 		var f=$("#demo"+d).css("top");
// 		var g=f.split("px");
// 		var k=g[0]-97;
	

// 		$("#demo"+d).animate({"top":""+ k +"px"});
// 	}
// 	var z=5-o;
// 	 $("#demo"+o).animate({"top":z*97+"px"},0);

// 	o++;
// 	if (o>5) {
// 		o=1;
// 	};	
// }

//  var p=1;

//  function rollll(){

	
//  	for(j=1;j<6;j++)
//  	{
//  		var t=$("#demo3"+j).css("top");
// 		var u=t.split("px");
// 		var e=u[0]-97;
		

// 		$("#demo3"+j).animate({"top":""+ e +"px"});
//  	}
//  	var v=5-p;
//  	 $("#demo3"+p).animate({"top":v*97+"px"},0);
//  	p++;
//  	if (p>5) {
//  		p=1;
//  	};	
//  }


	
