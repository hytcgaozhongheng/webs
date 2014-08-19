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
	$(".p161a1").click(function(){
		var m= $(this).parent().next().find(".p162all");
		// $(this).parent().next().find(".p162all2").show();
		bianhuan(m);
	});
	$(".p162buttom1").click(function(){
		var m= $(this).parent();
		bianhuan(m);
	});
	$(".p162buttom2").click(function(){
		var m= $(this).parent();
		bianhuan(m);
	});
	$(".p162all textarea").click(function(){
		var m= $(this).parent();
		bianhuan(m);
	});
	$(".p162all2 textarea").click(function(){
		var m= $(this).parent().parent().prev();
		n=0;
		bianhuan(m);
	});
});
	 var n=1;
	 function bianhuan(m){

	 	if (n==1) 
	 	{
	 	 	m.hide();
			m.next().show();
	 	};

	 	if (n==0) 
	 	{
	 	 	m.show();
	  		m.next().hide();
	 	};
		 
	 	

	 	n++;
	 	if (n>1) 
	 	{
	 		n=0;
	 	};
	 }
	 // var index=1;
	 // function move(){
	 // 	$(".middlebuttom1").parent().find(".middlebuttom1").removeClass("middlebuttom2");
		// $("#middlebuttom" + index).addClass("middlebuttom2");
		// var m=index * 990;
	 // 	// $(".middlepic ul").css("left","-"+ m +"px");
	 // 	$(".middlepic ul").animate({"left": "-"+ m +"px"},"slow");

	 // 	index++;
	 // 	if(index>3)
	 // 	{
	 // 		index=0;
	 // 	}
	 // }