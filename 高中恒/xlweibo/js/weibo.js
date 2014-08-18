$(function(){
	$(".topallli").hover(function(){
		$(this).find(".topallli2").css("background-color","rgb(255,255,255)");
		$(this).find(".topallli2").find(".topallli2a").css("color","rgb(0,0,0)");
		$(this).find(".topallli2").find("p1").css({"border":"3px solid rgb(0,0,0)","border-left-color":"transparent","border-right-color": "transparent","border-bottom-color": "transparent"});
		$(this).find(".topallli2").find(".p2").css({"background-position":"-783px -25px","background-image":"images/102.32-jan140811165800.png"});
		$(this).find(".topallli2").find(".p3").css({"background-position":"-783px -0px","background-image":"images/102.32-jan140811165800.png"});
		$(this).find(".topallli2").find(".p4").css({"background-position":"-783px -50px","background-image":"images/102.32-jan140811165800.png"});
		$(this).find(".topallli2").find(".p5").css({"background-position":"-783px -75px","background-image":"images/102.32-jan140811165800.png"});
		$(this).find(".topallli2div1").slideDown();
	},function(){
		
		$(this).find(".topallli2").css("background-color","rgb(166,146,108)");
		$(this).find(".topallli2").find(".topallli2a").css("color","rgb(255,255,255)");
		$(this).find(".topallli2").find("p1").css({"border":"3px solid rgb(255,255,255)","border-left-color":"transparent","border-right-color": "transparent","border-bottom-color": "transparent"});
		$(this).find(".topallli2").find(".p2").css({"background-position":"-734px -100px","background-image":"images/102.32-jan140811165800.png"});
		$(this).find(".topallli2").find(".p3").css({"background-position":"-734px -75px","background-image":"images/102.32-jan140811165800.png"});
		$(this).find(".topallli2").find(".p4").css({"background-position":"-734px -125px","background-image":"images/102.32-jan140811165800.png"});
		$(this).find(".topallli2").find(".p5").css({"background-position":"-734px -150px","background-image":"images/102.32-jan140811165800.png"});
		$(this).find(".topallli2div1").hide();
	});
});
